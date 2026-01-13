type IsModalOpenType = boolean;

export const AUTH_STATUS = {
    LOADING: 'loading',
    AUTHENTICATED: 'authenticated',
    UNAUTHENTICATED: 'unauthenticated',
} as const;
type AuthStatus = typeof AUTH_STATUS[keyof typeof AUTH_STATUS];

export const AUTH_MODAL_MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
} as const;
type AuthModalMode = typeof AUTH_MODAL_MODE[keyof typeof AUTH_MODAL_MODE];

export type AuthStateType = {
    status: AuthStatus;
    isModalOpen: IsModalOpenType;
    authModalMode?: AuthModalMode;
};

export type AuthStatusPayloadType = {
    status: AuthStatus;
    isModalOpen?: IsModalOpenType;
}

export type AuthModalPayloadType = {
    isModalOpen: IsModalOpenType;
    authModalMode?: AuthModalMode;
}