import { Outlet, Navigate, useLocation } from "react-router-dom"
import { Loading } from "../components/loading/loading"
import { StoreData } from "../interface/Interface"
import { lazy, Suspense, useEffect, } from "react"
import { useSelector } from "react-redux"

const JWT = lazy(() => import('./jwt'))

export const Protected = () => {

    const location = useLocation()
    const userData = useSelector((store:StoreData) => store.UserDataStore)
    
    useEffect(() => {},[userData])

    if(userData.token && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Navigate to='/'/>
    if(userData.token === null && !userData.load && (location.pathname === '/login' || location.pathname === '/registration')) return <Outlet/>
    if(userData.token === null && !userData.load) return <Navigate to='/login'/>

    return <Suspense fallback={<Loading/>}>
        {userData.token && !userData.load ? <Outlet/> : <JWT/>}
    </Suspense>

}
