import React, { Component } from "react";

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

    render(): React.ReactNode {
        return (
            <>
                <div> ПРИВЕТ TS REACT!!!!!! </div>
            </>
        )
    }
}