import { useEffect, useState } from "react";

const useHttp = (url,page) => {
  const [data, setData] = useState([]);
  const [dataTotalLength, setDataTotalLenght] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {

      setIsLoading(true);
      setError(null);

      try {
        let response;
        if(page){
           response = await fetch(`${url}&_page=${page}`, { signal: abortController.signal });
        }else{

           response = await fetch(url, { signal: abortController.signal });
        }
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        setDataTotalLenght(response.headers.get('X-Total-Count'))
        const responseData = await response.json();
        setData((data)=>[...data,...responseData])
        // if(page && page!==1){
        //   setData((data)=>[...data,...responseData])
        // }else{
        //   setData(responseData)
        // }

      } catch (error) {

        setError(error.message || "An error occoured.");

      } finally {
        setIsLoading(false);
      }

    }
    fetchData();

    return () => {
      abortController.abort()
    }
  }, [page, url]);

  return { data, isLoading, error, dataTotalLength, setData }

}

export default useHttp;