'use client'

import { useEffect } from "react"

export default function MyCustomError({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void 
}) {

    useEffect(() => {
        console.error(error)
      }, [error])

    return (
        <>
            <h1>
                {error.message}
            </h1>

            <button onClick={() => reset()}> Reset </button>
        </>
    )
}