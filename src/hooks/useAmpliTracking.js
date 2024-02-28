import { useEffect } from "react";

import { useQueue } from "hooks/useQueue";


export function useAmpliTracking(areInitialPropsSet) {
  const { addToQueue, queue, processNext } = useQueue();

  useEffect(() => {
    if (queue.length > 0 && areInitialPropsSet) {
      processNext(async (nextRequest) => await nextRequest());
    }
  }, [queue, processNext, areInitialPropsSet]);

  return { addToQueue, queue };
}