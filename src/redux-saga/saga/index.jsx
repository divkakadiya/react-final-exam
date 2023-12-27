import { all } from "redux-saga/effects";
import { deleteProductSaga, getProductSaga, } from "./root/rootProductsaga";

export function* rootSaga() {
    yield all([
        getProductSaga(),
        deleteProductSaga(),
    ])
}