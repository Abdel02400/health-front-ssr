import { type ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '@client-store/hook';
import { setAuthModal } from '@client-store/slices/authSlice';
import Modal from '@client-components/Modal/Modal';
import { AUTH_MODAL_MODE } from '@client-auth/types/auth';

function UnauthenticatedActions(): ReactElement {
    const dispatch = useAppDispatch();
    const { isModalOpen } = useAppSelector(state => state.auth);

    return (
        <div className='unauthenticated-actions'>
            <button onClick={() => dispatch(setAuthModal({ isModalOpen: true, authModalMode: AUTH_MODAL_MODE.LOGIN }))}>Se connecter</button>
            <button onClick={() => dispatch(setAuthModal({ isModalOpen: true, authModalMode: AUTH_MODAL_MODE.LOGIN }))}>S'inscrire</button>
            <Modal isOpen={isModalOpen} onClose={() => dispatch(setAuthModal({ isModalOpen: false }))}>
                <div>Modal</div>
            </Modal>
        </div>
    );
}

export default UnauthenticatedActions;