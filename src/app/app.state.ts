import { counterReducer } from './features/ngrx-basics/basic-store/basic-store.reducer';
import { CounterState } from './features/ngrx-basics/basic-store/basic-store.state'
import { postReducer } from './features/ngrx-store/post-store/post.reducer';
import { PostState } from './features/ngrx-store/post-store/post.state';
import { authReducer } from './features/ngrx-effects/effects-store/effect.reducer'
import { AuthState } from './features/ngrx-effects/effects-store/effect.state';

export interface AppState{
    firstCounter: CounterState;
    postItem: PostState;
    auth: AuthState;
}

export const AppReducer = {
    firstCounter: counterReducer,
    postItem: postReducer,
    auth: authReducer
}