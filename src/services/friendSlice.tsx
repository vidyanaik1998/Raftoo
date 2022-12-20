import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    friend: []

};

const friendSlice = createSlice({
    name: "friend",
    initialState,
    reducers: {
        addfriend(state: any, action) {
            const result = state?.friend?.filter((item: any) => item.id === action.payload.id)
            if (result.length === 0) {
                state.friend.push(action.payload);
            }
        },

    },
});



export const { addfriend } = friendSlice.actions;
export default friendSlice.reducer;
