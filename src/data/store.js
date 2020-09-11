import { createStore, compose } from "redux";
// import persistState from "redux-localstorage";
import initial from "./initial";
import reducer from "./reducers";


// making a redux store with my reducer and initial state and implementing redux-localstorage

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
reducer,
initial,
composeEnhancers(/*persistState()*/)
);

export default store;
