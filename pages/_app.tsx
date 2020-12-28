import React from "react";
import withRedux, { MakeStore } from 'next-redux-wrapper';
import { Provider } from 'react-redux'; 
import { createStore, compose, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware,{ Task } from "redux-saga"; 
import withReduxSaga from 'next-redux-saga'; 
import rootSaga from '../sagas'; 
import { AppProps } from "next/dist/next-server/lib/router/router";
declare module 'redux' {
    export interface Store {
      sagaTask?: Task;
    }
  }
const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
  };
  
const Test = ({ Component, store } : AppProps) => {
  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  );
};
const makeStore: MakeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
  
    const store = createStore(reducer, bindMiddleware([sagaMiddleware]));
  
    store.sagaTask = sagaMiddleware.run(rootSaga);
  
    return store;
  };


export default withRedux(makeStore)(withReduxSaga(Test));