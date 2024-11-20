import userSlice, {addFriend, deleteFriend} from "../reducers/User.slice";

describe('userSlice', () => {
    it('should return default state when passed an empty action', function () {
        const result = userSlice(undefined, {type: ''})
        expect(result).toEqual({friends: []})
    });
    it('should add new friend item with "addFriend" action', function () {
        const action = {type: addFriend.type, payload: {id: 1, name: 'testName'}}
        const result = userSlice({friends: []}, action)
        expect(result.friends[0].name).toBe('testName')
    });
    it('should remove friend item by id with "deleteFriend" action', function () {
        const action = {type: deleteFriend.type, payload: 1}
        const result = userSlice({friends: [{id: 1, name: 'testName'}]}, action)
        expect(result).toEqual({friends: []})
    });
})