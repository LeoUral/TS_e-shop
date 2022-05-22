import React from 'react';
import { useActions } from '../hooks/useActions';
import { UseTypedSelector } from '../hooks/useTypedSelector';
import { BasketObject } from '../types/basket';


const BasketProductTotal: React.FC = () => {
    const { basket } = UseTypedSelector(store => store.basket)
    const { removeProduct } = useActions()

    return (
        <div
            style={{
                width: '200px',
                position: 'absolute',
                top: '50px',
                right: '20px',
            }}
        >
            {
                basket.map((item: BasketObject, index) =>
                    <div
                        key={index}
                        onClick={() => { removeProduct(item.id) }}
                        style={{
                            border: '1px solid #000',
                            marginTop: '3px',
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            padding: '3px'
                        }}
                    >
                        {item.name} - {item.price} руб.
                    </div>
                )
            }
        </div>
    )
}

export default BasketProductTotal;