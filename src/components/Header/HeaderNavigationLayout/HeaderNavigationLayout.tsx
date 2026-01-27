import type { ReactElement } from 'react';
import { NavLink } from 'react-router';
import LogoIcon from '@client-components/icons/LogoIcon';
import { routePath } from '@client-router/routePath';
import { useScreenSize } from '@client-hooks/useScreenSize';
import ThemeSwitcher from '@client-components/ThemeSwitcher/ThemeSwitcher';
import './header-navigation-layout.scss';

function HeaderNavigationLayout(): ReactElement {
    const { isLargeSize } = useScreenSize();

    return (
        <nav className='header-navigation-layout'>
            <NavLink className='header-navigation-layout__logo' to={routePath('home')} end><LogoIcon /></NavLink>
            {isLargeSize && (
                <ul className='header-navigation-layout__items'>
                    <li><NavLink className='header-navigation-layout__item' to={routePath('home')} end>Accueil</NavLink></li>
                    <li><NavLink className='header-navigation-layout__item' to={routePath('features')} end>Fonctionnalités</NavLink></li>
                    <li><NavLink className='header-navigation-layout__item' to={routePath('subscriptions')} end>Abonnements</NavLink></li>
                    <li><NavLink className='header-navigation-layout__item' to={routePath('about')} end>&Agrave; propos</NavLink></li>
                    <li><NavLink className='header-navigation-layout__item' to={routePath('contact')} end>Contact</NavLink></li>
                </ul>
            )}
            <ThemeSwitcher />
        </nav>
    );
}

export default HeaderNavigationLayout;