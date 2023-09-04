const ProductPrice=({price,discountPercentage})=>{

    let discountSection = '';
    if (discountPercentage !== 0) {
        let priceAfterDiscount = price -price * discountPercentage / 100
        discountSection = (<div className="product-discount">
            <p className="product-discount-percentage"><span className="product-price"> -{discountPercentage}%</span></p>
            <p className="product-old-price">
                {price}$</p>
            <p className="product-price">{priceAfterDiscount}$</p>
        </div>)
    } else {
        discountSection = (<div><p className="product-price">{price}$</p></div>)
    }
    return discountSection
}
export default ProductPrice
