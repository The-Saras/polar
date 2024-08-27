'use client'

import { FileDownloadOutlined } from '@mui/icons-material'
import { Transition, motion } from 'framer-motion'
import Link from 'next/link'
import Button from 'polarkit/components/ui/atoms/button'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import GetStartedButton from '../Auth/GetStartedButton'
import { DiscordIcon } from '../Benefit/utils'
import GitHubIcon from '../Icons/GitHubIcon'
import SubscriptionTierCard from '../Subscriptions/SubscriptionTierCard'
import { quadraticCurve } from './Hero/Hero.utils'
import { MOCKED_SUBSCRIPTIONS } from './utils'

export const Benefits = () => {
  const [points, setPoints] = useState({
    benefits: [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    subscription: { x: 0, y: 0 },
  })

  const setPoint = useCallback(
    (index?: number) => (el: HTMLDivElement | null) => {
      if (el) {
        const boundingBox = el.getBoundingClientRect()

        if (typeof index === 'number') {
          setPoints((prev) => {
            const benefits = [...prev.benefits]
            benefits.splice(index, 1, {
              x: boundingBox.width + 8,
              y: el.offsetTop + boundingBox.height / 2,
            })

            return {
              ...prev,
              benefits,
            }
          })
        } else {
          setPoints((prev) => ({
            ...prev,
            subscription: {
              x: el.offsetLeft - 8,
              y: el.offsetTop + boundingBox.height / 2,
            },
          }))
        }
      }
    },
    [],
  )

  const benefit1 = useMemo(() => setPoint(0), [setPoint])
  const benefit2 = useMemo(() => setPoint(1), [setPoint])
  const benefit3 = useMemo(() => setPoint(2), [setPoint])
  const subscription = useMemo(() => setPoint(), [setPoint])

  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex w-full flex-col gap-x-24 gap-y-16 md:flex-row">
        <div className="flex h-full flex-col items-center gap-y-4 text-center md:items-start md:gap-y-8 md:text-left">
          <h2 className="text-3xl !leading-tight md:text-5xl">
            Powerful products with flexible benefits
          </h2>
          <p className="dark:text-polar-400 text-lg text-gray-600">
            Start offering developer first products and services in minutes -
            paid once, monthly or annually
          </p>
          <div className="flex flex-row items-center justify-start gap-x-4">
            <GetStartedButton text="Get Started" />
            <Link href={`/benefits`}>
              <Button variant="ghost">More Benefits</Button>
            </Link>
          </div>
        </div>

        <div className="relative flex grid-cols-2 flex-col gap-x-4 gap-y-8 md:grid md:gap-x-8 lg:gap-x-16">
          <div className="hidden flex-col gap-y-6 md:flex">
            <Benefit
              ref={benefit1}
              icon={<GitHubIcon />}
              title="Private Repository Access"
              description="Gatekeep GitHub repositories to paying customers"
            />
            <Benefit
              ref={benefit2}
              icon={<DiscordIcon />}
              title="Discord Channel Access"
              description="Give customers exclusive access to Discord channels"
            />
            <Benefit
              ref={benefit3}
              icon={<FileDownloadOutlined />}
              title="File Downloads"
              description="Any kind of file up to 10GB"
            />
          </div>

          <div className="flex h-full flex-col" ref={subscription}>
            <SubscriptionTierCard
              className="h-full"
              subscriptionTier={MOCKED_SUBSCRIPTIONS[0]}
            />
          </div>
          <motion.svg
            className="dark:text-polar-700 pointer-events-none absolute inset-0 z-10 hidden h-full w-full text-gray-200 xl:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path start={points.benefits[0]} end={points.subscription} />
            <Path
              start={{ x: points.benefits[1].x, y: points.subscription.y }}
              end={points.subscription}
            />
            <Path start={points.benefits[2]} end={points.subscription} />
          </motion.svg>
        </div>
      </div>
    </div>
  )
}

interface BenefitProps {
  icon: React.ReactElement
  title: string
  description: string
}

const Benefit = forwardRef<HTMLDivElement, BenefitProps>(
  ({ icon, title, description }, ref) => {
    const iconSize = 20

    return (
      <div
        ref={ref}
        className="dark:bg-polar-900 dark:border-polar-700 flex flex-col gap-y-4 rounded-3xl border border-gray-100 bg-white p-6"
      >
        <span className="text-2xl">
          {React.cloneElement(icon, {
            fontSize: 'inherit',
            width: iconSize,
            height: iconSize,
            size: iconSize,
          })}
        </span>
        <div className="flex flex-col gap-y-2">
          <h3>{title}</h3>
          <p className="dark:text-polar-500 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    )
  },
)

Benefit.displayName = 'Benefit'

interface PathProps {
  start: { x: number; y: number }
  end: { x: number; y: number }
  transition?: Transition
}

const Path = ({ start, end, transition }: PathProps) => {
  return (
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{
        ease: [0.75, 0, 0.25, 1],
        duration: 2,
        ...transition,
      }}
      strokeWidth={2}
      strokeDasharray="0 1"
      stroke="currentColor"
      fill="none"
      d={quadraticCurve(start, end)}
    />
  )
}