import React, { useState } from 'react'
import Dropdown from '../../component/dropdown/Dropdown'
import './İntorduce.css'
import {useNavigate } from 'react-router-dom'

const İntorduce = () => {
    let difficult = ["easy", "medium", "hard"];
    let [difficultChange, setDiffucultchange] = useState("")
    const navigate = useNavigate()
    let TOTAL_QUESTİON = 10

    let startQuiz = () => {
        if(difficultChange){
            navigate(`/quiz/${difficultChange}/${TOTAL_QUESTİON}`)
        }
    }

  return (
    <div className='intorduce'>
        <div className="intorduce-container">
           <h1>Quiz</h1>
            <Dropdown data={difficult} setDiffucultchange={setDiffucultchange}/>
            <div onClick={startQuiz} className='intorduce-btn'> Quiz e başla </div>
        </div>
    </div>
  )
}

export default İntorduce