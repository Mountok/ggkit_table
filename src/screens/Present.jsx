import React from 'react'
import Snowfall from 'react-snowfall'

const Present = () => {
  return (
    <div className="present">
        <Snowfall/>
        <p className='up_qr'>Онлайн расписание</p>
        <img width="250" src="/qr_rasp.png" alt="#" />
        <p className='under_qr'>Сканируй и узнай свое расписание </p>
    </div>
  )
}

export default Present