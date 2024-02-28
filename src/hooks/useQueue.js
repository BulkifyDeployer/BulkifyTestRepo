import { useCallback, useState } from "react"

export function useQueue() {
  const [queue, setQueue] = useState([])

  const addToQueue = useCallback(item => {
    setQueue(prevQueue => [...prevQueue, item])
  }, [])

  const processNext = useCallback(
    async processFn => {
      const [next, ...rest] = queue

      if (!next) {
        return
      }

      await processFn(next)
      setQueue(rest)
      return next
    },
    [queue]
  )

  return {
    queue,
    addToQueue,
    processNext
  }
}
