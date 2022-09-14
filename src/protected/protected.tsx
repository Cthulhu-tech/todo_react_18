import { Outlet, Navigate, useLocation } from "react-router-dom"
import { Loading } from "../components/loading/loading"
import { StoreData } from "../interface/Interface"
import { useSelector } from "react-redux"
import { lazy, Suspense, } from "react"

const JWT = lazy(() => import('./jwt'))

export const Protected = () => {

    const location = useLocation();
    const userData = useSelector((store:StoreData) => store.UserDataStore)

    if(userData.token && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Navigate to='/'/>

    if(userData.token === null && userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Outlet/>

    if(userData.token === null && userData.load) return <Navigate to='/login'/>

    return <Suspense fallback={<Loading/>}>
        <JWT/>
    </Suspense>

}
