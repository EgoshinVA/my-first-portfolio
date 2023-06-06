import {useAppActions, useAppSelector} from "../redux/redux";
import {usersAPI} from "../store/reducers/Users.api";
import {IUser} from "../modules/IUser";

function UserContainer() {
    const {friends} = useAppSelector(state => state.userReducer)
    const {addFriend} = useAppActions()
    const {deleteFriend} = useAppActions()

    const handleClick = (id: number) => {
        deleteFriend(id)
    }

    const {data} = usersAPI.useFetchUsersQuery('')

    const handleCLick = (user: IUser) => {
        addFriend(user)
    }

    return (
        <div className='ml-8 mt-8'>
            {data && data.map(user =>
                <h3 className='text-black dark:text-white font-medium' key={user.id}>{user.id}. {user.name}
                    {friends.find(f => f.id === user.id) ? <button
                        className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2'
                        onClick={() => handleClick(user.id)}> delete</button> : <button
                        className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-2'
                        onClick={() => handleCLick(user)}>Add friend</button>}

                </h3>
            )}

        </div>
    )
}

export default UserContainer