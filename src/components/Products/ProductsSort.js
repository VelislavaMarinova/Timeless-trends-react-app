const ProductSort=()=>{
return(
    <div class="sort">
    <div class="sort-wrapper">
        <label class="label">Sort</label>
        <select>
        <option value="choose" disabled>Choose option</option>
            <option value="title asc">Product name asc</option>
            <option value="title desc">Product name desc</option>
            <option value="price asc">Price asc</option>
            <option value="price desc">Price desc</option>

        </select>
       
    </div>
</div>
)
}

export default ProductSort