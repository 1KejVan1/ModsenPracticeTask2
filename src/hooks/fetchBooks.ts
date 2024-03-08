import { useState } from "react";

function useFetching(callback: Function) {
  const [isLoaded, setIsLoaded] = useState<boolean | undefined>(undefined);
  const [error, setError] = useState<string>("");

  async function fetching() {
    try {
      setIsLoaded(false);
      await callback();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoaded(true);
    }
  }

  return [fetching, isLoaded, error] as const;
}

export default useFetching;
