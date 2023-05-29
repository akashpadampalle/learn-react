
import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';


function App() {

  const [cart, setCart] = useState({
    discout: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 0},
      {id: 2, title: 'Product 2', quantity: 0}
    ]
  });

  const handleIncreaseQuantity = (index: number) => {    

    const newItems = cart.items.map((item, i) => {      

        if(i == index){          
          return {...cart.items[i], quantity: cart.items[i].quantity + 1}
        }
        return item;
    });    

    setCart({...cart, items: newItems})
  }

  const handleDesceaseQuantity = (index: number) => {

    const newItems = cart.items.map((item, i) => {
        if(i == index){
          const newQuantity: number = (cart.items[i].quantity > 0)? cart.items[i].quantity -1 : 0;
          return {...cart.items[i], quantity: newQuantity}
        }
        return item;
    });

    setCart({...cart, items: newItems})
  }


  return (
    <>
      <Cart items={cart.items} onDecreaseQuantity={handleDesceaseQuantity} onIncreaseQuantity={handleIncreaseQuantity}/>
    </>
  )
}

export default App
