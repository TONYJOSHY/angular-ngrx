import { User } from "../service/login.model"

export interface AuthState{
    user: User | null;
}

export const initialAuthState: AuthState = {
    user: null
}