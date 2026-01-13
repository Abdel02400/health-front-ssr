import type { ReactElement } from 'react';
import { NavLink } from 'react-router';
import LogoIcon from '@client-components/icons/LogoIcon';
import './header-navigation-layout.scss';

function HeaderNavigationLayout(): ReactElement {
    return (
        <nav className='header-navigation-layout'>
            <NavLink className='header-navigation-layout__logo' to="/" end><LogoIcon /></NavLink>
            <ul className='header-navigation-layout__items'>
                <li>
                    <NavLink className='header-navigation-layout__item' to="/" end>Accueil</NavLink>
                </li>
                <li>
                    <NavLink className='header-navigation-layout__item' to="/pricing" end>Prix</NavLink>
                </li>
                <li>
                    <NavLink className='header-navigation-layout__item' to="/contact" end>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavigationLayout;