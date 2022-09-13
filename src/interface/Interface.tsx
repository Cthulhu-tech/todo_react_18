export interface IAction <T, U> {
    readonly type: T
    readonly payload: U
}

export type UserPayload = {
    id: null;
    user: null;
    token: null;
}