import React from 'react';
import BasketPriceTotal from './components/BasketPriceTotal';
import BasketProductTotal from './components/BasketProductTotal';
import TestBasket from './components/TestBasket'


function App() {
  return (
    <div className="App">
      <TestBasket />
      <BasketPriceTotal />
      <BasketProductTotal />
    </div>
  );
}

export default App;
