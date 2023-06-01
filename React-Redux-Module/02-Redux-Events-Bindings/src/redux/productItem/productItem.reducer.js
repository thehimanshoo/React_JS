import * as productItemActions from './productItem.actions';

// feature key
export const productItemFeatureKey = 'productItem';

// initial state
let initialState = {
    product : {
        id : 'AA101AC',
        image : 'https://images-na.ssl-images-amazon.com/images/I/61v3DQL0seL._SX342_.jpg',
        name : 'Philips Light',
        qty : 2,
        price : 550
    }
};

// reducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case productItemActions.INCR_QTY:
            return {
                product : {
                    ...state.product,
                    qty : state.product.qty + 1
                }
            };
        case productItemActions.DECR_QTY:
            return {
                product : {
                    ...state.product,
                    qty : (state.product.qty - 1 > 0)? state.product.qty - 1 : 1
                }
            };
        default : return state;
    }
};
