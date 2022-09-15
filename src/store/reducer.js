import { 
    ADD_QUESTION,
    GET_QUESTIONS
  } from './actions';
  
  const initialState = {
    questions: [
        {id: 1,
            question: 'Какое прозвище футбольного клуба "Ливерпуль"?',
            multiple: false,
            answers: [
                {
                   answer: 'Мерсисайдцы',
                   correct: true
                },
                {
                    answer: 'Аристократы',
                    correct: false
                },
                {
                    answer: 'Драконы',
                    correct: false
                },
                {
                    answer: 'Дрозды',
                    correct: true 
                }
            ]
        },
        {id: 2,
            question: 'Какое прозвище футбольного клуба"Пари-Сен-Жермен"?',
            multiple: false,
            answers: [
                {
                    answer: 'Докеры',
                    correct: false
                 },
                 {
                     answer: 'Короли',
                     correct: false
                 },
                 {
                     answer: 'Канарейки',
                     correct: false
                 },
                 {
                     answer: 'Принцы',
                     correct: true 
                 }
            ]
        },
        {id: 3,
            question: 'Какое прозвище футбольного клуба"Арсенал(Лондон)"?',
            multiple: false,
            answers: [
                {
                    answer: 'Пушечное мясо',
                    correct: false
                 },
                 {
                     answer: 'Пенсионеры',
                     correct: false
                 },
                 {
                     answer: 'Фурия Роха',
                     correct: false
                 },
                 {
                     answer: 'Канониры',
                     correct: true 
                 }
            ]
        },
        {id: 4,
            question: 'Какое прозвище футбольного клуба "Милан"?',
            multiple: false,
            answers: [
                {
                    answer: 'Аморанте',
                    correct: false
                 },
                 {
                     answer: 'Старая гвардия',
                     correct: false
                 },
                 {
                     answer: 'Нерадзури',
                     correct: false
                 },
                 {
                     answer: 'Россонери',
                     correct: true 
                 }
            ]
        },
        {id: 5,
            question: 'Какое прозвище футбольного клуба "Боруссия (Дортмунд)"?',
            multiple: false,
            answers: [
                {
                    answer: 'Баварцы',
                    correct: false
                 },
                 {
                     answer: 'Ириски',
                     correct: false
                 },
                 {
                     answer: 'Мухи',
                     correct: false
                 },
                 {
                     answer: 'Шмели',
                     correct: true 
                 }
            ]
        },
        {id: 6,
            question: 'Какое прозвище футбольного клуба "Реал (Мадрид)"?',
            multiple: false,
            answers: [
                {
                    answer: 'Ласточки',
                    correct: false
                 },
                 {
                     answer: 'Принцы',
                     correct: false
                 },
                 {
                     answer: 'Блондины',
                     correct: false
                 },
                 {
                     answer: 'Сливочные',
                     correct: true 
                 }
            ]
        },
        {id: 7,
            question: 'Какое прозвище футбольного клуба "Интер (Милан)"?',
            multiple: false,
            answers: [
                {
                    answer: 'Синие птицы',
                    correct: false
                 },
                 {
                     answer: 'Россонери',
                     correct: false
                 },
                 {
                     answer: 'Баски',
                     correct: false
                 },
                 {
                     answer: 'Нерадзури',
                     correct: true 
                 }
            ]
        },
        {id: 8,
            question: 'Какое прозвище футбольного клуба "Тоттенхэм Хотспур"?',
            multiple: false,
            answers: [
                {
                    answer: 'Тигры',
                    correct: false
                 },
                 {
                     answer: 'Молотобойцы',
                     correct: false
                 },
                 {
                     answer: 'Южане',
                     correct: false
                 },
                 {
                     answer: 'Шпоры',
                     correct: true 
                 }
            ]
        },
        {id: 9,
            question: 'Какое прозвище футбольного клуба "Барселона"?',
            multiple: false,
            answers: [
                {
                    answer: 'Испанцы',
                    correct: false
                 },
                 {
                     answer: 'Грифы',
                     correct: false
                 },
                 {
                     answer: 'Лесные',
                     correct: false
                 },
                 {
                     answer: 'Каталонцы',
                     correct: true 
                 }
            ]
        },
        {id: 10,
            question: 'Какое прозвище футбольного клуба "Манчестер Юнайтед"?',
            multiple: true,
            answers: [
                {
                    answer: 'Красные дьяволы',
                    correct: true
                 },
                 {
                     answer: 'Скам',
                     correct: true
                 },
                 {
                     answer: 'Мусор',
                     correct: true
                 },
                 {
                     answer: 'Мешки',
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