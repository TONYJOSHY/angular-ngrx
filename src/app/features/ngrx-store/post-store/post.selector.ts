import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const POST_STATE_NAME = 'postItem';

const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME);

export const getPost = createSelector(getPostState, (state) => state.post);
export const getItems = createSelector(getPostState, (state) => state.items);