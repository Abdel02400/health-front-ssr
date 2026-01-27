import { type ReactElement, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@client-store/hook';
import { setAuthModal } from '@client-store/slices/auth/auth';
import Modal from '@client-components/Modal/Modal';
import { AUTH_MODAL_MODE } from '@client-auth/types/auth';

function UnauthenticatedActions(): ReactElement {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(state => state.auth);

    const handleLogin = useCallback(() => {
        dispatch(setAuthModal({ isModalOpen: true, authModalMode: AUTH_MODAL_MODE.LOGIN }));
    }, [dispatch]);

    const handleRegister = useCallback(() => {
        dispatch(setAuthModal({ isModalOpen: true, authModalMode: AUTH_MODAL_MODE.REGISTER }));
    }, [dispatch]);

    const handleCloseModal = useCallback(() => {
        dispatch(setAuthModal({ isModalOpen: false }));
    }, [dispatch]);

    return (
        <div className='unauthenticated-actions'>
            <button onClick={handleLogin}>Se connecter</button>
            <button onClick={handleRegister}>S'inscrire</button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div>Modal</div>
            </Modal>
        </div>
    );
}

export default UnauthenticatedActions;