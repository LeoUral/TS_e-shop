type ActionType = {
    type: string,
    payload: object,
}

type StateType = {
    products: Array<object>,
}

const defaultState: StateType = {
    products: [],
}

const ADD_PRODUCT = 'ADD_PRODUCT'

export const reduserProduct = (state = defaultState, action: ActionType) => {
    switch (action.type) {

        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] }

        default:
            return state
    }
}

export const addProduct = (payload: object): ActionType => ({ type: ADD_PRODUCT, payload })