import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addTodoText: (state, action) => {
        switch (action.payload.oper) {
            case "+":
                state.value =  action.payload.num1 + action.payload.num2;
                break;
            case "-":
                
                state.value = action.payload.num1 - action.payload.num2;
                break;    
                case "/":
                
                state.value = action.payload.num1 /action.payload.num2;
                break;
                case "*":
                
                state.value = action.payload.num1 * action.payload.num2;
                break;    
                default:
                
                
                    break;
                }
            },
  },
});

export const { addTodoText, total } = calculatorSlice.actions;

export default calculatorSlice.reducer;
