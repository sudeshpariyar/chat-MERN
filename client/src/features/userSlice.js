import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    name: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.user.id = payload.data.id;
      state.user.name = payload.data.name;
    },
  },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
