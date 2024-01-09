import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'

export default function GoalsCard({
  type,
  data,
}: {
  type: string
  data: Array<object>
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [key, setKey] = useState('')
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    if (type === 'happiness') {
      setTitle('Happiness')
      setDescription(
        `Happiness the past 7 days. Happiness yesterday was a ${
          (data[0] as { happy_overall_today: string }).happy_overall_today
        }`
      )
      setKey('happy_overall_today')
    } else if (type === 'satisfaction') {
      setTitle('Work/Business Satisfaction')
      setDescription(
        `Satisfaction the past 7 days. Satisfaction yesterday was a ${
          (data[0] as { happy_work_today: string }).happy_work_today
        }`
      )
      setKey('happy_work_today')
    }
  }, [data, type])

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
        ).toLocaleDateString('en-US', { weekday: 'long' }),
      }
    })
    setChartData(cleanData)
  }, [data])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex aspect-video items-center justify-center p-6'>
        <div className='flex justify-center items-center gap-2 w-full h-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={chartData}>
              <XAxis dataKey={'Timestamp'} interval={0} />
              <YAxis domain={[0, 10]} tickCount={10} />
              <Tooltip />
              <Line
                type='monotone'
                dataKey={key}
                activeDot={{ r: 8 }}
                name={title}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
