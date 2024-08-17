import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    adduser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeuser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    checkUser: (state) => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        state.user = JSON.parse(storedUser);
        console.log("User found in localStorage:", state.user); // Debugging log
      }
    },
  },
});

export const { adduser, removeuser, checkUser } = userSlice.actions;
export default userSlice.reducer;
