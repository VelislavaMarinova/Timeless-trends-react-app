import { useState } from "react";

const useHttp = (requestCongig, applyData) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestCongig.url, {
        method: requestCongig.method ? requestCongig.method : "GET",
        headers: requestCongig.headers ? requestCongig.headers : {},
        body: requestCongig.body ? JSON.stringify(requestCongig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed")
      }
      const data = await response.json();

      applyData(data);
      setIsLoading(false);

    } catch (error) {
      setError(error.message || "Something went wrong");
    }
  };

  return { isLoading, error, sendRequest }
}
export default useHttp;