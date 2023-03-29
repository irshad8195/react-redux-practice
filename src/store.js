import { createStore } from "redux";
import counterReducer from "./Reducer/counterReducer";

const reduxStore=createStore(counterReducer)

export default reduxStore