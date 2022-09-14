import { IAction, UserPayload } from "../../interface/Interface";

const defaultState:UserPayload = {

    id: null,
    user: null,
    token: null,
    load: true,

}

const setData = "set_user_data"
const deleteData = "delete_user_data"

export const UserDataStore = (state = defaultState, action:IAction<string, UserPayload>) => {
    switch (action.type){
        case setData: 
            return {...state, ...action.payload}
        case deleteData:
            return { id: null, user: null, token: null, load: false }
        default:
            return state;
    }
}

export const updateUserData = (payload: UserPayload) => ({ type: setData, payload });
export const deleteUserData = (payload: null) => ({ type: deleteData, payload });