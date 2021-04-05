import { combineReducers, Reducer, AnyAction } from 'redux';


const rootReducer: Reducer<any, AnyAction> = combineReducers<any>({
 
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;