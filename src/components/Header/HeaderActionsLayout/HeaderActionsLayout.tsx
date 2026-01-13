import type { ReactElement } from 'react';
import { useAppSelector } from '@client-store/hook';
import { AUTH_STATUS } from '@client-auth/types/auth';
import HeaderActionsSkeleton from './HeaderActionsSkeleton/HeaderActionsSkeleton';
import AuthenticatedActions from './AuthenticatedActions/AuthenticatedActions';
import UnauthenticatedActions from './UnauthenticatedActions/UnauthenticatedActions';

function HeaderActionsLayout(): ReactElement {
    const { status } = useAppSelector((state) => state.auth);

    if (status === AUTH_STATUS.LOADING) return <HeaderActionsSkeleton />;
    return status === AUTH_STATUS.AUTHENTICATED ? <AuthenticatedActions /> : <UnauthenticatedActions />;
}

export default HeaderActionsLayout;