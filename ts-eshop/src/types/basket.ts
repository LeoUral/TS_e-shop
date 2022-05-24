
export type BasketObject = {
    idp: string;
    id: string;
    name: string;
    price: number;
    description: string;
}

export interface BasketState {
    basket: any[]
}

export enum BasketActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}

interface DoAddProduct {
    type: BasketActionTypes.ADD_PRODUCT;
    payload: any

}

interface DoRemoveProduct {
    type: BasketActionTypes.REMOVE_PRODUCT;
    payload: string
}

export type BasketAction = DoAddProduct | DoRemoveProduct

