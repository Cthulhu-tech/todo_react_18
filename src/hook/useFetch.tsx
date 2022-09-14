import { ErrorData, IUseFetch } from "../interface/Interface"
import { useEffect, useState } from "react"

export function useFetch <T = any>(method: string = 'POST'): IUseFetch<T>{

    const [data, setData] = useState<T | null>(null)
    const [load, setLoad] = useState(true)
    const [error, setError] = useState<ErrorData | null>(null)

    const fetchData = (url: string) => {
        return fetch(url, {
            method,
        })
        .then(response => response.json())
        .then((json: T) => {
            setData(json)
            setLoad(false)
        })
        .catch(err => {
            setError(err.message)
            setLoad(false)
        })
    }

    return {load, data, error, fetchData}

}