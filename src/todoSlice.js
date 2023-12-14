import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    addTodoText: (state, action) => {
      state.value.push(action.payload)
      console.log(action.payload);
    },
    removeList: (state, action) => {
        
        state.value=state.value.filter((x)=>x.id!==action.payload)
        
    },
    editList: (state, action) => {
        state.value.push(action.payload)
        console.log(action.payload);
      },
  },
})

export const { addTodoText,removeList } = counterSlice.actions

export default counterSlice.reducer