import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todoReducer from './todoSlice'
import calculatorReducer from './calculatorSlice'


export const store = configureStore({
  reducer: {


    counter: counterReducer,
    todo: todoReducer,
    calculator: calculatorReducer,



  },
})