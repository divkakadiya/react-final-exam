import { takeEvery } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, } from "../../product/action/action";
import { handleDeleteProduct, handleGetProduct, } from "../manageProduct/manageProduct";

export function* getProductSaga() {
    yield takeEvery(GET_PRODUCT_PROGRESS, handleGetProduct)
}

export function* deleteProductSaga() {
    yield takeEvery(DELETE_PRODUCT_PROGRESS, handleDeleteProduct)
}


