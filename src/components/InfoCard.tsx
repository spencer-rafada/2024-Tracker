/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoCard({ type, data }: { type: string, data: any }) {
  const [title, setTitle] = useState("")
  const [answer, setAnswer] = useState("")
  console.log(data)

  useEffect(() => {
    if (type === 'achieve_today') {
      setTitle("What do I want to achieve today?")
      setAnswer(data.thoughts_achieve_tomorrow)
    } else if (type === 'improve_today') {
      setTitle("What do I want to improve today?")
      setAnswer(data.thoughts_improved)
    }
  }, [data, type])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex aspect-video items-center justify-center p-6">
        <span className='text-4xl font-semibold'>{answer}</span>
      </CardContent>
    </Card>
  )
}
