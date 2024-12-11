import './App.css'
import Login from './screens/Login'

import data from "./assets/data/data.json"
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TimeTable from './screens/TimeTable'

function App() {
  const [teachersLen,setTeacherLen] = useState(data.teachers.length)
  const [teachersNames,setTeachersNames] = useState([])
  useEffect(()=>{
    const arrayNames = []
    for (let i = 0; i < teachersLen; i++) {
      arrayNames.push( data.teachers[i].name)
    }
    setTeachersNames(arrayNames)

  },[])

  return (
    <>
      
    <Routes>
      <Route path='/' element={<Login teachersLen={teachersLen} teachersNames={teachersNames} />} />
      <Route path='/:id' element={<TimeTable/>} />
    </Routes>

      
    </>
  )
}

export default App
