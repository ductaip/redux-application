import { initialPostList } from "@/constants/blog";
import { Post } from "@/types/blog.type";
import { createReducer } from "@reduxjs/toolkit";

interface BlogState {
    postList: Post[]
}

const initialState: BlogState = {
    postList: initialPostList
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blogReducer = createReducer(initialState, (builder) => {

})

export default blogReducer