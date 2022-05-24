import React from 'react';
import BasketPriceTotal from './components/BasketPriceTotal';
import BasketProductTotal from './components/BasketProductTotal';
import TestBasket from './components/TestBasket'
import { TEST } from './components/testProducts';


const App = () => {
  return (
    <div className="App">
      <TestBasket
        name='Vasya'
        test={TEST}
      />
      <BasketPriceTotal />
      <BasketProductTotal />
    </div>
  );
}

export default App;
