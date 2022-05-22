import React from 'react'
import { useActions } from '../hooks/useActions'
import { UseTypedSelector } from '../hooks/useTypedSelector'
import { BasketObject } from '../types/basket'


const TestBasket: React.FC = () => {
    const { basket } = UseTypedSelector(state => state.basket)
    const { addBasket } = useActions()

    console.log(`BASKET::: `, basket);

    const test = [
        {
            id: '0',
            name: 'box-0',
            price: 1500,
        },
        {
            id: '1',
            name: 'box-1',
            price: 1700,
        },
        {
            id: '2',
            name: 'box-2',
            price: 3200,
        }
    ]

    return (
        <div
            style={{ display: 'flex' }}
        >
            {
                test.map((item: BasketObject) =>
                    <div
                        key={item.id}
                        onClick={() => { addBasket({ id: item.id, name: item.name, price: item.price }) }}
                        style={{ width: '100px', height: '200px', margin: '10px', padding: '10px', border: '1px solid #ccc', cursor: 'pointer' }}
                    >
                        <div> id: {item.id}</div>
                        <div>name: {item.name}</div>
                        <div>price: {item.price}</div>
                    </div>
                )
            }
        </div>
    )
}

export default TestBasket