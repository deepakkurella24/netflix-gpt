import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  email: null,
  displayName: null,

};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    setUser: (state, action) => {
      return { ...state, ...action.payload }; 
    },

    clearUser: () => initialState,
  },
});


export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
