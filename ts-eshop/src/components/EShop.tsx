import React, { Component } from "react";
import { ContainerBox } from './ContainerBox'
import Main from "./Main";

type CounterState = {
    show: boolean,
}

type CounterProps = {
}

export default class EShop extends Component<CounterProps, CounterState>{
    constructor(props: CounterProps) {
        super(props)
        this.state = {
            show: true,
        }
    }

    componentDidMount(): void {
    }

    render() {
        return (
            <>
                <div> ПРИВЕТ TS REACT!!!!!! </div>
                <ContainerBox
                    text="test TS + REACT props in function"
                />
                <Main />
            </>
        )
    }
}