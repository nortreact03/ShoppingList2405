import { useState } from 'react'

function NewProduct({addProduct}) {
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('kg')
    const [amount, setAmount] = useState('')
    const submitValues = () => {
        
        console.log("About to submit values ");
        console.log('description', description);
        addProduct({description, unit, amount})
        setDescription('')
        setUnit('kg')
        setAmount('')
    }

    const amountChanged = ({target}) => {
        if (isNaN(target.value)) {
            return
        }
        setAmount(target.value)
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
            <select 
                className="col-2" 
                value={unit}
                placeholder="Unit"
                onChange={(event) => setUnit(event.target.value) }
            >
                <option value="kg">Kilogram</option>
                <option value="pc">Piece</option>
                <option value="l">Litre</option>
            </select>

            <input 
                className="col-2" 
                placeholder="Amount"
                value={amount}
                onChange={amountChanged}
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