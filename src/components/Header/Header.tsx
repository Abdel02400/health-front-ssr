import type { ReactElement } from 'react';
import HeaderNavigationLayout from './HeaderNavigationLayout/HeaderNavigationLayout';
import HeaderActionsLayout from './HeaderActionsLayout/HeaderActionsLayout';
import { useScreenSize } from '@client-hooks/useScreenSize';
import { clsx } from '@client-utils/clsx';
import './header.scss';

function Header(): ReactElement {
    const { isHydrated } = useScreenSize();

    return (
        <header className='header container'>
            <div className={clsx('header__content', isHydrated && 'header__content--visible')}>
                <HeaderNavigationLayout />
                <HeaderActionsLayout />
            </div>
        </header>
    );
}

export default Header;