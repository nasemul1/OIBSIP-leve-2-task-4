import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { ToastContainer } from "react-toastify"
import Secret from "./pages/Secret"

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/OIBSIP-level-2-task-4" element={<Home />}></Route>
          <Route path="/OIBSIP-level-2-task-4/login" element={<Login />}></Route>
          <Route path="/OIBSIP-level-2-task-4/registration" element={<Registration />}></Route>
          <Route path="/OIBSIP-level-2-task-4/secret" element={<Secret />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
