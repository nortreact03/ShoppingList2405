import './App.css';
import Product from './Product';
import NewProduct from './NewProduct';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([])

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

  const deleteProduct = (id) => {
    // [1,2,3,4,5]
    // [...[1,2], ... [4,5]] <- pick
    // [1,2,null,4,5] <- filter

    items[id] = null;

    //Following filter functionis the same with:
    // (el) => { return  el !== null }
    let newItems = items.filter(el => el !== null )
    setItems(newItems)
  }

  const toggleChecked = (id) => {
    console.log('toggle checked for row ' + id)
    const newItems = items.map((el, index) => {
      if (index === id) {
        return {...el, isInBasket: !el.isInBasket}
      } else {
        return el
      }
    })
    setItems(newItems)
  }

  return (
    <div className="container">
      <h1>My Shopping List</h1>
      <NewProduct addProduct = {addProduct} />
        {
          items.map((item, index) => {
            return <Product 
                      key={index} 
                      product={item} 
                      id={index} 
                      deleteProduct={deleteProduct}
                      toggleChecked={toggleChecked}
                    />
          })
        }
    </div>
  );
}

export default App;
