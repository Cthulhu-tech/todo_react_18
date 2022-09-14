export interface IAction <T, U> {
    readonly type: T;
    readonly payload: U;
}

export type UserPayload = {
    id: null | number;
    user: null | string;
    token: null | string;
    load: boolean;
}

export interface IUseFetch <T> {
    readonly load: boolean;
    readonly data: T | null;
    readonly error: ErrorData | null;
    fetchData: (url: string) => void;
}

export type ErrorData = {
    message: string;
}

export type StoreData = {
    UserDataStore: UserPayload
}