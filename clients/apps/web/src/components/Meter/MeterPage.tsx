'use client'

import { Events } from '@/components/Events/Events'
import { MeterChart } from '@/components/Meter/MeterChart'
import MeterEventsTab from '@/components/Meter/MeterEventsTab'
import { MeterGetStarted } from '@/components/Meter/MeterGetStarted'
import Spinner from '@/components/Shared/Spinner'
import {
  useMeter,
  useMeterEvents,
  useMeterQuantities,
} from '@/hooks/queries/meters'
import { UTCDate } from '@date-fns/utc'
import { schemas } from '@polar-sh/client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@polar-sh/ui/components/atoms/Card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@polar-sh/ui/components/atoms/Tabs'
import { endOfMonth, startOfMonth, subDays, subMonths } from 'date-fns'
import { useMemo } from 'react'

export const MeterPage = ({ meter: _meter }: { meter: schemas['Meter'] }) => {
  const { data: meter } = useMeter(_meter.id, _meter)

  const startChart = useMemo(() => subDays(new UTCDate(), 7), [])
  const endChart = useMemo(() => new UTCDate(), [])
  const { data: chartQuantities, isLoading: chartLoading } = useMeterQuantities(
    _meter.id,
    startChart,
    endChart,
    'day',
  )

  const lastMonthStart = useMemo(
    () => startOfMonth(subMonths(new UTCDate(), 1)),
    [],
  )
  const lastMonthEnd = useMemo(
    () => endOfMonth(subMonths(new UTCDate(), 1)),
    [],
  )
  const currentMonthStart = useMemo(() => startOfMonth(new UTCDate()), [])
  const currentMonthEnd = useMemo(() => endOfMonth(new UTCDate()), [])
  const { data: figuresQuantities } = useMeterQuantities(
    _meter.id,
    lastMonthStart,
    currentMonthEnd,
    'month',
  )

  const { data } = useMeterEvents(_meter.id)

  const meterEvents = useMemo(() => {
    if (!data) return []
    return data.pages[0].items
  }, [data])

  if (!meter) return null

  return (
    <>
      <Tabs defaultValue="overview" className="flex flex-col">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="products">Customers</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="flex flex-col gap-y-12">
          {chartLoading ? (
            <div className="flex h-[300px] flex-col items-center justify-center">
              <Spinner />
            </div>
          ) : chartQuantities ? (
            <MeterChart data={chartQuantities.quantities} interval="day" />
          ) : (
            <div className="flex h-[300px] flex-col items-center justify-center">
              <span className="text-lg">No data available</span>
            </div>
          )}
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-xl">Activity</h2>
            </div>
            <div className="flex flex-row gap-x-8">
              <Card className="dark:border-polar-700 flex-1 rounded-3xl border border-gray-200">
                <CardHeader>
                  <span className="dark:text-polar-500 text-gray-500">
                    Previous Period
                  </span>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl">
                    {figuresQuantities
                      ? Intl.NumberFormat('en-US', {
                          notation: 'standard',
                        }).format(figuresQuantities.quantities[0].quantity)
                      : '—'}
                  </span>
                </CardContent>
                <CardFooter>
                  <span className="dark:text-polar-500 text-gray-500">
                    {lastMonthStart.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    -{' '}
                    {lastMonthEnd.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </CardFooter>
              </Card>
              <Card className="dark:border-polar-700 flex-1 rounded-3xl border border-gray-200">
                <CardHeader>
                  <span className="dark:text-polar-500 text-gray-500">
                    Current Period
                  </span>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl">
                    {figuresQuantities
                      ? Intl.NumberFormat('en-US', {
                          notation: 'standard',
                        }).format(figuresQuantities.quantities[1].quantity)
                      : '—'}
                  </span>
                </CardContent>
                <CardFooter>
                  <span className="dark:text-polar-500 text-gray-500">
                    {currentMonthStart.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    -{' '}
                    {currentMonthEnd.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </CardFooter>
              </Card>
            </div>
          </div>
          {meterEvents.length > 0 ? (
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl">Latest meter events</h3>
                <p className="dark:text-polar-500 text-gray-500">
                  Recently received meter events
                </p>
              </div>
              <Events events={meterEvents} />
            </div>
          ) : (
            <MeterGetStarted meter={meter} />
          )}
        </TabsContent>
        <TabsContent value="events">
          <MeterEventsTab meter={meter} />
        </TabsContent>
      </Tabs>
    </>
  )
}
