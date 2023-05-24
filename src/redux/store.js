import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/user.Slice";
import {commentReducer} from "./slices/comment.Slice";

const rootReducer= combineReducers({
    users:userReducer,
    comments:commentReducer

})

const setupStore = () => configureStore({
    reducer:rootReducer
})

export {
    setupStore
}
