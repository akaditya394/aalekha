import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  user: null | {
    name: string | null | undefined;
    email: string;
    photoURL: string | null | undefined;
  };
}

const initialState: CounterState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
