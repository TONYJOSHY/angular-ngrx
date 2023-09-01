import { createAction, props } from "@ngrx/store";
import { User, UserLogin } from './../service/login.model'

export const loginStart = createAction('[Ngrx effect Component] login Start', props<{ data: UserLogin }>());
export const loginSuccess = createAction('[Ngrx effect Component] login Success', props<{user: User}>());
export const loginFail = createAction('[Ngrx effect Component] login Fail', props<{ message: string }>());

export const logoutStart = createAction('[Ngrx effect Component] logout Start');
export const logoutSuccess = createAction('[Ngrx effect Component] logout Success');
export const logoutFail = createAction('[Ngrx effect Component] logout Fail', props<{ message: string }>());