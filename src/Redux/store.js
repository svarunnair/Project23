import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./Auth/authReducer"
import { dataReducer } from "./Data/reducer"



const root=combineReducers({
    
    auth:authReducer,
    data:dataReducer

})
export const store=legacy_createStore(root,applyMiddleware(thunk))