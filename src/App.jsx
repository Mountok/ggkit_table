import './App.css'
import data from "./assets/data/data.json"
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import TimeTable from './screens/TimeTable'
import Present from './screens/Present'

function App() {
  const [teachersLen,setTeacherLen] = useState()
  const [groupsObj,setGroups] = useState(data)
  useEffect(()=>{
      console.log(Object.keys(groupsObj.groups))
  },[])


  return (
    <>
      
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/table' element={<TimeTable/>} />
      <Route path='/present' element={<Present/>} />
    </Routes>

      
    </>
  )
}

export default App
