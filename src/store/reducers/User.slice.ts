import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../modules/IUser";

const U_FR_KEY = 'U_FR_KEY'

interface InitialStateType {
    friends: IUser[]
}

const initialState: InitialStateType = {
    friends: JSON.parse(localStorage.getItem(U_FR_KEY) ?? '[]')
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addFriend(state, action: PayloadAction<IUser>){
            state.friends.push(action.payload)
            localStorage.setItem(U_FR_KEY, JSON.stringify(state.friends))
        },
        deleteFriend(state, action: PayloadAction<number>){
            state.friends = state.friends.filter(user => user.id !== action.payload)
            localStorage.setItem(U_FR_KEY, JSON.stringify(state.friends))
        }
    }
})
