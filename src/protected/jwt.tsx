import { updateUserData } from "../redux/store/userData"
import { UserPayload } from "../interface/Interface"
import { Error } from "../components/error/error"
import { useFetch } from "../hook/useFetch"
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"

const JWT = () => {

    const dispatch = useDispatch()
    const {data, error, fetchData} = useFetch<UserPayload>("POST")

    useEffect(() => {
        fetchData("http//localhost:3000/refrsh")
    }, [])
    
    if(error) return <Error {...{message: error.message}}/>

    if(data) dispatch(updateUserData(data))

    return <Outlet />

}

export default JWT
