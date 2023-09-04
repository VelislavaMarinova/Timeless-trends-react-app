const ProductRating = ({goldStars,blueStars,productRating,numRatings}) => {
    return (<>
        <span>
            {goldStars
                .map((_, index) => (
                    <i key={`goldStar${index}`} className="fa-solid fa-star gold"></i>
                ))}
            {blueStars
                .map((_, index) => (
                    <i key={`blueStar${index}`} className="fa-solid fa-star"></i>
                ))}
            {/* {productRating} */}
        </span>
            <span>({numRatings})</span>
    </>
    )
}
export default ProductRating