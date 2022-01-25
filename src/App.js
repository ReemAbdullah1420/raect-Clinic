import axios from "axios"
import { Route, Routes, useNavigate } from "react-router-dom"
import ClinicContext from "./utils/ClinicContext"
import { toast, ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Tableitem from "./pages/Table"
import Register from "./pages/Register"
import NavbarItem from "./components/NavbarItem"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import LoginDoctor from "./pages/LoginDoctor"
import SignUpCompany from "./pages/SignupCompany"
import { useEffect, useState } from "react"
import AboutUs from "./pages/AboutUs"
import CardOne from "./pages/Cardone"
import Health from "./pages/HealthTools"
import Profile from "./pages/Profile"
import C from "./pages/Card"

function App() {
  const navigate = useNavigate()
  const [sections, setSections] = useState([])
  const [Appointments, setAppointments] = useState([])
  const [services, setServices] = useState([])
  const [Programs, setPrograms] = useState([])

  const getsections = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clinicDepartments")
      setSections(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  // const Appointment = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/appointments")
  //     setAppointments(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const service = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/services")
      setServices(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const Program = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/porgrams")
      setPrograms(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getsections()
    // Appointment()
    service()
    Program()
  }, [])

  const signupUser = async e => {
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
  const loginUser = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const token = response.data
      localStorage.tokenUser = token
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const loginDoctor = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login/doctor", userBody)

      const token = response.data
      localStorage.tokenDoctor = token
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const signupCompany = async e => {
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

      await axios.post("http://localhost:5000/api/auth/signup-company", userBody)
      console.log("signup success")
      navigate("/login")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const loginCompany = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login-company", userBody)
      const token = response.data
      localStorage.tokenCompany = token
      console.log("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const Booking = async (e,Appoientmentid)  => {
    e.preventDefault()
    try {
      const form = e.target
      const Appoientmentid = form.elements.time.value
      
      await axios.post(`http://localhost:5000/api/appointments/${Appoientmentid}`)
      form.reset()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  // const logout = () => {
  //   localStorage.removeItem("tokenClinic")
  //   console.log("logout success")
  // }

  const store = {
    signupUser,
    loginUser,
    loginDoctor,
    signupCompany,
    loginCompany,
    Booking,
    sections,
    Appointments,
    services,
    Programs,
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupCompany" element={<SignUpCompany />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginDoctor" element={<LoginDoctor />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/section" element={<C />} />
          <Route path="/:sectionId" element={<CardOne />} />
          <Route path="/healthtools" element={<Health />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ClinicContext.Provider>
    </>
  )
}

export default App
