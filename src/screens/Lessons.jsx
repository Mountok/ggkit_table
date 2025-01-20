import React, { useState } from 'react'
import { PiDoorOpen } from "react-icons/pi";
import { PiDoorOpenBold } from "react-icons/pi";
import { LuBookType } from "react-icons/lu";
import { LuBookText } from "react-icons/lu";

const Lessons = ({id,idM, lesson,teacher,ltype,audience}) => {
  const [lType,setLType] =useState(ltype.split("(")[1].split(")")[0])
  console.log(id)
  const numsObj = {
    2: 1,
    4: 2,
    6: 3,
    8: 4,
    10: 5,
    12: 6,
    14: 7,
    16: 8,
  }
  return (
    <div 
    className='lessons'
    >
          <div className={"" == "Окно" ? "lesson empty" : "lesson"} style={{
            animationName: "slowupLesson",
            animationTimingFunction: "ease-in-out",
            animationDelay: "0." + (numsObj[id]*2) + "s",
            animationDuration: "1s",
            animationFillMode: "forwards",
          }}>
            <div className="lesson_num">
              <p>{numsObj[id]}</p>
            </div>
            <div className="lesson_info" 
            style={{
              animationName: "slowlight",
              animationTimingFunction: "linear",
              animationDelay: "0." + (numsObj[id]) + "s",
              animationDuration: "1s",
              animationFillMode: "forwards",
            }}>
              <div>
                <p><LuBookText /> Преподователь: <span>{teacher}</span></p>
                <p className='lesson_name'>{lesson}</p>
              </div>
              <div>
                <p><LuBookType />: {lType}</p>
                <p><PiDoorOpenBold />: {audience}</p>
              </div>
            </div>
          </div>

    </div>
  )
}

export default Lessons