// src/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  role: "user" | "chef" | "admin" | null;
}

const initialState: UserState = {
  name: null,
  role: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.name = null;
      state.role = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
