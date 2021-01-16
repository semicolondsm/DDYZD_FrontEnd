import { AnyAction, applyMiddleware, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';
import { RootStateInterface } from './interfaces/ifRootState';
interface SagaStore extends Store<RootStateInterface, AnyAction> {
    sagaTask: Task;
}
const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore: MakeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
    
    (store as unknown as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });