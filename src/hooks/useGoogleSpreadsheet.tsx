import React, { useEffect, useState } from 'react'
import config from '../config'

export default function useGoogleSpreadsheet() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    try {
      fetch(config.endpoint)
        .then((response) => response.json())
        .then((spreadsheetData) => setData(spreadsheetData));
    } catch (error) {
      setError(error as string)
    }
    setLoading(false)
  }, [])

  return { data, loading, error }
}
