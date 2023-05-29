
import { useState } from 'react';
import './App.css';
import PepperoniPizza from './components/PepperoniPizza';


function App() {

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheez']})
  }

  return (
    <>
      <PepperoniPizza pizza={pizza} onClick={handleClick}/>
    </>
  )
}

export default App
