import React, { useState } from 'react'

const WeekDay = ({board,setCurrentLessons,id,currentDate, setCurrentDate,day,weekday,allday}) => {
    const weekDayObj = {
        "Понедельник": "П",
        "Вторник": "В",
        "Среда": "С",
        "Четверг": "Ч",
        "Пятница": "П",
        "Суббота": "С",
    }
    const [dayNum, setDayNum] = useState(day.split("."))
    if (currentDate == dayNum[0]) {
        setCurrentLessons(board)

    }
  return ( 
    <div onClick={(e) => setCurrentDate(dayNum[0])}  className={currentDate == dayNum[0] ? 'week_day focus' : "week_day" }>
        <p className='week_day_num'>
            {dayNum[0]}
        </p>
        <p className='week_day_name'>
            {weekDayObj[weekday]}
        </p>
    </div>
  )
}

export default WeekDay