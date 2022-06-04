import { useState } from 'react';
import BasketPriceTotal from './components/BasketPriceTotal';
import BasketProductTotal from './components/BasketProductTotal';
import { LoginData } from './components/logIn/FormModal';
import { ModalWindow } from './components/logIn/ModalWindow';
import TestBasket from './components/TestBasket'
import { TEST } from './components/testProducts';



const App = () => {

  const [showModal, setShowModal] = useState(true)

  const doCloseModal = (obj: LoginData) => {
    console.log(`OBJECT::: `, obj); // test

    //todo: временная проверка логина и пароля
    if (obj.login === 'abcd' && obj.password === '12345') setShowModal(false)
  }

  return (
    <div className="App">
      {!showModal && <TestBasket
        name='Vasya'
        test={TEST}
      />}
      {showModal && <ModalWindow
        headerModal="LOG IN"
        footerModal=""
        doClose={doCloseModal}
      />}
      {!showModal && <BasketPriceTotal />}
      {!showModal && <BasketProductTotal />}
    </div>
  );
}

export default App;
