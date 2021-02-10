import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/root-reducer";
import thunk from "redux-thunk";


const composeEnhancers = composeWithDevTools({});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type Dispatch = typeof store.dispatch;
// @ts-ignore
export type State = ReturnType<typeof rootReducer>;
