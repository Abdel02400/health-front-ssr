import type { ReactElement } from 'react';
import { NavLink } from 'react-router';
import { routePath } from '@client-router/routePath';
import { useScreenSize } from '@client-hooks/useScreenSize';
import HomeIcon from '@client-components/icons/HomeIcon';
import SubscriptionsIcon from '@client-components/icons/SubscriptionsIcon';
import ContactIcon from '@client-components/icons/ContactIcon';
import './mobile-navigation.scss';

function MobileNavigation(): ReactElement | null {
    const { isLargeSize, isHydrated } = useScreenSize();

    if (isLargeSize || !isHydrated) return null;

    return (
        <div className='mobile-navigation container'>
            <ul className='mobile-navigation__items'>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('home')} end>
                        <HomeIcon />
                    </NavLink>
                </li>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('subscriptions')} end>
                        <SubscriptionsIcon />
                    </NavLink>
                </li>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('contact')} end>
                        <ContactIcon />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default MobileNavigation;