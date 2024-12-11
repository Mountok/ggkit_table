import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import dataJSON from "../assets/data/data.json"
import WeekDay from './WeekDay'
import Lessons from './Lessons'
const TimeTable = () => {
    const location = useLocation()
    const [teacher,setTeacher] = useState(location.pathname.split("/")[1])
    const [data,setData] = useState(dataJSON.teachers[+teacher])
    const date = new Date
    const [currentDate, setCurrentDate] = useState()
    const [currentDateFull, setCurrentDateFull] = useState()
    const [currentLessons, setCurrentLessons] = useState([])
    const [meeting,setMetting] = useState()
    useEffect(()=>{
        setCurrentDate(date.getDate())
        setCurrentDateFull(date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear())
        if (date.getHours() > 3 && date.getHours() < 12 ) {
          setMetting("Доброе утро!")
        } else if (date.getHours() > 11 && date.getHours() < 17) {
          setMetting("Добрый день!")

        } else if (date.getHours() > 16 && date.getHours() < 20) {
          setMetting("Добрый вечер!")

        } else {
          setMetting("Доброй ночи!")
        }
    },[])

    useEffect(()=>{
    },[currentLessons])
    
  return (
    <div className='timetable'>

      <header className="tt_header">
        <p className='meeting'>{meeting} <br /> <span>{data.name}</span></p>
        <div>
        {
          data.board.map((el,idx,arr)=>(
            <WeekDay 
            id={idx}
            board={data.board[idx]}
            setCurrentLessons={setCurrentLessons}
            setCurrentDate={setCurrentDate}
          currentDate={currentDate}
          day={data.board[idx].date}
          weekday={data.board[idx].weekday}

          />
          ),[])
        }
        </div>
        <p onClick={(e)=> setCurrentDate(date.getDate())}
        className='current_date'>{currentDateFull}</p>


     
      </header>  

      <main className='tt_main'>
        {currentLessons.length != 0 && <Lessons boardLesson={currentLessons.lessons}/>}
        
      </main>

    </div>
  )
}

export default TimeTable