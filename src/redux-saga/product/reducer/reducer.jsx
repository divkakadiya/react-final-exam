import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, } from "../action/action"

const initialState = {
    product: [],

    productProgress: false,
    productError: null,
    dataIsLoaded: false,
}

const productReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case GET_PRODUCT_PROGRESS:
            return {
                ...state,
                productProgress: true
            }

        case GET_PRODUCT_ERROR:
            return {
                ...state,
                productError: action.data
            }

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                dataIsLoaded: true,
                product: action.data
            }

        case DELETE_PRODUCT_PROGRESS:
            return {
                ...state,
                productProgress: true
            }

        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                productError: action.data
            }

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                dataIsLoaded: true,
                product: state.product.filter(v => v.id != action.data)
            }

        default: return state
    }
}

export default productReducer