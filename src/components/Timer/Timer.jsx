import React, { useEffect, useState } from 'react'

import './Timer.css'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval

        if(isActive) {
            interval = setInterval(() => {
                setSeconds(actualSeconds => {
                    if(actualSeconds === 59){
                        setMinutes(minutes => minutes + 1)
                        return 0
                    } else{
                        return actualSeconds + 1
                    }
                })
            }, 1000);
        } else{
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [seconds, minutes, isActive])

    const startTimer = () => {
        setIsActive(true)
    }

    const pauseTimer = () => {
        setIsActive(false)
    }

    const finishTimer = () => {
        minutes >= 10 && setIsActive(false)
    }

    if(minutes >= 10) {
        finishTimer()
    }

    return (
        <div className='timerContainer'>
            <div className='timer'>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
            <div className='buttons'>
                <button className='start' onClick={startTimer}>Meditar</button>
                <button className='pause' onClick={pauseTimer}>Pausar</button>
            </div>
        </div>
    )
}

export default Timer