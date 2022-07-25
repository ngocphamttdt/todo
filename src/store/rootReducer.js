import { combineReducers } from "redux";
import counterReducer from "../components/duck/reducers/counterReducer";

 const rootReducer = combineReducers({
    count: counterReducer
 })

 export default rootReducer