import { createAction, props } from '@ngrx/store';
import { Post } from './post.state';

export const createPost = createAction('[Ngrx-store Component] create', props<{ item: Post }>());
export const updatePost = createAction('[Ngrx-store Component] update', props<{ id: string, updatedPost: Post }>());
export const deletePost = createAction('[Ngrx-store Component] delete', props<{ id: string }>());