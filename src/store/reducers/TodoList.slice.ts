import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";
import {FilterType, IList} from "../../modules/IList";

const T_L_I = 'T_L_I'

export interface TaskType {
    id: string,
    title: string,
    completed: boolean
}

interface InitialStateType {
    lists: IList[]
}

const initialState: InitialStateType = {
    lists: JSON.parse(localStorage.getItem(T_L_I) ?? '[]')
}

export const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState,
    reducers: {
        addTodoList(state, action: PayloadAction<string>) {
            state.lists.push({
                id: v1(),
                title: action.payload,
                filter: 'all',
                tasks: []
            })
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        },
        deleteTodoList(state, action: PayloadAction<string>) {
            state.lists = state.lists.filter(list => list.id !== action.payload)
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        },
        changeFilter(state, action: PayloadAction<{ todoId: string, filter: FilterType }>) {
            let todo = state.lists.find(t => t.id === action.payload.todoId) || {
                id: v1(),
                title: 'error',
                filter: 'all',
                tasks: []
            }
            todo.filter = action.payload.filter
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        },
        addTask(state, action: PayloadAction<{ todoId: string; title: string }>) {
            let todo = state.lists.find(t => t.id === action.payload.todoId)
            todo?.tasks.push({
                id: v1(),
                title: action.payload.title,
                completed: false
            })
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        },
        deleteTask(state, action: PayloadAction<{ todoId: string; taskId: string }>) {
            let todo = state.lists.find(t => t.id === action.payload.todoId) || {
                id: v1(),
                title: 'error',
                filter: 'all',
                tasks: []
            }
            let newTask = todo.tasks.filter(task => task.id !== action.payload.taskId)
            todo.tasks = newTask
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        },
        completeTask(state, action: PayloadAction<{ todoId: string; taskId: string }>) {
            let todo = state.lists.find(t => t.id === action.payload.todoId)
            let task = todo?.tasks.find(t => t.id === action.payload.taskId) || {
                id: v1(),
                title: 'error',
                completed: false
            }
            task.completed ? task.completed = false : task.completed = true
            localStorage.setItem(T_L_I, JSON.stringify(state.lists))
        }
    }
})

export const {addTodoList, deleteTodoList, addTask, deleteTask, completeTask, changeFilter} = todoListSlice.actions
export default todoListSlice.reducer