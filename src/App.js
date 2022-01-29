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
import { useEffect, useState } from "react"
import AboutUs from "./pages/AboutUs"
import CardOne from "./pages/Cardone"
import Health from "./pages/HealthTools"
import Profile from "./pages/Profile"
import C from "./pages/Card"
import OneAppoientment from "./pages/OneAppoinetment"
import ProfileDoctor from "./pages/ProfileDoctor"

function App() {
  const [sections, setSections] = useState([])
  const [Appointments, setAppointments] = useState([])
  const [services, setServices] = useState([])
  const [Analyzings, setAnlyzing] = useState([])
  const [bloods, setBlood] = useState([])
  const [MRNS, setMRN] = useState([])
  const [Rays, setRays] = useState([])
  const [vaccines, setVaccines] = useState([])
  const [medicineRecords, setmedicineRecords] = useState([])
  const [Profiles, setProfile] = useState(null)
  const [ProfilesDoctor, setProfileDoctor] = useState(null)

  const navigate = useNavigate()
  const getsections = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clinicDepartments")
      setSections(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const Appointment = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments")
      setAppointments(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const service = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/services")
      setServices(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/user/profile/user", {
        headers: {
          Authorization: localStorage.tokenUser,
        },
      })
      setProfile(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getProfileDoctor = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/doctors/profile", {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      setProfileDoctor(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getAnlyzings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/analyzings")
      setAnlyzing(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getBloods = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/bloods")
      setBlood(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getMRNS = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/madacalfiles")
      setMRN(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getRays = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/rays")
      setRays(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getVaccines = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/vaccines")
      setVaccines(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const getmedicineRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/medicineRecords")
      setmedicineRecords(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getsections()
    Appointment()
    service()
    getAnlyzings()
    getBloods()
    getMRNS()
    getRays()
    getVaccines()
    getmedicineRecords()
    if (localStorage.tokenUser) getProfile()
    if (localStorage.tokenDoctor) getProfileDoctor()
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
      const tokenUser = response.data
      localStorage.tokenUser = tokenUser
      console.log("login success")
      navigate("/")
      getProfile()
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
      const tokenDoctor = response.data
      localStorage.tokenDoctor = tokenDoctor
      console.log("login success")
      navigate("/")
      getProfileDoctor()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const booking = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const Appoientmentid = form.elements.date.value
      await axios.post(
        `http://localhost:5000/api/appointments/${Appoientmentid}`,
        {},
        {
          headers: {
            Authorization: localStorage.tokenUser,
          },
        }
      )
      getProfile()
      getProfileDoctor()
      navigate("/profile")
      toast.success()
      form.reset()
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenUser")
    localStorage.removeItem("tokenDoctor")
    getProfile()
    getProfileDoctor()
    setProfile(null)
    setProfileDoctor(null)
    console.log("logout success")
  }
  const addBlood = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const Bloodbody = {
        bloodType: form.elements.bloodType.value,
        bloodDonor: form.elements.bloodDonor.value,
      }
      await axios.post(`http://localhost:5000/api/bloods/${AppoientmentId}`, Bloodbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addAnlyzing = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const Anlyzingbody = {
        analysisName: form.elements.analysisName.value,
        value: form.elements.value.value,
        normalValue: form.elements.normalValue.value,
        explanation: form.elements.explanation.value,
      }
      await axios.post(`http://localhost:5000/api/analyzings/${AppoientmentId}`, Anlyzingbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addAppoientment = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const Appoientmentbody = {
        time: form.elements.time.value,
        date: form.elements.date.value,
      }
      await axios.post(`http://localhost:5000/api/appointments`, Appoientmentbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      getsections()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addmedicine = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const medicinebody = {
        name: form.elements.name.value,
        strength: form.elements.strength.value,
        dosageForm: form.elements.dosageForm.value,
        routeOfAdministration: form.elements.routeOfAdministration.value,
        packageSize: form.elements.packageSize.value,
      }
      await axios.post(`http://localhost:5000/api/medicineRecords/${AppoientmentId}`, medicinebody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addMRN = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const MRNbody = {
        gender: form.elements.gender.value,
        nationality: form.elements.nationality.value,
        bloodType: form.elements.bloodType.value,
        sensitivity: form.elements.sensitivity.value,
        mobilePhone: form.elements.mobilePhone.value,
        fileNumber: form.elements.fileNumber.value,
        age: form.elements.age.value,
      }
      await axios.post(`http://localhost:5000/api/madacalfiles/${AppoientmentId}`, MRNbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addRays = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const Raysbody = {
        rayName: form.elements.rayName.value,
        rayImage: form.elements.rayImage.value,
      }
      await axios.post(`http://localhost:5000/api/rays/${AppoientmentId}`, Raysbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const addVaccine = async (e, AppoientmentId) => {
    e.preventDefault()
    try {
      const form = e.target
      const vaccinesbody = {
        vaccineType: form.elements.vaccineType.value,
        doseDate: form.elements.doseDate.value,
      }
      await axios.post(`http://localhost:5000/api/vaccines/${AppoientmentId}`, vaccinesbody, {
        headers: {
          Authorization: localStorage.tokenDoctor,
        },
      })
      getProfile()
      toast.success()
      console.log("done")
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    signupUser,
    loginUser,
    loginDoctor,
    logout,
    booking,
    addBlood,
    addAnlyzing,
    addmedicine,
    addMRN,
    addVaccine,
    addRays,
    addAppoientment,
    getmedicineRecords,
    sections,
    Appointments,
    medicineRecords,
    services,
    Profiles,
    ProfilesDoctor,
    Analyzings,
    bloods,
    MRNS,
    Rays,
    vaccines,
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
          <Route path="/login" element={<Login />} />
          <Route path="/loginDoctor" element={<LoginDoctor />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/section" element={<C />} />
          <Route path="/:sectionId" element={<CardOne />} />
          <Route path="/appoientent/:AppoientmentId" element={<OneAppoientment />} />
          <Route path="/healthtools" element={<Health />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileDoctor" element={<ProfileDoctor />} />
        </Routes>
      </ClinicContext.Provider>
    </>
  )
}

export default App
