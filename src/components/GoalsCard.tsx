import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function GoalsCard({ type, data }: { type: string, data: any }) {
  const [title, setTitle] = useState("")

  useEffect(() => {
    if (type === 'achieve_today') {
      setTitle("What do I want to achieve today?")
    } else if (type === 'improve_today') {
      setTitle("What do I want to improve today?")
    }
  }, [data, type])

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex aspect-video items-center justify-center p-6">
        <span className='text-4xl font-semibold'></span>
      </CardContent>
    </Card>
  )
}
