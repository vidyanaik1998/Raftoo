import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  profile: [{ id: 1, img: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png', fullname: 'Sameer', phonenumber: 3523456789, friend: 'Aayushi' },
  { id: 2, img: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png', fullname: 'Aayushi', phonenumber: 4223456789, friend: 'Bhaskar' },
  { id: 3, img: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png', fullname: 'Bhaskar ', phonenumber: 1623456789, friend: 'Shanti Kumar Saha' },
  { id: 4, img: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png', fullname: 'Shanti Kumar Saha', phonenumber: 9923456789, friend: 'Kamalnath Sharma' },
  { id: 5, img: 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png', fullname: 'Kamalnath Sharma', phonenumber: 9923456789, friend: 'Sameer' }]

};

const fooditemSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    add(state, action) {
      // state.fooditem.push(action.payload);
      state.profile.push(action.payload);

    },

  },
});



export const { add } = fooditemSlice.actions;
export default fooditemSlice.reducer;
