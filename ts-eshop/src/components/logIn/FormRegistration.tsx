import React, { useState } from 'react'

export type TypeDataRegistration = {
    name: string;
    surname: string;
    login: string;
    password: string;
    phone: string;
    email: string;
}

type RegistrationProps = {
    sendRegistration: any
}

export const FormRegistration = ({ sendRegistration }: RegistrationProps) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (e: string) => {
        setName(e);
    }

    const handleChangeSurname = (e: string) => {
        setSurname(e);
    }

    const handleChangeLogin = (e: string) => {
        setLogin(e);
    }

    const handleChangePassword = (e: string) => {
        setPassword(e)
    }

    const handleChangePhone = (e: string) => {
        setPhone(e)
    }

    const handleChangeEmail = (e: string) => {
        setEmail(e)
    }

    const handleClickRegistration = () => {
        const objRegistration: TypeDataRegistration = {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            login: login,
            password: password,
        }
        sendRegistration(objRegistration)
    }

    return (
        <>
            <form className="form_login">
                <div className="input_block">

                    <input
                        className="input_login"
                        type="text"
                        placeholder="Name"
                        id="name"
                        onChange={(e) => { handleChangeName(e.target.value) }}
                    />
                    <input
                        className="input_login"
                        type="text"
                        placeholder="Surname"
                        id="surname"
                        onChange={(e) => { handleChangeSurname(e.target.value) }}
                    />
                    <input
                        className="input_login"
                        type="phone"
                        placeholder="phone"
                        id="phone"
                        onChange={(e) => { handleChangePhone(e.target.value) }}
                    />
                    <input
                        className="input_login"
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={(e) => { handleChangeEmail(e.target.value) }}
                    />
                    <input
                        className="input_login"
                        type="text"
                        placeholder="login"
                        id="login"
                        onChange={(e) => { handleChangeLogin(e.target.value) }}
                    />
                    <input
                        className="input_password"
                        type="password"
                        placeholder="password"
                        id="password"
                        onChange={(e) => { handleChangePassword(e.target.value) }}
                    />
                </div>
                <div className="button_block">
                    <button
                        className="button_registration"
                        onClick={(e) => {
                            e.preventDefault();
                            handleClickRegistration()
                        }}
                    >
                        REGISTRATION
                    </button>
                </div>
            </form>
        </>
    )
}