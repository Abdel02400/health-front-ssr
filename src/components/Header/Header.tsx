import type { ReactElement } from 'react';
import HeaderNavigationLayout from './HeaderNavigationLayout/HeaderNavigationLayout';
import HeaderActionsLayout from './HeaderActionsLayout/HeaderActionsLayout';
import './header.scss';

function Header(): ReactElement {
    return (
        <div className='header container'>
            <HeaderNavigationLayout />
            <HeaderActionsLayout />
        </div>
    );
}

export default Header;