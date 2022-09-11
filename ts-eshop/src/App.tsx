import { useState } from 'react';
import BasketPriceTotal from './components/BasketPriceTotal';
import BasketProductTotal from './components/BasketProductTotal';
import { LoginData } from './components/logIn/FormLogin';
import { TypeDataRegistration } from './components/logIn/FormRegistration';
import { ModalWindow } from './components/ModalWindow';
import TestBasket from './components/TestBasket'
import { TEST } from './components/testProducts';
import server from '../src/server/Server';


const App = () => {

  const [showModal, setShowModal] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  const [errorFooter, setErrorFooter] = useState(false);

  const doCloseModal = async (obj: LoginData) => {
    console.log(`OBJECT::: `, obj); // test

    const result = await server.sendDataLogin(obj);

    console.log(`RESULT: `, result); // test

    //todo: временная проверка логина и пароля
    if (obj.login === 'abcd' && obj.password === '12345') {
      setShowModal(false)
    } else {
      viewErrorFooter();
    }
  }

  const sendRegistration = async (objRegistration: TypeDataRegistration) => {
    console.log(`OBJECT REGISTARTION::: `, objRegistration);
    // todo: сделать процедуру проверки данных и регистрацию

    const result = await server.sendDataRegistration(objRegistration);

    console.log(`RESULT: `, result); // test

    setShowRegistration(false);
  }

  const callViewRegistration = () => {
    setShowRegistration(!showRegistration)
  }

  const viewErrorFooter = () => {
    setErrorFooter(true)
    setTimeout(() => { setErrorFooter(false) }, 2000)
  }

  return (
    <div className="App">
      {!showModal &&
        <TestBasket
          name='Vasya' // менять имя при удачном входе
          test={TEST}
        />}
      {showModal &&
        <ModalWindow
          headerModal={showRegistration ? "REGISTRATION" : "LOG IN"}
          footerModal={errorFooter ? "Ошибка ввода пароля или логина!!!" : ""}
          showRegistration={showRegistration}
          doClose={doCloseModal}
          sendRegistration={sendRegistration}
          callViewRegistration={callViewRegistration}
        />}
      {!showModal && <BasketPriceTotal />}
      {!showModal && <BasketProductTotal />}
    </div>
  );
}

export default App;
