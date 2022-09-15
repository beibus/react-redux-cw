import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'Question text 1',
            multiple: true,
            answers: [
                {
                   answer: 'Option A',
                   correct: true
                },
                {
                    answer: 'Option B',
                    correct: false
                },
                {
                    answer: 'Option C',
                    correct: false
                },
                {
                    answer: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 2,
            question: 'Question text 2',
            multiple: true,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 3,
            question: 'Question text 3',
            multiple: true,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 4,
            question: 'Question text 4',
            multiple: true,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 5,
            question: 'Question text 5',
            multiple: true,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 6,
            question: 'Question text 6',
            multiple: false,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 7,
            question: 'Question text 7',
            multiple: false,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 8,
            question: 'Question text 8',
            multiple: false,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 9,
            question: 'Question text 9',
            multiple: true,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        },
        {id: 10,
            question: 'Question text 10',
            multiple: false,

            answers: [
                {
                    answer: 'Option A',
                    correct: false
                 },
                 {
                     answer: 'Option B',
                     correct: false
                 },
                 {
                     answer: 'Option C',
                     correct: false
                 },
                 {
                     answer: 'Option D',
                     correct: true 
                 }
            ]

        }
    ]
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_QUESTIONS: 
        return {
          ...state,
        }

      case ADD_QUESTION: 
        return {
          ...state,
          questions: [...state.questions, action.payloaanswer] 
        }
      default:
        return state;
    }
  }