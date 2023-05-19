import { createSlice } from "@reduxjs/toolkit";

export interface uiState {
  isLoading: boolean;
  isSidebarOpen: boolean;
}

const initialState: uiState = {
  isLoading: false,
  isSidebarOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleLoading, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
