import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { THEME, type GlobalDataStateType, type ThemeType } from './types';

const initialState: GlobalDataStateType = {
    theme: THEME.DARK,
};

const globalDataSlice = createSlice({
    name: 'globalData',
    initialState,
    reducers: {
        switchTheme(state, action: PayloadAction<ThemeType>) {
            state.theme = action.payload;
        }
    }
});

export const { switchTheme } = globalDataSlice.actions;
export default globalDataSlice.reducer;