import { createStore } from "redux";
import { bankReducer } from "./reducers/bank-reducer";

const store = createStore(bankReducer);

export default store;
