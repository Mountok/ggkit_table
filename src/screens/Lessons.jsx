import React from 'react'
import { PiDoorOpen } from "react-icons/pi";
import { PiDoorOpenBold } from "react-icons/pi";
import { LuBookType } from "react-icons/lu";
import { LuBookText } from "react-icons/lu";

const Lessons = ({ boardLesson }) => {
  console.log(boardLesson)
  return (
    <div className='lessons'>
      {
        boardLesson.map((el, idx, array) => (
          <div className={el.lesson_name == "Окно" ? "lesson empty" : "lesson"} style={{
            animationName: "slowupLesson",
            animationTimingFunction: "linear",
            animationDelay: "0." + (idx * 2) + "s",
            animationDuration: "1s",
            animationFillMode: "forwards",
          }}>
            <div className="lesson_num">
              <p>{idx+1}</p>
            </div>
            <div className="lesson_info">
              <div>
                <p><LuBookText /> - Группа: <span> {el.group}</span></p>
                <p>{el.lesson_name}</p>
              </div>
              <div>
                <p><LuBookType />: {el.lesson_type}</p>
                <p><PiDoorOpenBold />:  {el.Audience}</p>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Lessons