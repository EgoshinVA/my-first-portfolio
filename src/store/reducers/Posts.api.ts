import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IPost from "../../modules/IPost";

export const postAPI = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build) => ({
        fetchPosts: build.query<IPost[], number>({
            query: (limit:number = 5) => ({
                url: 'posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})