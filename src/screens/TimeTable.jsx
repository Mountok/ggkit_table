import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import dataJSON from "../assets/data/data.json"
import WeekDay from './WeekDay'
import Lessons from './Lessons'
import {AiOutlineArrowLeft} from "react-icons/ai"



const TimeTable = () => {
    const location = useLocation()
    const [groupId,setGroupId] = useState(location.search.split("=")[1])
    const [groupsArray,setGroupsArray] = useState(Object.keys(dataJSON.groups))
    const [groupName,setGroupName] = useState(groupsArray[groupId])
    const [groupWeek,setGroupWeek] = useState(dataJSON.groups[groupName])
    const [weekLen,setWeekLen] = useState(Object.keys(groupWeek))
    const date = new Date
    const [currentDateFull, setCurrentDateFull] = useState(date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear())
    const [currentDay,setCurrentDay] = useState(date.getDay())
    const weekDayObj = {
      1: "Понедельник",
      2: "Вторник",
      3: "Среда",
      4: "Четверг",
      5: "Пятница",
      6: "Суббота",
  }
    const [currentWeekDay,setCurrentWeekDay] = useState(weekDayObj[currentDay])
    const [currentWeekLessonsArray,setCurrentWeekLessonsArray] = useState(groupWeek[currentWeekDay])


    const navigation = useNavigate()
    const movePrev = (e)=> {
      e.preventDefault()
      navigation("/")
    }



   



    useEffect(()=>{
      setGroupName(groupName)
      setGroupWeek(groupWeek)
      setWeekLen(weekLen)
    },[])

    useEffect(()=>{
      setCurrentWeekLessonsArray(null)
      setTimeout(()=>{setCurrentWeekLessonsArray(groupWeek[currentWeekDay])},150)
      

    },[currentWeekDay])
  return (
    <div className='timetable'>

      <header className="tt_header">
        
        <button onClick={(e)=>movePrev(e)} className='tt_header_prev'>
          <AiOutlineArrowLeft/>
        </button>
        <p className='tt_title'>
          {groupName}
        </p>
        <div>
        {
          weekLen.map((el,idx,arr)=>(
            <WeekDay
            key={idx} 
            currentWeekDay={currentWeekDay}
            setCurrentWeekDay={setCurrentWeekDay}
            dayNum={currentDay}
            id={idx+1}
            board={groupWeek}
          />
          ),[])
        }
        </div>
        <p
        className='current_date'>{currentDateFull}</p>


     
      </header>  

      <main className='tt_main'>
        {
          currentWeekLessonsArray != null ? (
          currentWeekLessonsArray.map((el,idx,arr)=>(
            idx % 2 != 0 &&
            <Lessons key={idx} 
            id={idx+1}
            idM={idx}
            lessonArray={el} 
            lesson={el[1]}
            teacher={el[3]}
            ltype={el[2]}
            audience={el[4]}
            />
          ))
        ) : (
          null
        )
        }
        
      </main>

    </div>
  )
}

export default TimeTable