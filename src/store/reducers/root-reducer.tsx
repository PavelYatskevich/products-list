import { combineReducers } from 'redux';

import basicReducer from './basic-reducer';

export const rootReducer = combineReducers({
    basicReducer,
}) as any;
