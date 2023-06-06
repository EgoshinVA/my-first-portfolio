import {TaskType} from "../store/reducers/TodoList.slice";

export interface IList {
    id: string
    title: string
    filter: FilterType
    tasks: TaskType[]
}

export type FilterType = 'all' | 'completed' | 'active'