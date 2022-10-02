import React, { useState } from 'react';
import { FormLogin } from './logIn/FormLogin';
import { FormRegistration } from './logIn/FormRegistration';

type ModalProps = {
    footerModal: string;
    headerModal: string;
    doClose: any;
    showRegistration: boolean;
    sendRegistration: any;
    callViewRegistration: any;
}

export const ModalWindow = ({
    headerModal,
    footerModal,
    doClose,
    showRegistration,
    sendRegistration,
    callViewRegistration,
}: ModalProps) => {

    return (
        <div className='modal'>
            <div
                className='modal_shadow'
            >
            </div>
            <div className='modal_window'            >
                <header className='header_modal'>
                    {headerModal}
                    {/* <div
                        className='hedaer_modal_close'
                        onClick={() => doClose()}
                    >
                        &#10008;
                    </div> */}
                </header>
                <div className='body_modal'>
                    {!showRegistration &&
                        <FormLogin
                            doCloseModal={doClose}
                            callViewRegistration={callViewRegistration}
                        />}
                    {showRegistration &&
                        <FormRegistration
                            sendRegistration={sendRegistration}
                        />}
                </div>
                <footer className='footer_modal'>
                    <b> {footerModal} </b>
                </footer>

            </div>

        </div>
    )
}