import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function HabitCard({ data }: { data: Array<object> }) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const sortedData = data
      .slice()
      .reverse()
      .slice(data.length - 7, data.length)
    const cleanData = sortedData.map((day) => {
      return {
        ...day,
        Timestamp: new Date(
          (day as { Timestamp: string }).Timestamp
        ).toLocaleDateString(undefined, { weekday: 'long' }),
      }
    })
    setChartData(cleanData)
  }, [data])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Habit Tracker</CardTitle>
        <CardDescription>
          Principle of 100. Do it consistently for 100 days to become second
          nature.
        </CardDescription>
      </CardHeader>
      <CardContent className='flex aspect-video items-center justify-center p-6'>
        <div className='flex justify-center items-center gap-2 w-full h-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={chartData}>
              <XAxis dataKey='Timestamp' />
              <YAxis tickCount={2} />
              <Tooltip />
              <Bar
                stackId='a'
                dataKey='dsa_y_n'
                name='Solve DSA'
                fill='#00AAFF'
              />
              <Bar
                stackId='a'
                dataKey='read_scriptures_y_n'
                name='Read Scriptures'
                fill='#FF3D7F'
              />
              <Bar
                stackId='a'
                dataKey='2glass_y_n'
                name='2 Glasses of Water in the Morning'
                fill='#FE8B05'
              />
              <Bar
                stackId='a'
                dataKey='workout_y_n'
                name='Workout'
                fill='#F0C27B'
              />
              <Bar
                stackId='a'
                dataKey='cold_shower_y_n'
                name='Cold Shower'
                fill='#CDE9CA'
              />
              <Bar
                stackId='a'
                dataKey='pd_y_n'
                name='Read Fundamentals to Software Architecture'
                fill='#616668'
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
