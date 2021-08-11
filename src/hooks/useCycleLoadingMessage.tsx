import { useState, useEffect } from "react";

const useCycleLoadingMessage = (loadingCondition: boolean) => {
  const [message, setMessage] = useState("Loading...");
  const delay = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), duration);
    });
  };
  useEffect(() => {
    if (loadingCondition) {
      Promise.resolve()
        .then(() => delay(4000))
        .then(() =>
          setMessage(
            "If you are the first person to view this page in a while there may be a 5-10 second delay..."
          )
        )
        .then(() => delay(6000))
        .then(() => setMessage("Almost there..."));
    }
  }, [loadingCondition]);
  return message;
};

export default useCycleLoadingMessage;
