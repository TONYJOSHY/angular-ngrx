import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./effect.state";
import { loginFail, loginStart, loginSuccess, logoutSuccess } from "./effect.action";


export const authReducer = createReducer(
    initialAuthState,
    on(loginStart, (state) => {
        return {
            ...state, loading: true
        }
    }),
    on(loginSuccess, (state, action) => {
        return {
            ...state, user: action.user, loading: false, errorMessage: ''
        }
    } ),
    on(loginFail, (state, action) => {
        console.log(action)
        return {
            ...state, loading: false, errorMessage: action.message
        }
    } ),
    on(logoutSuccess, (state)=> {
        return {
            ...state, user: null
        }
    })
    
)