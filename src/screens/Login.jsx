import React, { useEffect, useState } from 'react'
import data from "../assets/data/data.json"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigation = useNavigate()
    const [teachers,setTeachers] = useState(data)
    const [currentId,setCurrentId] = useState(+localStorage.getItem("ggkit_table_current_id") || 0)
    
    const redirectToTimeTable = (e) => {
        e.preventDefault()
        localStorage.setItem("ggkit_table_current_id",currentId)
        navigation("/"+currentId)
    }
    
    return (
        <div className='login_back'>

            <div className="login_title">
                <h1>GGKIT <br />Расписание</h1>
                <div className="login_form">
                    <div className='form'>
                        {teachers.teachers.length == 0 ? (
                            <select name="teachers" id="teachers">
                    
                                <option id='teachers' value='0'>Пусто</option>
                            </select>

                        ) : (
                            <select value={currentId} onChange={(e)=>{setCurrentId(e.target.value)}} name="teachers" id="teachers">
                            {
                                teachers.teachers.map((idx,i)=>(
                                    <option id="teachers"  value={i}>{idx.name}</option>
                                ))
}
                            </select>
                        )}
                        
                        <br />
                        <button onClick={(e)=>redirectToTimeTable(e)}>
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login