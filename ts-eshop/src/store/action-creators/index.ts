import * as BasketActionCreators from './addBasket'
import * as RemoveActionCreators from './removeProduct'

export default {
    ...BasketActionCreators,
    ...RemoveActionCreators,
}