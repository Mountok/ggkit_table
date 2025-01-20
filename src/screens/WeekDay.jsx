import React, { useEffect, useState } from 'react'
import {dates} from "../assets/data/data.json"
const WeekDay = ({setCurrentWeekDay,currentWeekDay,id,board,dayNum}) => {
    const weekDayObj = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
    }
    console.log(dates)
    const weekDayObjSmall = {
        "Понедельник": "П",
        "Вторник": "В",
        "Среда": "С",
        "Четверг": "Ч",
        "Пятница":"П",
        "Суббота":"С",
    }
    
    const [day, setDay] = useState(board)
    const [weekDay,setWeekDay] = useState(dates[id-1])
    
  return ( 
    <div 
    
    onClick={()=>setCurrentWeekDay(weekDayObj[id])}  
    className={(currentWeekDay == weekDayObj[id]) ? "week_day focus" : "week_day"}
    >   
    <p>
        {weekDay}
    </p>
        <p className='week_day_name'>
            {weekDayObjSmall[weekDayObj[id]]}
        </p>
    </div>
  )
}

export default WeekDay