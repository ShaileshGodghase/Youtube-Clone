import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface uiState{
    isLoading: boolean;
}

const initialState: uiState = {
    isLoading: false,
 };

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.isLoading = !state.isLoading;
        }
    }
});

export const { toggleLoading } = uiSlice.actions;
export default uiSlice.reducer;