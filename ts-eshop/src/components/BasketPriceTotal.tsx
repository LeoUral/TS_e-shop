import React from 'react'
import { UseTypedSelector } from '../hooks/useTypedSelector'

const BasketPriceTotal: React.FC = () => {
    const { basket } = UseTypedSelector(state => state.basket)

    let totalPrice = 0;
    basket.forEach(data => {
        totalPrice += data.price
    })

    return (
        <div
            style={{
                width: '150px',
                height: '40px',
                fontWeight: '700',
                fontSize: '18px',
                border: '2px solid green',
                textAlign: 'center',
                paddingTop: '8px',
                position: 'absolute',
                top: '10px',
                right: '20px',
                backgroundColor: '#ccc',
                boxSizing: 'border-box',
            }}
        >
            {totalPrice} руб.
        </div>
    )
}

export default BasketPriceTotal;