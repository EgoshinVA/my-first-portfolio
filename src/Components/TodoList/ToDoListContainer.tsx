import {useAppActions, useAppSelector} from "../../redux/redux";
import TodoListElement from "./TodoListElement";
import {FilterType} from "../../modules/IList";

function ToDoListContainer() {
    const {lists} = useAppSelector(state => state.todoListReducer)

    const {addTodoList, deleteTodoList, completeTask, addTask, deleteTask, changeFilter} = useAppActions()

    const handleAddList = () => {
        let title = prompt()
        title ? addTodoList(title) : alert('Строка пуста')
    }
    const handleDeleteList = (id: string) => {
        deleteTodoList(id)
    }
    const handleCompleteTask = (todoId: string, taskId: string) => {
        completeTask({todoId, taskId})
    }
    const handleAddTask = (todoId: string, title: string) => {
        addTask({todoId, title})
    }
    const handleDeleteTask = (todoId: string, taskId: string) => {
        deleteTask({todoId, taskId})
    }
    const handleChangeFilter = (todoId: string, filter: FilterType) => {
        changeFilter({todoId, filter})
    }

    return (
        <div className='flex items-start py-8 flex-wrap'>
            {lists.map(list =>
                <TodoListElement
                    key={list.id}
                    handleDeleteList={handleDeleteList}
                    handleCompleteTask={handleCompleteTask}
                    handleAddTask={handleAddTask}
                    handleDeleteTask={handleDeleteTask}
                    handleChangeFilter={handleChangeFilter}
                    filter={list.filter}
                    list={list}/>)
            }
            <button className='text-gray-900 dark:text-white bg-gradient-to-r dark:bg-gradient-to-br from-red-200 dark:from-purple-600 via-red-300 to-yellow-200 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2' onClick={handleAddList}>+
            </button>

        </div>
    )
}

export default ToDoListContainer