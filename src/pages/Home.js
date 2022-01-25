import axios from "axios"
import { useEffect, useState } from "react"
import Back from "../components/Backgraund"
import Footer from "../components/Footer"

function Home() {
  // const [covids, setCovid] = useState([])
  // const Covid = async () => {
  //   try {
  //     const response = await axios.get(`https://covid-news2.p.rapidapi.com/news/a1`, {
  //       headers: {
  //         "x-rapidapi-host": "covid-news2.p.rapidapi.com",
  //         "x-rapidapi-key": "8d61602734mshb3e6e5419010efbp1470b9jsn39c7789edc0",
  //       },
  //     })
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // Covid()
  // useEffect(() => {
  //   setCovid()
  // }, [])

  return (
    <>
      <Back />
      
    </>
  )
}

export default Home
