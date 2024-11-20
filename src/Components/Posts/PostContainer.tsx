import {postAPI} from "../../store/reducers/Posts.api";

function PostContainer() {
    const {isLoading, error, data: posts} = postAPI.useFetchPostsQuery(5)

    return (
        <div className='ml-8 mt-8'>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2 >Error</h2>}
            {posts && posts.map(post =>
                <h3 className='text-black dark:text-white font-medium' key={post.id}>
                    {post.id}. {post.title}
                </h3>
            )}
        </div>
    )
}

export default PostContainer