import { useState, useEffect } from "react";
import Header from "./components/Header";
import useHttp from './hooks/useHttp';



function App() {

  const [categories, setCategories] = useState([]);

  const getCategories = (categories) => {
    console.log(categories,"cat");
    setCategories(categories)
  }
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, sendRequest: fetchCategories } = useHttp({ url: 'http://localhost:3200/categories' }, getCategories)

  // async function fetchCategories() {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch("http://localhost:3200/categories");
  //     if (!response.ok) {
  //       throw new Error("Something went wrong")
  //     }
  //     const data = await response.json();
  //     setCategories(data);
  //     setIsLoading(false)

  //   } catch (error) {
  //     setError(error)
  //   }


  // }
  useEffect(() => {
    fetchCategories()
  }, [])

  let content = <p>Found no data</p>;

  if (categories.length > 0) {
   content=<div>{categories.map(c=><p>{c}</p>)}</div>
  }

  if (error) {
    content = <p>{error}</p>
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Header></Header>

      <h2>Let's get started!</h2>
      {content}
      {/* {!isLoading && categories.length > 0 && <p>Categories </p>}
      {!isLoading && categories.length === 0 && <p>FOund no data</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error}</p>} */}
    </div>
  );
}

export default App;
