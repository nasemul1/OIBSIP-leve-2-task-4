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
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/secret" element={<Secret />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
