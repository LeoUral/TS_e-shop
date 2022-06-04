import React, { useState } from 'react';
import { FormModal } from './FormModal';

type ModalProps = {
    footerModal: string;
    headerModal: string;
    doClose: any;

}

export const ModalWindow = ({ headerModal, footerModal, doClose }: ModalProps) => {

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
                    <FormModal
                        doCloseModal={doClose}
                    />
                </div>
                <footer className='footer_modal'>
                    {footerModal}
                </footer>

            </div>

        </div>
    )
}