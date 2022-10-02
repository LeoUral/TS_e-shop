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
  const [textError, setTextError] = useState('')

  const doCloseModal = async (obj: LoginData) => {
    const result = await server.sendDataLogin(obj);

    console.log(`RESULT:> `, result); // test

    //todo: временная проверка логина и пароля
    if (result.server === 'OK') {
      setShowModal(false)
    } else {
      viewErrorFooter('Не верный логин или пароль!');
    }
  }

  const sendRegistration = async (objRegistration: TypeDataRegistration) => {
    console.log(`OBJECT REGISTARTION::: `, objRegistration);
    // todo: сделать процедуру проверки данных и регистрацию

    const result = await server.sendDataRegistration(objRegistration);

    console.log(`RESULT: `, result); // test

    if (result.server === 'OK') {
      setShowRegistration(false)
    } else {
      viewErrorFooter('Ошибка при регистрации(такой логин уже есть)')
    }

  }

  const callViewRegistration = () => {
    setShowRegistration(!showRegistration)
  }

  const viewErrorFooter = (text: string) => {
    setTextError(text)
    setErrorFooter(true)
    setTimeout(() => { setErrorFooter(false) }, 3000)
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
          footerModal={errorFooter ? textError : ""}
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
