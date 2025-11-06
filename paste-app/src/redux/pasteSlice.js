import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("paste created successfully");
    },
    updateToPaste: (state, action) => {},
    resetToPaste: (state, action) => {},
    removeFromPaste: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetToPaste, removeFromPaste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
