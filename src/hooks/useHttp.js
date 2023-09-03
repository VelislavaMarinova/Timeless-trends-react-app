import { useEffect, useState } from "react";

const useHttp = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {

      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url,{ signal: abortController.signal } );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
       
          setError(error.message || "An error occoured.");
        
      }finally{
        setIsLoading(false);
      }

    }
    fetchData();

    return ()=>{
      abortController.abort()
    }
  }, [url]);

  return {data, isLoading,error,url}

}

export default useHttp;