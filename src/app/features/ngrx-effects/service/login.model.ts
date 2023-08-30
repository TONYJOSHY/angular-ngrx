export interface UserLogin{
    username: string;
    password: string;
}

export interface ResponseType<T>{
    code: number;
    data: T;
    detail: string;
    success: boolean;
}

export interface User{
    accesses: Object;
    id: string
    last_login: string;
    name: string; 
    role: number;
    token: string
}