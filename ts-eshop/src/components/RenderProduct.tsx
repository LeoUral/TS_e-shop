import React from 'react';
// import { useState } from "react";

type DataServer = {
    _id: string,
    nameProduct: string,
    priceProduct: number,
    imgUrl: string,
    descriptionProduct: string
}

type RenderProps = {
    data: DataServer
}

export const RenderProduct = ({ data }: RenderProps) => {

    return (
        <React.Fragment key={`boxProduct-${data._id}`}>
            <div
                className='product_box'
                style={{ backgroundImage: `url(${data.imgUrl})` }}
            >
                <div>
                    <span>
                        артикул: {data._id}
                    </span>
                </div>
                <div>
                    <span>
                        {data.nameProduct}
                    </span>
                </div>
                <div>
                    <span>
                        {data.priceProduct} руб.
                    </span>
                </div>
                <div>
                    <span>
                        {data.descriptionProduct}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}