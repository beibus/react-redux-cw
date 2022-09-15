import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'Question text 1',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 2,
            question: 'Question text 2',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 3,
            question: 'Question text 3',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 4,
            question: 'Question text 4',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 5,
            question: 'Question text 5',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 6,
            question: 'Question text 6',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 7,
            question: 'Question text 7',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 8,
            question: 'Question text 8',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 9,
            question: 'Question text 9',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
                    correct: true 
                }
            ]

        },
        {id: 10,
            question: 'Question text 10',
            answers: [
                {
                   a: 'Option A',
                   correct: false
                },
                {
                    b: 'Option B',
                    correct: false
                },
                {
                    c: 'Option C',
                    correct: false
                },
                {
                    d: 'Option D',
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
          questions: [...state.questions, action.payload] 
        }
      default:
        return state;
    }
  }