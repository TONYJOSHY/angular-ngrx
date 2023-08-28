import { createReducer, on } from '@ngrx/store';
import { Post, postState } from './post.state';
import { createPost, updatePost, deletePost } from './post.actions';

export const postReducer = createReducer(
    postState,
    on(createPost, (state, action) => {
        const newPost: Post[] = [ action.item, ...state.post ];
        return {
            ...state, 
            post: newPost,
            items: newPost.length
        }
    } ),
    on(updatePost, (state, action) => {
        const updatedPosts = state.post.map((post) => {
            return action.id === post.title ? action.updatedPost : post;
        });
        return {
            ...state,
            post: updatedPosts,
            items: updatedPosts.length
        }
    } ),
    on(deletePost, (state, action) => {
        const newPost: Post[] = state.post.filter( (value: Post) => value.title != action.id );
        return {
            ...state,
            post: newPost,
            items: newPost.length
        }
    } )
)