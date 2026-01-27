import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@client-store/slices/auth/auth';
import globalDataReducer from '@client-store/slices/globalData/globalData';

const rootReducer = combineReducers({
    auth: authReducer,
    globalData: globalDataReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export const createSSRStore = () => configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];