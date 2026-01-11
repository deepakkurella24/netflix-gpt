import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {

  email: null,
  displayName: null,

};

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    setUser: (state, action) => {
      return { ...state, ...action.payload }; 
    },
    // Action to clear user (logout)
    clearUser: () => initialState,
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export reducer for the store
export default userSlice.reducer;
