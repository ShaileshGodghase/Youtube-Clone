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
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleLoading, toggleSidebar, closeSidebar } = uiSlice.actions;
export default uiSlice.reducer;
