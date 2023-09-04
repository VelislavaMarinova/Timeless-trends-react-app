import { Link } from "react-router-dom";
import './ProductItem.css'
import { useEffect, useState } from "react";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

const ProductItem = ({ product }) => {
    console.log(product);
    let [productRating, setProductRating] = useState(0)
    const [goldStars, setGoldStars] = useState([]);
    const [blueStars, setBlueStars] = useState([]);
    useEffect(() => {
        let totalRating = 0
        if (product.reviews.length !== 0) {
            product.reviews.forEach(r => {
                console.log(r.rating, "rating");
                totalRating += r.rating
            });
            setProductRating(Number((totalRating / product.reviews.length).toFixed(2)))
            console.log(productRating, "productRating");
            // productRating = Number((productRating / product.reviews.length).toFixed(2))
            setGoldStars(Array(Math.round(productRating))
                .fill(null))
            setBlueStars(Array(5 - Math.round(productRating))
                .fill(null))
        } else {
            setBlueStars(Array(5).fill(null))
        }
    }, [product.reviews, productRating])

 

    return (<>
        <Link
            to="/products/{{product.category}}/{{product.id}}"
            className="product-link">
            <div className="product-image">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="product-info">
                <h4 className="product-title">{product.title}</h4>
                <p className="product-description">{product.description}</p>
                <ProductPrice price={product.price} discountPercentage={product.discountPercentage}></ProductPrice>


            </div>
        </Link>
        <div className="product-rating">
            <ProductRating
                blueStars={blueStars}
                goldStars={goldStars}
                productRating={productRating}
                numRatings={product.reviews.length}>
            </ProductRating>
        </div>
        <button className="product-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <p> Add to cart</p>
        </button>
        <p className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p>

    </>)
}

export default ProductItem;