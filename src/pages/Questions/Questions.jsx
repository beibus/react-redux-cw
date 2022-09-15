import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'antd'
import 'antd/dist/antd.css'

const Questions = () => {
  const questions = useSelector((store) => store.questions)
  const [values, setValues] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const calculateResults = () => {
    let correct = 0
    Object.values(values).forEach((value) => {
      if (value === 'true') {
        console.log(value)
        correct++
      }
    })
    setCorrectAnswers(correct)
    console.log(correct)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending form with values:', values)
    calculateResults()
  }

  console.log('questions', questions)
  console.log('question', questions[0].answers)

  return (
        <div>
            <div>
                <h1>Пожалуйста, пройдите тест, ответив на вопросы</h1>
                <h3>Некоторые вопросы могут иметь больше одного правильного ответа</h3>
            </div>
            <form onSubmit={handleSubmit}>
                {questions.map((question) => (
                    <div key={question.id}>
                        <div className="question-title">
                            <h2>{question.question}</h2>
                        </div>

                        <div className="question-options">
                            <div className="question-option">
                                <input
                                    type="radio"
                                    id={question.id}
                                    name={question.id}
                                    value={question.answers[0].correct}
                                    onChange={handleChange}
                                />
                                <label htmlFor={question.answers[0].answer}>
                                    {question.answers[0].answer}
                                </label>
                            </div>
                            <div className="question-option">
                                <input
                                    type="radio"
                                    id={question.id}
                                    name={question.id}
                                    value={question.answers[1].correct}
                                    onChange={handleChange}
                                />
                                <label htmlFor={question.answers[1].answer}>
                                    {question.answers[1].answer}
                                </label>
                            </div>
                            <div className="question-option">
                                <input
                                    type="radio"
                                    id={question.id}
                                    name={question.id}
                                    value={question.answers[2].correct}
                                    onChange={handleChange}
                                />
                                <label htmlFor={question.answers[2].answer}>
                                    {question.answers[2].answer}
                                </label>
                            </div>
                            <div className="question-option">
                                <input
                                    type="radio"
                                    id={question.id}
                                    name={question.id}
                                    value={question.answers[3].correct}
                                    onChange={handleChange}
                                />
                                <label htmlFor={question.answers[3].answer}>
                                    {question.answers[3].answer}
                                </label>
                            </div>
                        </div>
                    </div>
                ))}

                <button type="submit" onClick={showModal}>
                    Submit
                </button>
            </form>
            <Modal
                title="Ваш результат"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <h2>Результат:{correctAnswers} из {questions.length}</h2>
                    <h2>Успешность теста:{Math.floor((correctAnswers / questions.length) * 100)}%</h2>
                </div>
            </Modal>
        </div>
  )
}

export default Questions
