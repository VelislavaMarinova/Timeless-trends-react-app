import { Link } from "react-router-dom";
import './ProductItem.css'
import { useEffect, useState } from "react";

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
            //  goldStars = new Array(Math.round(productRating));
            //  blueStars = new Array(5 - Math.round(productRating));

        } else {
            setBlueStars(Array(5).fill(null)) 
        }
    }, [product.reviews, productRating])

    // console.log(blueStars, "blueStars");
    // console.log(goldStars, "goldStars");

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
                <div className="product-discount">

                    <p className="product-discount-percentage"><span className="product-price"> -discountPercentage%</span></p>
                    <p className="product-old-price">
                        {product.price}$</p>
                    <p className="product-price">priceAfterDiscount$</p>
                </div>
                <div >
                    <p className="product-price">price$</p>
                </div>

            </div>
        </Link>
        <div className="product-rating">
            <span>
            {goldStars
      .map((_, index) => (
        <i key={`goldStar${index}`} className="fa-solid fa-star gold"></i>
      ))}
    {blueStars
      .map((_, index) => (
        <i key={`blueStar${index}`} className="fa-solid fa-star"></i>
      ))}
                {productRating}
            </span>
            <span>({product.reviews.length})</span>
        </div>
        <button className="product-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <p> Add to cart</p>
        </button>
        <p className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p>

    </>)
}

export default ProductItem;