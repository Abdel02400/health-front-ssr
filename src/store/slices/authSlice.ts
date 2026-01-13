import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { 
    AUTH_STATUS,
    type AuthStateType,
    type AuthStatusPayloadType,
    type AuthModalPayloadType
} from '@client-auth/types/auth';

const initialState: AuthStateType = {
    status: AUTH_STATUS.LOADING,
    isModalOpen: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<AuthStatusPayloadType>) {
            return { ...state, ...action.payload };
        },
        setAuthModal(state, action: PayloadAction<AuthModalPayloadType>) {
            return { ...state, ...action.payload };
        }
    }
});

export const {
    setAuthStatus,
    setAuthModal
} = authSlice.actions;

export default authSlice.reducer;