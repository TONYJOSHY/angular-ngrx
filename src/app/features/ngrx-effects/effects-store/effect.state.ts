import { User } from "../service/login.model"

export interface AuthState{
    user: User | null;
    loading: boolean;
    errorMessage: string;
}

export const initialAuthState: AuthState = {
    user: null,
    loading: false,
    errorMessage: '',
}