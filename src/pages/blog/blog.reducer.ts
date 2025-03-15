import { initialPostList } from "@/constants/blog";
import { Post } from "@/types/blog.type";
import { createAction, createReducer } from "@reduxjs/toolkit";

interface BlogState {
    postList: Post[]
}

const initialState: BlogState = {
    postList: initialPostList
}

export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initialState, (builder) => {
    builder.addCase(addPost, (state, action) => {
        //mutate truc tiep bang immerjs *thuc chat la tao ra ban sao
        const post = action.payload
        state.postList.push(post)
    })
})

export default blogReducer