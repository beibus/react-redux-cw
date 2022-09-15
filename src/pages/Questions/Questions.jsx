import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Form, Input, Col, Row, Statistic } from 'antd';
import 'antd/dist/antd.css';
import './Questions.css'
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60; // Moment is also OK

const Questions = () => {
  const questions = useSelector((store) => store.questions);
  const [values, setValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [user, setUser] = useState(null)
  const [timeOut, setTimeOut] = useState(null)
  const [input, setInput] = useState(null)

  const onTimerFinish = () => {
    console.log('finished!');
    showModal()
    setTimeOut(true)
  };

  const handleInput = () => {
    setInput(true)
    console.log('input', input);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    setUser(values?.username)
    console.log('user', user);
    setInput(false)
    console.log('false input', input);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    calculateResults()
    setIsModalOpen(true)
    setTimeOut(false)
    setInput(null)
    setUser(null)

  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const calculateResults = () => {
    let correct = 0;
    Object.values(values).forEach((value) => {
      if (value === 'true') {
        console.log(value);
        correct++;
      }
    });
    setCorrectAnswers(correct);
    console.log(correct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending form with values:', values);
    calculateResults();
  };

  const title = timeOut ? 'Ваше время вышло' : 'Вы завершили тест!'

  return (
    <div className='questions-container'>
      <div className='questions-wrapper'>
        {!user &&

          <div className='header-wrapper'>
            <Form className='form-wrapper'
              name='basic' labelCol={{ span: 8, }} wrapperCol={{ span: 50, }}
              initialValues={{ remember: true, }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                className='username-wrapper'
                name='username'

                onChange={handleInput}
                rules={[
                  {
                    required: true,
                    message: 'Введите ваше имя для прохождения теста!',
                  },
                ]}
              >
                <Input
                  className='input-wrapper'
                  placeholder="Введите имя чтобы продолжить" />
              </Form.Item>
              {input &&
                <Form.Item
                  className='button-wrapper'
                  wrapperCol={{
                    offset: 8,
                    span: 8,
                  }}
                >
                  <Button type='primary' htmlType='submit'>
                    Пройти тест
                  </Button>
                </Form.Item>
              }
            </Form>
          </div>
        }

        {user &&
          <div className='form-block'>
            <div className='message-wrapper'>
              <div className='timer-wrapper'>
                <Row gutter={16}>
                  <Col span={12}>
                    <Countdown title='Countdown' value={deadline} onFinish={onTimerFinish} />
                  </Col>
                </Row>
              </div>
              <h1>Знаете ли вы прозвища футбольных клубов?</h1>
              <h3>Некоторые вопросы могут иметь больше одного правильного ответа</h3>
            </div>

            <div className='form-wrapper'>
              <form onSubmit={handleSubmit}>
                {questions.map((question) => {
                  return question.multiple ?
                    <div className='question-wrapper' key={question.id}>
                      <div className='question-title'>
                        {question.question}
                      </div>
                      <div className='question-options'>
                        <div className='question-option'>
                          <input
                            type='checkbox'
                            id={question.id}
                            name={question.id}
                            value={question.answers[0].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[0].answer}>
                            {question.answers[0].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='checkbox'
                            id={question.id}
                            name={question.id}
                            value={question.answers[1].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[1].answer}>
                            {question.answers[1].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='checkbox'
                            id={question.id}
                            name={question.id}
                            value={question.answers[2].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[2].answer}>
                            {question.answers[2].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='checkbox'
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
                    :
                    <div className='question-wrapper' key={question.id}>
                      <div className='question-title'>
                        {question.question}
                      </div>
                      <div className='question-options'>
                        <div className='question-option'>
                          <input
                            type='radio'
                            id={question.id}
                            name={question.id}
                            value={question.answers[0].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[0].answer}>
                            {question.answers[0].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='radio'
                            id={question.id}
                            name={question.id}
                            value={question.answers[1].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[1].answer}>
                            {question.answers[1].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='radio'
                            id={question.id}
                            name={question.id}
                            value={question.answers[2].correct}
                            onChange={handleChange}
                          />
                          <label htmlFor={question.answers[2].answer}>
                            {question.answers[2].answer}
                          </label>
                        </div>
                        <div className='question-option'>
                          <input
                            type='radio'
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
                }
                )}

                <button type='submit' onClick={showModal}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        }
        <Modal
          title={title}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <div>
            <h2>
              {user} Ваш результат:{correctAnswers} из {questions.length}
            </h2>
            <h2>
              Успешность теста:
              {Math.floor((correctAnswers / questions.length) * 100)}%
            </h2>
          </div>
        </Modal>

      </div>
    </div>
  );
};

export default Questions;
