import todoListSlice, {
    addTodoList,
    deleteTodoList,
    addTask,
    deleteTask,
    completeTask,
    changeFilter
} from "../reducers/TodoList.slice";

describe('todoSlice', () => {
    it('should add new todolist item with "addTodoList" action', function () {
        const action = {type: addTodoList.type, payload: 'newTodoLIstTest'}
        const result = todoListSlice({lists: []}, action)
        expect(result.lists[0].title).toBe('newTodoLIstTest')
    });
    it('should remove todolist item by id with "deleteTodoList" action', function () {
        const action = {type: deleteTodoList.type, payload: '1'}
        const result = todoListSlice({
            lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: []
                }
            ]
        }, action)
        expect(result).toEqual({lists: []})
    });
    it('should add new task item with "addTask" action', function () {
        const action = {type: addTask.type, payload: { todoId: '1', title: 'testTask' }}
        const result = todoListSlice({
            lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: []
                }
            ]
        }, action)
        expect(result.lists[0].tasks[0].title).toBe('testTask')
        expect(result.lists[0].tasks[0].completed).toBe(false)
    });
    it('should remove task item by id with "deleteTask" action', function () {
        const action = {type: deleteTask.type, payload: { todoId: '1', taskId: '1' }}
        const result = todoListSlice({
            lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: [{
                        id: '1',
                        title: 'testTask',
                        completed: false
                    }]
                }
            ]
        }, action)
        expect(result).toEqual({lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: []
                }
            ]})
    });
    it('should complete task by id with "completeTask" action', function () {
        const action = {type: completeTask.type, payload: { todoId: '1', taskId: '1' }}
        const result = todoListSlice({
            lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: [{
                        id: '1',
                        title: 'testTask',
                        completed: false
                    }]
                }
            ]
        }, action)
        expect(result.lists[0].tasks[0].completed).toBe(true)
    });
    it('should change filter by id with "changeFilter" action', function () {
        const action = {type: changeFilter.type, payload: { todoId: '1', filter: 'completed' }}
        const result = todoListSlice({
            lists: [
                {
                    id: '1',
                    title: 'testTodoList',
                    filter: 'active',
                    tasks: []
                }
            ]
        }, action)
        expect(result.lists[0].filter).toBe('completed')
    });
})