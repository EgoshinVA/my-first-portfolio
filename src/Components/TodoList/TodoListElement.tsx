import {FC, useState} from "react";
import {FilterType, IList} from "../../modules/IList";

interface PropsType {
    list: IList
    filter: FilterType

    handleAddTask: (todoId: string, title: string) => void
    handleCompleteTask: (todoId: string, taskId: string) => void
    handleDeleteList: (id: string) => void
    handleDeleteTask: (todoId: string, taskId: string) => void
    handleChangeFilter: (todoId: string, filter: FilterType) => void
}

const TodoListElement: FC<PropsType> = ({
                                            handleAddTask,
                                            handleCompleteTask,
                                            handleDeleteList,
                                            handleDeleteTask,
                                            handleChangeFilter,
                                            list,
                                            filter
                                        }) => {
    const [title, setTitle] = useState('')
    const [isRequired, setIsRequired] = useState(false)

    let NewTasks = list.tasks
    if (filter === 'active') {
        NewTasks = list.tasks.filter(task => !task.completed)
    }
    if (filter === 'completed') {
        NewTasks = list.tasks.filter(task => task.completed)
    }

    const onHandleAddTask = (id: string) => {
        if (title.trim() === '')
            setIsRequired(true)
        else {
            handleAddTask(id, title.trim());
            setTitle('')
        }
    }


    return (
        <div className='border border-amber-300 dark:border-blue-400 rounded-lg ml-8 p-4 pl-1 dark:bg-gray-900 min-h-[250px] relative mb-8 pb-12'>
            <div className='ml-5' key={list.id}>
                <div className='flex justify-between my-2'>
                    <h2 className='font-bold text-xl dark:text-white'>{list.title}</h2>

                </div>
                <div className='flex items-center'>
                    <input placeholder={isRequired ? 'Field is required' : ''}
                           className={isRequired ? 'border border-red-600 placeholder-red-500 rounded-lg p-1' : 'rounded-lg p-1 border border-amber-300 dark:border-blue-700'}
                           value={title}
                           onChange={(e) => {
                               setTitle(e.target.value);
                               setIsRequired(false)
                           }}/>
                    <button
                        className='text-gray-900 dark:text-white bg-gradient-to-r dark:bg-gradient-to-br from-red-200 dark:from-purple-600 via-red-300 to-yellow-200 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center ml-2 '
                        onClick={() => {
                            onHandleAddTask(list.id)
                        }}>+
                    </button>
                </div>
                <ul className='my-2'>
                    {NewTasks.map(task =>
                        <li className='my-1 flex items-center justify-between'
                            key={task.id}>
                            <input
                                className='w-4 h-4 text-yellow-400 dark:text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                checked={task.completed}
                                onChange={() => handleCompleteTask(list.id, task.id)}
                                type={'checkbox'}/>
                            <span className='mx-1 dark:text-white'>{task.title}</span>
                            <button
                                className='text-gray-900 dark:text-white bg-gradient-to-r dark:bg-gradient-to-br from-red-200 dark:from-purple-600 via-red-300 to-yellow-200 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 text-center'
                                onClick={() => handleDeleteTask(list.id, task.id)}>-
                            </button>

                        </li>
                    )}
                </ul>
                <div className='absolute bottom-3 '>
                    <button
                        className={filter === 'all' ? 'border border-yellow-300 dark:border-purple-600 rounded-lg p-1 mr-2 dark:text-white' : 'mr-2 dark:text-white'}
                        onClick={() => handleChangeFilter(list.id, 'all')}>All
                    </button>
                    <button
                        className={filter === 'active' ? 'border border-yellow-300 dark:border-purple-600 rounded-lg p-1 mr-2 dark:text-white' : 'mr-2 dark:text-white'}
                        onClick={() => handleChangeFilter(list.id, 'active')}>Active
                    </button>
                    <button
                        className={filter === 'completed' ? 'border border-yellow-300 dark:border-purple-600 rounded-lg p-1 mr-2 dark:text-white' : 'mr-2 dark:text-white'}
                        onClick={() => handleChangeFilter(list.id, 'completed')}>Completed
                    </button>
                    <button
                        className='text-gray-900 dark:text-white bg-gradient-to-r dark:bg-gradient-to-br from-red-200 dark:from-purple-600 via-red-300 to-yellow-200 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1.5 text-center ml-7'
                        onClick={() => handleDeleteList(list.id)}>X
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TodoListElement



