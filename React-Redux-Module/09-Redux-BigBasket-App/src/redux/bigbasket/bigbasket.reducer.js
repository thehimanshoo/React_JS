import * as bigBasketActions from './bigbasket.actions';

export const bigBasketFeatureKey = 'bigBasket';

let initialState = {
    loading : false,
    errorMessage : '',
    products : [],
    product : {}
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type){
        // Get all the products
        case bigBasketActions.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading : true
            };
        case bigBasketActions.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading : false,
                products: payload
            };
        case bigBasketActions.GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        // Create a Product
        case bigBasketActions.CREATE_PRODUCT_REQUEST :
            return  {
                ...state,
                loading: true
            };
        case bigBasketActions.CREATE_PRODUCT_SUCCESS :
            return  {
                ...state,
                loading: false
            };
        case bigBasketActions.CREATE_PRODUCT_FAILURE :
            return  {
                ...state,
                loading: false
            };
        // Get a product
        case bigBasketActions.GET_PRODUCT_REQUEST :
            return  {
                ...state,
                loading: true
            };
        case bigBasketActions.GET_PRODUCT_SUCCESS :
            return  {
                ...state,
                loading: false,
                product: payload
            };
        case bigBasketActions.GET_PRODUCT_FAILURE :
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case bigBasketActions.UPDATE_INPUT:
            return {
                ...state,
                product: {
                    ...state.product,
                    [payload.key] : payload.value
                }
            };
        case bigBasketActions.UPDATE_PRODUCT_REQUEST :
            return  {
                ...state,
                loading:  true,
            };
        case bigBasketActions.UPDATE_PRODUCT_SUCCESS :
            return  {
                ...state,
                loading:  false,
            };
        case bigBasketActions.UPDATE_PRODUCT_FAILURE:
            return  {
                ...state,
                loading:  false,
            };
        // Delete Product
        case bigBasketActions.DELETE_PRODUCT_REQUEST :
            return {
                ...state,
                loading: true
            };
        case bigBasketActions.DELETE_PRODUCT_SUCCESS :
            return {
                ...state,
                loading: false
            };
        case bigBasketActions.DELETE_PRODUCT_FAILURE :
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
};