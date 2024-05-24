function Product({product}) {
    let rowStyleClass = ""
    if (product.isInBasket) {
        rowStyleClass = "inBasket"
    }
    return (
        <div className= {"row " + rowStyleClass}>
            <div className="col-12 col-sm-6">
                {product.description}
            </div>
            <div className="col-2">
                {product.unit}
            </div>
            <div className="col-2">
                {product.amount}
            </div>
        </div>
    )
}

export default Product