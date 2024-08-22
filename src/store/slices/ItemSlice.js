import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo :[]
}

const itemSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addNewItem: (state, action) =>{
            state.push(action.payload)
            console.log(action?.payload);
        },
        deleteSingleItem: (state, action) =>{
            const index = state.indexOf(action.payload);
            if (index !== -1) {
                state.splice(index, 1);
              }
              return state;
              
            //   const {name} = action.payload
            // state.todo=state.todo.filter((item) => item.name !== name)
        },
        clearAllItem: (state, action) =>{
            return []
        },
    },
})


export const {addNewItem, deleteSingleItem, clearAllItem} = itemSlice.actions;
export default itemSlice.reducer;