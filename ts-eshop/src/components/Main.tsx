import React, { Component } from 'react';
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
    data: object,
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

    componentDidMount(): void {
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

    render() {
        return (
            <>
                <div className='container'>
                    {this.state.base}
                </div>
            </>
        )
    }
}