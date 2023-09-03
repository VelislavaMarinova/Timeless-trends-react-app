import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ProductList.css';

import ProductsFilter from "./ProductsFilter"
import ProductSort from "./ProductsSort"
import ProductItem from "./ProductItem";
import useHttp from "../../hooks/useHttp";
import ProductHeader from "./ProductHeader";


const ProductsList = () => {
    
    const url=`http://localhost:3200/products?_embed=reviews&category=${category}&_page=${page}&_limit=${limit}`

    // let page=1
    // const [products, setProducts] = useState([]);
    // const [limit, setLimit] = useState(8);
    // const [loadMore, setLoadMore] = useState();
    // const [btnClicked,setBtnClicked]=useState()
    // const { category } = useParams();


    // const { isLoading, error, sendRequest: fetchProducts,totalCount } = useHttp();

    // useEffect(() => {
    //     const getProductsByCategory = (fetchedProducts) => {
    //         if(btnClicked){
    //             setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
    //         }else{
    //             setProducts(fetchedProducts)
    //         }
           
    //     }
    //     if (totalCount > limit) {
    //         setLoadMore(true)
    //     } else {
    //         setLoadMore(false)
    //     }

    //     fetchProducts({ url: `http://localhost:3200/products?_embed=reviews&category=${category}&_limit=${limit}` }, getProductsByCategory)

    // }, [category, limit, products.length, btnClicked, totalCount, fetchProducts]);


    // const onLoadMore = () => {
    //     page++
    //     setBtnClicked(true)
    // }

    // console.log(loadMore);
    // console.log('render');

    return (
        <div className="products container">
            <div className="product-list-loader">

            </div>
            <div className="product-list-wrapper">
                <div className="product-list-header-wrapper">

                    {/* <ProductHeader category={category}></ProductHeader> */}
                    <div className="product-list-header-loaded-products">
                        <select
                            className="product-list-select-products-per-page"
                            value={limit} onChange={e => setLimit(e.target.value)}
                        >
                            <option value="8">8 per page</option>
                            <option value="16">16 per page</option>
                        </select>
                        <span >category totalProducts
                        </span>
                        <p > products filtered by </p>

                    </div>
                    <div className="product-list-sort" >
                    </div>
                </div>
                <div className="product-list">
                    <div className="product-list-filters">
                    </div>
                    <div className="product-list-cards">
                        <ul className="all-cards">
                            {products.map(p => <li className="product" key={p.id} >  <ProductItem product={p}></ProductItem></li>)}
                        </ul>
                        <button onClick={onLoadMore} disabled={!loadMore}>Load More</button>
                    </div>
                </div>
                <div className="product-list-ni-products">
                    <p className="no-products">No products in category category!<i className="fa-solid fa-magnifying-glass"></i></p>
                </div>
            </div>
        </div>)
}
export default ProductsList