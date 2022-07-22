import {createStore , combineReducers , applyMiddleware} from "redux"
import { addPetReducer } from "./addPet/reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    addPet : addPetReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))
