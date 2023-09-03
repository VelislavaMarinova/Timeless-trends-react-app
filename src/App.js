import { Routes, Route } from 'react-router-dom';



import Header from "./components/Header";
import Home from "./components/Home";
import ProductsList from "./components/Products/ProductsList";

// const router = createBrowserRouter([
//   {path:'/',element: <Home></Home>},
//   {path: 'categpry/:category',element: <Products></Products>}
// ])


function App() {

  return (
    <div>

      <Header></Header>
      <Routes>  
         {/* <Route path="products/:category" element={<ProductsList />} /> */}
      </Routes>
     

    </div>
    // <div className="App">
    //   <Header></Header>

    //   <h2>Let's get started!</h2>
      
  
    // </div>
  );
}

export default App;
