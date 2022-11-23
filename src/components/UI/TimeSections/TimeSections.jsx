import React, { useEffect, useState } from 'react'
import './TimeSections.css'
function TimeSections() {
    const [Days,setDays]=useState()
    const [Hours, setHours]=useState()
    const [Minutes, setMinutes]=useState()
    const [Seconds, setSeconds]=useState()
    const destination=new Date("12/12/2022").getTime()
    const interval=()=>{
        const now = new Date().getTime()
        const diffrence = destination - now
        const Days =Math.floor(diffrence/(1000*60*60*24))
        const Hours =Math.floor(diffrence % (1000*60*60*24) / (1000*60*60))
        const Minutes =Math.floor(diffrence % (1000*60*60) / (1000*60))
        const Seconds =Math.floor(diffrence % (1000*60) / (1000))
        if (destination <0){
            clearInterval()
        }
        else{
            setDays(Days)
            setHours(Hours)
            setMinutes(Minutes)
            setSeconds(Seconds)
        }
    }
    useEffect(()=>{
        setInterval(() => {
            interval()
        }, 1000);
    })
  return (
      <div className='offer_time flex gap-4 flex-wrap items-center justify-center '>
          <div className="timesection day">
            <p>{Days}</p>
            <p>Days</p>
          </div>
          <span>:</span>
          <div className="timesection hour">
              <p>{Hours}</p>
            <p>Hours</p>
          </div>
          <span>:</span>
          <div className="timesection minute">
              <p>{Minutes}</p>
            <p>Minutes</p>
          </div>
          <span>:</span>
          <div className="timesection second">
              <p>{Seconds}</p>
            <p>Seconds</p>
          </div>
      </div>
  )
}

export default TimeSections
