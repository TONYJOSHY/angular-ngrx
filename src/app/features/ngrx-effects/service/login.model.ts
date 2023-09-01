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

export interface ResponseTypeList<T>{
    code: number;
    data: List<T>;
    detail: string;
    success: boolean;
}

export interface List<T>{
    count: number;
    next: string | null;
    previous: string | null;
    results: T
}

export interface User{
    accesses: Object;
    id: string
    last_login: string;
    name: string; 
    role: number;
    token: string
}