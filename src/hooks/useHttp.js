import { useCallback, useEffect, useState } from "react";

const useHttp = (initialUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  // const [controller, setController] = useState(new AbortController());

  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {

      setIsLoading(true);
      setError(null);
      
      // setController(abortController);


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
  }, [url]);//controller

  return {data, isLoading,error,updateUrl}

}

export default useHttp;