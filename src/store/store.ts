import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./reducers/User.slice";
import {postAPI} from "./reducers/Posts.api";
import {usersAPI} from "./reducers/Users.api";
import {todoListSlice} from "./reducers/TodoList.slice";
import {loginAPI} from "./reducers/Login.api";

const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    todoListReducer: todoListSlice.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware, usersAPI.middleware, loginAPI.middleware)
    })
}