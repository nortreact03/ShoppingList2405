function Product({product, id, deleteProduct, toggleChecked}) {
    let rowStyleClass = ""
    if (product.isInBasket) {
        rowStyleClass = "inBasket"
    }

    const deleteClicked = () => {
        console.log('Delete clicked on row ' + id);
        //DO SOMETHING HERE TO ACTUALLY DELETE the DATA
        deleteProduct(id)
    }

    return (
        <div className= {"row " + rowStyleClass}>
            <div className="col-1">
                <input
                    type="checkbox"
                    defaultChecked={product.isInBasket}
                    onChange={() => toggleChecked(id)}
                />

            </div>
            <div className="col-12 col-sm-6">
                {product.description}
            </div>
            <div className="col-2">
                {product.unit}
            </div>
            <div className="col-2">
                {product.amount}
            </div>
            <div className="col-1">
                <button onClick={deleteClicked} className="btn">Delete</button>
            </div>
        </div>
    )
}

export default Product