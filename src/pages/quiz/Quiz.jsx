import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../api/Api'
import QuestionCard from '../../component/questionCard/QuestionCard'
import './quiz.css'
import Modal from '../../component/modal/Modal'

export default function Quiz() {

  const { difficulty, amount } = useParams()
  let [questionData, setQuestionData] = useState([])
  
  let [score, setScore] = useState(0)
  let [count, setCount] = useState(0)
  let [modal, setModal] = useState(false)


  useEffect(() => {
    let getData = async () => {
      let data = await api.fetchQuizData(difficulty, amount)
      setQuestionData(data)
    }
    getData()
  }, [])

  console.log(questionData, "questionData");

  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score}/> : <QuestionCard
          questionData={questionData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
        />
      }

    </div>
  )
}
