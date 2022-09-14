import { Protected } from "./protected/protected"
import { BrowserRouter } from "react-router-dom"
import { Login } from "./page/loading/login"
import { Route, Routes } from "react-router"

export const App = () => {

  return  <BrowserRouter>
  <Routes>
    <Route element={<Protected/>}>
      <Route path="/registration" element={<>Registration</>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/"  element={<>Protected</>}/>
    </Route>
  </Routes>
  </BrowserRouter>

}
