import { Outlet, Navigate, useLocation } from "react-router-dom"
import { StoreData, UserPayload } from "../interface/Interface"
import { updateUserData } from "../redux/store/userData"
import { Loading } from "../components/loading/loading"
import { useSelector, useDispatch } from "react-redux"
import { Error } from "../components/error/error"
import { Suspense, useEffect } from "react"
import { useFetch } from "../hook/useFetch"

export const Protected = () => {

    const location = useLocation();
    const userData = useSelector((store:StoreData) => store.UserDataStore)

    if(userData.token && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Navigate to='/'/>

    if(userData.token === null && userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Outlet/>

    if(userData.token === null && userData.load) return <Navigate to='/login'/>

    return <Suspense fallback={<Loading/>}>
        <CheckJWT/>
    </Suspense>

}

const CheckJWT = () => {

    const dispatch = useDispatch()
    const {load, data, error, fetchData} = useFetch<UserPayload>("POST")

    useEffect(() => {
        fetchData("http//localhost:3000/refrsh")
    }, [])

    if(load) return <Loading/>
    
    if(error) return <Error {...{message: error.message}}/>

    if(data) dispatch(updateUserData(data))

    return <Outlet />

}