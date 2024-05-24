import './App.css';
import Product from './Product';
import NewProduct from './NewProduct';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
      {
        description: 'bread',
        amount: 1,
        unit: 'pcs',
        isInBasket: false,
      },
      {
        description: 'milk',
        amount: 1,
        unit: 'liter',
        isInBasket: true,
      },
      {
        description: 'apples',
        amount: 1.5,
        unit: 'kg',
        isInBasket: false,
      }
  ])

  const addProduct = ({description, unit, amount}) => {
    console.log('About to add ' + description)
    const newProduct = {
      description,
      unit, 
      amount,
      isInBasket: false
    }
    setItems([...items, newProduct])
  }

  return (
    <div className="container">
      <h1>My Shopping List</h1>
      <NewProduct addProduct = {addProduct} />
        {
          items.map((item, index) => {
            return <Product key={index} product={item} />
          })
        }
    </div>
  );
}

export default App;
