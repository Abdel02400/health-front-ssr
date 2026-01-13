import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '@client-store/slices/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
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