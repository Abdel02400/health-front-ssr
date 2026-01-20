import type { ReactElement } from 'react';
import HeaderNavigationLayout from './HeaderNavigationLayout/HeaderNavigationLayout';
import HeaderActionsLayout from './HeaderActionsLayout/HeaderActionsLayout';
import './header.scss';

function Header(): ReactElement {
    return (
        <div className='header container'>
            <div className='header__content'>
                <HeaderNavigationLayout />
                <HeaderActionsLayout />
            </div>
        </div>
    );
}

export default Header;