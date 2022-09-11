import React, { useState } from "react";

type FormModalProps = {
    doCloseModal: any;
    callViewRegistration: any;
}

export type LoginData = {
    login: string;
    password: string;
}

export const FormLogin = ({ doCloseModal, callViewRegistration }: FormModalProps) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeLogin = (e: string) => {
        setLogin(e);
        console.log(login);
    }

    const handleChangePassword = (e: string) => {
        setPassword(e);
        console.log(password);
    }

    const handleClickSend = (e: any) => {
        e.preventDefault()
        console.log(`login::: ${login}`);
        console.log(`password::: ${password}`);

        const loginData: LoginData = {
            login: login,
            password: password
        }
        doCloseModal(loginData) // пробрасываем до App
    }

    return (
        <>
            <form className="form_login">
                <div className="input_block">

                    <div
                        className='input_position'
                    >
                        LOGIN: &nbsp;
                        <span>
                            <input
                                className="input_login"
                                type="text"
                                placeholder="login"
                                id="login"
                                onChange={(e) => { handleChangeLogin(e.target.value) }}
                            />
                        </span>
                    </div>

                    <div
                        className='input_position'
                    >
                        ПАРОЛЬ: &nbsp;
                        <span>
                            <input
                                className="input_password"
                                type="password"
                                placeholder="password"
                                id="password"
                                onChange={(e) => { handleChangePassword(e.target.value) }}
                            />
                        </span>
                    </div>


                </div>
                <div style={{ margin: '0 auto' }}>
                    <button
                        className="button_send"
                        onClick={(e) => {
                            handleClickSend(e);
                            e.preventDefault()
                        }}

                    >
                        TO COME IN
                    </button>
                    <button
                        className="button_registration"
                        onClick={(e) => {
                            e.preventDefault();
                            callViewRegistration()
                        }}
                    >
                        REGISTRATION
                    </button>
                </div>
            </form>
        </>
    )
}