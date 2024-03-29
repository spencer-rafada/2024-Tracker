import React, { useEffect, useState } from 'react'

export default function useGoogleSpreadsheet() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    try {
      fetch(import.meta.env.VITE_ENDPOINT)
        .then((response) => response.json())
        .then((spreadsheetData) => {
          spreadsheetData.sort((a: any, b: any) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime());
          setData(spreadsheetData)
        });
    } catch (error) {
      setError(error as string)
    }
    setLoading(false)
  }, [])

  return { data, loading, error }
}
