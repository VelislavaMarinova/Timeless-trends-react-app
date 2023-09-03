import { Link } from "react-router-dom";
import './ProductItem.css'

const ProductItem=(props)=>{
//    console.log(props);
    return(<>
    <Link
        to="/products/{{product.category}}/{{product.id}}"
        className="product-link">
        <div className="product-image">
            <img src={props.product.thumbnail} alt="" />
        </div>
        <div className="product-info">
            <h4 className="product-title">{props.product.title}</h4>
            <p className="product-description">{props.product.description}</p>
            <div className="product-discount">

                <p className="product-discount-percentage"><span className= "product-price"> -discountPercentage%</span></p>
                <p className="product-old-price">{props.product.price}$</p>
                <p className="product-price">priceAfterDiscount$</p>
            </div>
            <div >
                <p className="product-price">price$</p>
            </div>

        </div>
    </Link>
    <div className="product-rating">
        <span>
            <i className="fa-solid fa-star gold"></i>
            <i  className="fa-solid fa-star"></i>
            {props.product.reviews.rating}
        </span>
        <span>product.reviews.length</span>
    </div>
    <button className="product-btn">
        <i className="fa-solid fa-cart-shopping"></i>
        <p> Add to cart</p>
    </button>
    <p  className="product-login"><Link to="/auth/login">Login</Link> to enable the button!</p>

    </> )
}

export default ProductItem;