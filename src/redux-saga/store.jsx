import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store