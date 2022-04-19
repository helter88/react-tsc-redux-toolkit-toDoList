import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
    activityList: string[]
}

const initialState: SliceState= {
    activityList: []
}

const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {state.activityList.push(action.payload)},
        remove: (state, action: PayloadAction<string>) => {state.activityList = state.activityList.filter(item=> item !== action.payload)}
    }
})

export const toDoActions = toDoSlice.actions

export default toDoSlice;