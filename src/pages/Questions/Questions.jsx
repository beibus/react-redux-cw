import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import React, { useState } from 'react';
import QuestionItem from './QuestionItem'
import { useDispatch, useSelector } from 'react-redux';

const Questions = () => {
    const questions = useSelector((store) => store.questions)
    console.log('questions', questions);

    console.log('question', questions[0].answers);
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div>
            <div>
                <h1>Пожалуйста, пройдите тест, ответив на вопросы</h1>
                <h3>Некоторые вопросы могут иметь больше одного правильного ответа</h3>
            </div>
            {questions.map(question => (
                <div key={question.id}>
                    <div>
                        <h2>{question.question}</h2>
                    </div>
                    
                    <div>
                        <h3>{question.answers[0].a}</h3>
                        <h3>{question.answers[1].b}</h3>
                        <h3>{question.answers[2].c}</h3>
                        <h3>{question.answers[3].d}</h3>

                    </div>
                </div>

            ))
            }
        </div>
    )
        }
    


export default Questions