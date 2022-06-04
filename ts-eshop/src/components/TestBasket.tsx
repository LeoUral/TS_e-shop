import React from 'react'
import { useActions } from '../hooks/useActions'
import { UseTypedSelector } from '../hooks/useTypedSelector'
import { BasketObject } from '../types/basket'
import { nanoid } from 'nanoid';
// import { TEST } from './testProducts';

type TestProps = {
    name: string;
    test: Array<BasketObject>
}

const TestBasket = ({ name, test }: TestProps) => {
    const { basket } = UseTypedSelector(state => state.basket)
    const { addBasket } = useActions()

    console.log(`BASKET::: `, basket); // test
    console.log(`NAME::: `, name); // test

    return (
        <div
            style={{ display: 'flex' }}
        >
            {
                test.map((item: BasketObject) =>
                    <div
                        key={item.idp}
                        onClick={() => {
                            addBasket({
                                id: nanoid(),
                                name: item.name,
                                price: item.price,
                                idp: item.idp,
                                description: item.description,
                            })
                        }}
                        style={{
                            width: '150px',
                            height: '200px',
                            margin: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            cursor: 'pointer',
                            boxShadow: '3px 3px 5px #999',

                        }}
                    >
                        <div> idp: {item.idp}</div>
                        <div> id: {item.id}</div>
                        <div>name: {item.name}</div>
                        <div>price: {item.price}</div>
                        <div>description: {item.description}</div>
                    </div>
                )
            }
        </div>
    )
}

export default TestBasket