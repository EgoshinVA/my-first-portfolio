import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {userSlice} from "../store/reducers/User.slice";
import {todoListSlice} from "../store/reducers/TodoList.slice";

const actions = {
    ...userSlice.actions, ...todoListSlice.actions
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}