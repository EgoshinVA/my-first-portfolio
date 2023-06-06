import { useAppActions, useAppSelector } from '../redux/redux';

function FriendsContainer() {
  const { friends } = useAppSelector((state) => state.userReducer);
  const { deleteFriend } = useAppActions();

  const handleClick = (id: number) => {
    deleteFriend(id);
  };

  return (
    <div className="ml-8 mt-8">
      {friends &&
        friends.map((user) => (
          <h3 className="text-black dark:text-white font-medium" key={user.id}>
            {user.id}. {user.name}
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2"
              onClick={() => handleClick(user.id)}
            >
              {' '}
              delete
            </button>
          </h3>
        ))}
    </div>
  );
}

export default FriendsContainer;
