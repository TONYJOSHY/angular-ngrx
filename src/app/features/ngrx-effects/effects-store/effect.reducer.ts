import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./effect.state";
import { loginSuccess } from "./effect.action";


export const authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, action) => {
        return {
            ...state, user: action.user
        }
    } )
    
)