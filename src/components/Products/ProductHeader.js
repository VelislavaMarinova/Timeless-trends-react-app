import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";

const ProductHeader = ({ category }) => {
    
    // const [categoryInfo, setCategoryInfo] = useState({});

    // const { sendRequest: fetchCategoryInfo } = useHttp();

    // useEffect(() => {
    //     const getCategoryInfo = (categoryInfo) => {
    //         setCategoryInfo(categoryInfo)
    //     }
    //    fetchCategoryInfo({ url: `http://localhost:3200/categories?category=${props.category}` }, getCategoryInfo)
    // }, [props.category, fetchCategoryInfo]);

    return (<>
        <div className="product-list-header-img">
            <img
                src="https://images.pexels.com/photos/6612281/pexels-photo-6612281.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="{{category}}"
            />
        </div>
        <div className="product-list-header">
            <h1>{category}</h1>
            <p className="product-list-header-description"><span>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis facilis possimus, iusto minima itaque velit esse! Nisi, quos aut.</p>
        </div>
    </>
    )
}
export default ProductHeader;