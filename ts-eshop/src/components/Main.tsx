import React, { Component } from 'react';
import Modal from './Modal';
import { RenderProduct } from './RenderProduct';

type DataServer = {
    _id: string,
    nameProduct: string,
    priceProduct: number,
    imgUrl: string,
    descriptionProduct: string
}

type MainProps = {

}

type MainState = {
    show: Boolean,
    data: Array<DataServer>,
    base: any,
}

export default class Main extends Component<MainProps, MainState>{
    constructor(props: MainProps) {
        super(props);
        this.state = {
            show: true,
            data: [],
            base: []
        }
        this.renderProduct = this.renderProduct.bind(this);
        this.startBlock = this.startBlock.bind(this);
    }

    renderProduct(data: Array<DataServer>): object {
        const result = data.map((elem: any) => {
            return (
                <React.Fragment key={`product_${elem._id}`}>
                    <RenderProduct
                        data={elem}
                    />
                </React.Fragment>
            )
        })

        return result
    }

    startBlock(): void {
        (async () => {
            const result: any = await fetch(`../server.json`);
            const resultData: Array<DataServer> = await result.json()
            const renderResult = this.renderProduct(resultData);
            this.setState({
                data: resultData,
                base: renderResult
            });
        })()
    }

    componentDidMount(): void {
        // this.startBlock();

        console.log(`TYPE::: `, typeof (<h1> </h1>))

    }

    render() {
        const renderBody = (<h1> test Body render </h1>)
        return (
            <>
                {/* <div className='container'>
                    {this.state.base}
                </div> */}
                <Modal
                    textHeader='Header test'
                    body={renderBody}
                />
            </>
        )
    }
}