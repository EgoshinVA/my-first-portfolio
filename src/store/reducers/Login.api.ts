import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {ILogin} from "../../modules/ILogin";
import {AuthRequest} from "../../modules/AuthRequest";
import {AuthMeType, LoginRequestType} from "../../modules/LoginTypes";

export const loginAPI = createApi({
    reducerPath: 'loginAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://social-network.samuraijs.com/api/1.1',
        credentials: "include"
    }),
    tagTypes: ['Login'],
    endpoints: (build) => ({
        authMe: build.query<AuthRequest<AuthMeType>, any>({
            query: () => ({
                url: '/auth/me'
            }),
            providesTags: result => ['Login']
        }),
        login: build.mutation<AuthRequest<LoginRequestType>, ILogin> ({
            query: (post: ILogin) => ({
                url: '/auth/login',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Login']
        }),
        logout: build.mutation<AuthRequest<any>, any>({
            query: () => ({
                url: '/auth/login',
                method: 'DELETE'
            }),
            invalidatesTags: ['Login']
        })
    })
})

// fetchAllPosts: build.query<IPost[], number>({
//     query: (limit: number = 5) => ({
//         url: '/posts',
//         params: {
//             _limit: limit
//         }
//     }),
//     providesTags: result => ['Post']
// }),
//     createPost: build.mutation<IPost, IPost>({
//     query: (post: IPost) => ({
//         url: '/posts',
//         method: 'POST',
//         body: post
//     }),
//     invalidatesTags: ['Post']
// }),
//     updatePost: build.mutation<IPost, IPost>({
//     query: (post: IPost) => ({
//         url: `/posts/${post.id}`,
//         method: 'PUT',
//         body: post
//     }),
//     invalidatesTags: ['Post']
// }),
//     deletePost: build.mutation<IPost, IPost>({
//     query: (post: IPost) => ({
//         url: `/posts/${post.id}`,
//         method: 'DELETE'
//     }),
//     invalidatesTags: ['Post']
// }),