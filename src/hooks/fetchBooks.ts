import { useState } from "react";

function useFetching(callback: Function) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function fetching() {
    try {
      setIsLoaded(false);
      await callback();
    } catch (e) {
    } finally {
      setIsLoaded(true);
    }
  }
  return { fetching: fetching, isLoaded: isLoaded };
}

export default useFetching;
