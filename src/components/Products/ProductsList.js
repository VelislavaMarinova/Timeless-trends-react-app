import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ProductList.css';

import ProductsFilter from "./ProductsFilter"
import ProductSort from "./ProductsSort"
import ProductItem from "./ProductItem";
import useHttp from "../../hooks/useHttp";
import ProductHeader from "./ProductHeader";


const ProductsList = () => {
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    // const [producttsToLoad,setProductsToLoad] = useState([])
    const [loadMore,setLoadMore ]= useState(false);
    //    const [btnLoadMoreCLikced,setBtnLoadMore] =useState(false);

    const { category } = useParams();

    useEffect(() => {
        console.log("category change");
        setLoadMore(false)
        setPage(1)
       
        setPage(1);
        setData([])
    }, [category, limit])

    // const [currentCategory, setCurrentCategory]=useState(category)


    const url = `http://localhost:3200/products?_embed=reviews&category=${category}&_limit=${limit}`;


    const { data, error, isLoading, dataTotalLength, setData } = useHttp(url, page);

   console.log(data.length);

    useEffect(() => {
        // Calculate whether there are more products to load
        if (data.length <dataTotalLength) {
            setLoadMore(true)
        }else{
            setLoadMore(false)
        }
    }, [data.length, dataTotalLength]);

    // producttsToLoad=[...producttsToLoad,...data]
    // setProducts((products)=>[...products,...data])
    // console.log(dataTotalLength);
    // if (dataTotalLength > limit) {
    //     loadMore = true
    // }
   
    // const [btnClicked,setBtnClicked]=useState()




    const onLoadMore = () => {
        // setPage(page + 1);
        // setBtnLoadMore(true);
        setPage((page) => page + 1);
        // console.log(pa);
    }

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
                            {data.map(p => <li className="product" key={p.id} >  <ProductItem product={p}></ProductItem></li>)}
                        </ul>
                        <button onClick={onLoadMore} disabled={!loadMore}>Load More</button>
                    </div>
                </div>
                <div className="product-list-ni-products">
                    <p className="no-products">No products in category category!<i className="fa-solid fa-magnifying-glass"></i></p>
                </div>
            </div>
        </div>
    )
}
export default ProductsList