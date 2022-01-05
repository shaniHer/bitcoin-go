import { createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";
import { userReducer } from "./reducers/userReducer";
import { bitcoinReducer } from "./reducers/bitcoinReducer";

const rootReducer = combineReducers({
    contactModule: contactReducer,
    userModule: userReducer,
    bitcoinModule: bitcoinReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunk))