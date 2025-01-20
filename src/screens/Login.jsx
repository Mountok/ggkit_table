import React, { useEffect, useState } from 'react'
import data from "../assets/data/data.json"
import { useNavigate } from 'react-router-dom'
import { MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';

const Login = () => {
    const navigate = useNavigate()
    const [groups, setGroups] = useState(Object.keys(data.groups))
    const [currentGroup,setCurrentGroup] = useState(localStorage.getItem("ggkit_time_tsble_s") || "")
    useEffect(()=>{
        console.log(groups)
    })
    const redirectToTimeTable = (e) => {
        navigate("/table?id="+currentGroup)
    }

    const handleChange = (e) => {
        e.preventDefault()
        localStorage.setItem("ggkit_time_tsble_s",e.target.value)
        setCurrentGroup(e.target.value)
    }

    return (
        <div className='login_back'>

            <div className="login_title">
                <h1 
                onClick={()=>navigate("/present")}
                >GGKIT <br />Расписание</h1>
                <div className="login_form">
                    <div className='form'>
                        {groups.length == 0 ? (
                            <FormControl fullWidth>

                                <InputLabel id="demo-simple-select-label">Выберите группу</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={0}
                                    label="Выберите преподователя"
                                >
                                    <MenuItem value={0}>Пусто</MenuItem>
                                </Select>
                            </FormControl>

                        ) : (

                            <FormControl fullWidth>

                                <InputLabel id="demo-simple-select-label">Выберите группу</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={currentGroup}
                                    label="Выберите преподователя"
                                    onChange={(e) => handleChange(e)}
                                >
                                    <MenuItem value="">
                                        <em>Не выбрано</em>
                                    </MenuItem>
                                    {
                                        groups.map((i,idx) => (
                                            <MenuItem key={idx} value={idx}>{i.split("-")[1]+"-"+i.split("-")[2]}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        )}

                        <br />
                        <Button size='large' onClick={(e) => redirectToTimeTable(e)} variant="outlined">Войти</Button>
                        <p className='disclamer'>приложение находиться на стадии тестирования <br /> Перепроверяйте расписание))</p>
                        <a  className='errorLink' href="https://docs.google.com/forms/d/e/1FAIpQLSeg91imAThjXbrDEi3E1ppIawd0B05ZX1N5gXRx-TCUqUljcA/viewform?usp=header">
                        Возникла проблема? напишите.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login