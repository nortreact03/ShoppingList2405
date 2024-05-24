import { useState } from 'react'

function NewProduct({addProduct}) {
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('')
    const [amount, setAmount] = useState('')
    const submitValues = () => {
        console.log("About to submit values ");
        console.log('description', description);
        addProduct({description, unit, amount})
        setDescription('')
        setUnit('')
        setAmount('')
    }
    return (
        <>
        <div className="row">
            <input 
                className="col-12 col-sm-6" 
                placeholder="Product name"
                value={description}
                onChange={(event) => setDescription(event.target.value) }
            />
            <input 
                className="col-2" 
                placeholder="Unit"
                value={unit}
                onChange={(event) => setUnit(event.target.value) }
            />
            <input 
                className="col-2" 
                placeholder="Amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value) }
            />
            <button 
                className='col-2'
                onClick={submitValues}
            >
                Add
            </button>

        </div>
        </>
    )
}

export default NewProduct