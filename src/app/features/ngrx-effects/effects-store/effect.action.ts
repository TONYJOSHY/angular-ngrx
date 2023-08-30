import { createAction, props } from "@ngrx/store";
import { User, UserLogin } from './../service/login.model'

export const loginStart = createAction('[Ngrx effect Component] Start', props<{ data: UserLogin }>());
export const loginSuccess = createAction('[Ngrx effect Component] Success', props<{user: User}>());
export const loginFail = createAction('[Ngrx effect Component] Fail')