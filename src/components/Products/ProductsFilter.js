const ProductsFilter = () => {
    return (<div class="filter">
        <form>
            <div class="form-filters">
                <div class="filter-price">
                    <label class="label">Price ranges in $</label>
                    <div class="radio-item">
                        <input
                            type="radio"
                            id="{{range}}-price"
                            name="priceRange"
                        />
                        <label for="{{range}}-price">range</label>
                    </div>
                </div>
                <div class="filter-brand">
                    <label class="label">Choose brand</label>
                    <div>
                        <input
                            type="radio"
                            id="{{brand}}"
                            name="brand"
                        />
                        <label htmlFor="">brand</label>
                    </div>
                </div>
            </div>
            <button type="submit" class="filter-btn">Filter</button>
        </form>
    </div>)
}

export default ProductsFilter