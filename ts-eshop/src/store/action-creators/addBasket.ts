import { Dispatch } from "react"
import { BasketAction, BasketActionTypes, BasketObject } from "../../types/basket"

//  = { id: '0', name: 'box-1', price: 1300 }

export const addBasket = (product: BasketObject) => {

    console.log(`PRODUCT: `, product); // test

    return (dispatch: Dispatch<BasketAction>) => {
        try {
            dispatch({
                type: BasketActionTypes.ADD_PRODUCT,
                payload: product
            })

        } catch (err) {
            console.log(`Ошибка Action Creator: `, err);

        }
    }
}