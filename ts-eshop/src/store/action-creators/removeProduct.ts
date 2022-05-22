import { Dispatch } from "react"
import { BasketAction, BasketActionTypes } from "../../types/basket"

export const removeProduct = (id: string) => {

    console.log(`ID: `, id); // test

    return (dispatch: Dispatch<BasketAction>) => {
        try {
            dispatch({
                type: BasketActionTypes.REMOVE_PRODUCT,
                payload: id
            })

        } catch (err) {
            console.log(`Ошибка Action Creator: `, err);

        }
    }
}