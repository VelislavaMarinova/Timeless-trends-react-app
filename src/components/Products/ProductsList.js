import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ProductsList.css'

import ProductsFilter from "./ProductsFilter"
import ProductSort from "./ProductsSort"
import ProductItem from "./ProductItem";
import useHttp from "../../hooks/useHttp";


const ProductsList = () => {

    const[page,setPage]=useState(1);
    // const[limit,setLimit]=useState(12)
    const [products, setProducts] = useState([]);
    const [numProductsPerPage,setNumProductsPerPage]=useState(8)
    const { category } = useParams();

    const { isLoading, error, sendRequest: fetchProducts } = useHttp();

    useEffect(() => {
        const getProductsByCategory = (products) => {
            setProducts(products);
        }

        fetchProducts({url:`http://localhost:3200/products?_embed=reviews&category=${category}&_page=${page}&_limit=${numProductsPerPage}`},getProductsByCategory)

    }, [category, fetchProducts, numProductsPerPage, page]);
    console.log(products);

    return (
    <div className="products container">
    <div className="product-list-loader">
    
    </div>
    <div className="product-list-wrapper">
        <div className="product-list-header-wrapper">

            <div className="product-list-header-img">
                <img
                    src="https://images.pexels.com/photos/6612281/pexels-photo-6612281.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="{{category}}"
/>
            </div>
            <div className="product-list-header">
                <h1>category</h1>
                <p className="product-list-header-description"><span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis facilis possimus, iusto minima itaque velit esse! Nisi, quos aut.</p>
                <div className="product-list-header-loaded-products">
                    <select
                    className="product-list-select-products-per-page"
                    value={numProductsPerPage} onChange={e=>setNumProductsPerPage(e.target.value)}
                    >
                    <option value="8">8 per page</option>
                    <option value="16">16 per page</option>
                </select>
                <span >category totalProducts
                </span>
                <p > products filtered by </p>

                </div>

            </div>
            <div className="product-list-sort" >
            </div>
        </div>
        <div className="product-list">
            <div className="product-list-filters">
            </div>
            <div className="product-list-cards">
                <ul className="all-cards">
              {products.map(p=><li className="product" key={p.id} >  <ProductItem product={p}></ProductItem></li>)}
                </ul>
                <button>Load More</button>
            </div>
        </div>
        <div className="product-list-ni-products">
            <p className="no-products">No products in category category!<i className="fa-solid fa-magnifying-glass"></i></p>
        </div>
    </div>
</div>)
}
export default ProductsList