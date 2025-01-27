'use client'

import { useCheckoutClientSSE } from '@/hooks/sse'
import { api } from '@/utils/api'
import { organizationPageLink } from '@/utils/nav'
import { CheckoutPublic, CheckoutStatus, Organization } from '@polar-sh/api'
import Avatar from '@polar-sh/ui/components/atoms/Avatar'
import Button from '@polar-sh/ui/components/atoms/Button'
import ShadowBox from '@polar-sh/ui/components/atoms/ShadowBox'
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import { Stripe, loadStripe } from '@stripe/stripe-js'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import LogoType from '../Brand/LogoType'
import { SpinnerNoMargin } from '../Shared/Spinner'
import CheckoutBenefits from './CheckoutBenefits'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '')

const StripeRequiresAction = ({
  stripe,
  checkout,
  updateCheckout,
}: {
  stripe: Stripe | null
  checkout: CheckoutPublic
  updateCheckout: () => Promise<void>
}) => {
  const [pendingHandling, setPendingHandling] = useState(false)
  const { payment_intent_status, payment_intent_client_secret } =
    checkout.payment_processor_metadata as Record<string, string>
  const handleNextAction = useCallback(
    async (stripe: Stripe): Promise<void> => {
      setPendingHandling(true)
      if (payment_intent_status === 'requires_action') {
        try {
          await stripe.handleNextAction({
            clientSecret: payment_intent_client_secret,
          })
        } catch {
        } finally {
          await updateCheckout()
          setPendingHandling(false)
        }
      }
    },
    [payment_intent_client_secret, payment_intent_status, updateCheckout],
  )

  useEffect(() => {
    if (!stripe) {
      return
    }
    handleNextAction(stripe)
  }, [stripe, handleNextAction])

  if (!stripe) {
    return null
  }

  if (payment_intent_status === 'requires_action') {
    return (
      <Button
        type="button"
        onClick={() => handleNextAction(stripe)}
        loading={pendingHandling}
      >
        Confirm payment
      </Button>
    )
  }

  return <SpinnerNoMargin className="h-8 w-8" />
}

export interface CheckoutConfirmationProps {
  checkout: CheckoutPublic
  organization: Organization
  customerSessionToken?: string
  disabled?: boolean
}

export const CheckoutConfirmation = ({
  checkout: _checkout,
  organization,
  customerSessionToken,
  disabled,
}: CheckoutConfirmationProps) => {
  const [checkout, setCheckout] = useState(_checkout)
  const { product, status } = checkout

  const updateCheckout = useCallback(async () => {
    const updatedCheckout = await api.checkouts.clientGet({
      clientSecret: checkout.client_secret,
    })
    setCheckout(updatedCheckout)
  }, [checkout])

  const checkoutEvents = useCheckoutClientSSE(checkout.client_secret)
  useEffect(() => {
    if (disabled || status !== CheckoutStatus.CONFIRMED) {
      return
    }
    checkoutEvents.on('checkout.updated', updateCheckout)
    return () => {
      checkoutEvents.off('checkout.updated', updateCheckout)
    }
  }, [disabled, checkout, status, checkoutEvents, updateCheckout])

  return (
    <ShadowBox className="flex w-full max-w-7xl flex-col items-center justify-between gap-y-24 md:px-32 md:py-24">
      <div className="flex w-full max-w-md flex-col gap-y-8">
        {organization.profile_settings?.enabled ? (
          <Link
            href={organizationPageLink(organization)}
            className="flex self-start"
          >
            <Avatar
              className="h-16 w-16"
              avatar_url={organization.avatar_url}
              name={organization.name}
            />
          </Link>
        ) : (
          <Avatar
            className="h-16 w-16"
            avatar_url={organization.avatar_url}
            name={organization.name}
          />
        )}
        <h1 className="text-2xl font-medium">
          {status === CheckoutStatus.CONFIRMED &&
            'We are processing your order'}
          {status === CheckoutStatus.SUCCEEDED && 'Your order was successful!'}
          {status === CheckoutStatus.FAILED &&
            'A problem occurred while processing your order'}
        </h1>
        <p className="dark:text-polar-500 text-gray-500">
          {status === CheckoutStatus.CONFIRMED &&
            'Please wait while we are listening for those webhooks.'}
          {status === CheckoutStatus.SUCCEEDED &&
            `You're now eligible for the benefits of ${product.name}.`}
          {status === CheckoutStatus.FAILED &&
            'Please try again or contact support.'}
        </p>
        {status === CheckoutStatus.CONFIRMED && (
          <div className="flex items-center justify-center">
            {checkout.payment_processor === 'stripe' ? (
              <Elements stripe={stripePromise}>
                <ElementsConsumer>
                  {({ stripe }) => (
                    <StripeRequiresAction
                      stripe={stripe}
                      checkout={checkout}
                      updateCheckout={updateCheckout}
                    />
                  )}
                </ElementsConsumer>
              </Elements>
            ) : (
              <SpinnerNoMargin className="h-8 w-8" />
            )}
          </div>
        )}
        {status === CheckoutStatus.SUCCEEDED && (
          <>
            <CheckoutBenefits
              checkout={checkout}
              customerSessionToken={customerSessionToken}
            />
            <p className="dark:text-polar-500 text-center text-xs text-gray-500">
              This order was processed by our online reseller & Merchant of
              Record, Polar, who also handles order-related inquiries and
              returns.
            </p>
          </>
        )}
      </div>
      <div className="dark:text-polar-500 flex w-full flex-row items-center justify-center gap-x-3 text-sm text-gray-500">
        <span>Powered by</span>
        <LogoType className="h-5" />
      </div>
    </ShadowBox>
  )
}
