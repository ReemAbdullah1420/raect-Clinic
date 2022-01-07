import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom"
import ClinicContext from "./utils/ClinicContext"
import { toast, ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Tableitem from "./pages/Table"
import Register from "./pages/Register"
import SignUp from "./pages/SignUp"
import Covid from "./pages/Covid"
import NavbarItem from "./components/NavbarItem"

function App() {
  const navigate = useNavigate()
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        image: form.elements.image.value,
      }

      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  // const login = async e => {
  //   e.preventDefault()
  //   try {
  //     const form = e.target
  //     const userBody = {
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     }

  //     const response = await axios.post("http://localhost:5000/api/auth/login", userBody)

  //     const token = response.data
  //     localStorage.tokenUser = token
  //     console.log("login success")

  //     navigate("/")
  //   } catch (error) {
  //     if (error.response) toast.error(error.response.data)
  //     else console.log(error)
  //   }
  // }

  // const logout = () => {
  //   localStorage.removeItem("tokenClinic")
  //   console.log("logout success")
  // }

  const store = {
    signup,
    // login,
    // logout,
  }
  return (
    <>
      <ClinicContext.Provider value={store}>
        <ToastContainer />
        <NavbarItem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<Tableitem />} />
          <Route path="/about" element={<SignUp />} />
          <Route path="/covid-19" element={<Covid />} />
        </Routes>
      </ClinicContext.Provider>
    </>
  )
}

export default App
