import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRomm: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRomm } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
