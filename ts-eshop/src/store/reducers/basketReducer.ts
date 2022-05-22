import { UseTypedSelector } from "../../hooks/useTypedSelector";
import { BasketState, BasketAction, BasketActionTypes } from "../../types/basket";


const initialState: BasketState = {
    basket: [
        {
            id: '',
            name: '',
            price: 0
        }
    ],
}

export const basketReduser = (state: BasketState = initialState, action: BasketAction): BasketState => {

    switch (action.type) {
        case BasketActionTypes.ADD_PRODUCT:
            return {
                ...state, basket: [...state.basket, action.payload]
            }

        case BasketActionTypes.REMOVE_PRODUCT:
            const result = state.basket.filter(item => item.id !== action.payload)
            return {
                ...state, basket: [...result]
            }

        default:
            return state
    }
}