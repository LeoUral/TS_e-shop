import React, { Component } from 'react';

type ModalProps = {
    textHeader: string,
    body: any,
}

type ModalState = {
    show: boolean,
}

export default class Modal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props);
        this.state = {
            show: true
        }
        this.handleClickClose = this.handleClickClose.bind(this);
    }

    handleClickClose(): void {
        this.setState({ show: false })
    }

    render() {
        const show = this.state.show;
        const textHeader = this.props.textHeader;
        const body = this.props.body;
        return (
            <>
                {show && <div className='modal'>
                    <div className='shadow' onClick={this.handleClickClose}></div>
                    <div className='modal_window'>
                        <div
                            className='modal_close'
                            onClick={this.handleClickClose}
                        >
                            &#10006;
                        </div>
                        <header className='modal_header'>
                            <div className='modal_header_text' >
                                {textHeader}
                            </div>
                        </header>
                        <div className='modal_body'>
                            {body}
                        </div>

                    </div>

                </div>}
            </>
        )
    }
}