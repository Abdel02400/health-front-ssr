import type { ReactElement } from 'react';
import { NavLink } from 'react-router';
import { routePath } from '@client-router/routePath';
import HomeIcon from '@client-components/icons/HomeIcon';
import FeaturesIcon from '@client-components/icons/FeaturesIcon';
import SubscriptionsIcon from '@client-components/icons/SubscriptionsIcon';
import AboutIcon from '@client-components/icons/AboutIcon';
import ContactIcon from '@client-components/icons/ContactIcon';
import './mobile-navigation.scss';

function MobileNavigation(): ReactElement {
    return (
        <div className='mobile-navigation'>
            <ul className='mobile-navigation__items'>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('home')} end>
                        <HomeIcon />
                    </NavLink>
                </li>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('features')} end>
                        <FeaturesIcon />
                    </NavLink>
                </li>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('subscriptions')} end>
                        <SubscriptionsIcon />
                    </NavLink>
                </li>
                <li className='mobile-navigation__item'>
                    <NavLink className='mobile-navigation__item-icon' to={routePath('about')} end>
                        <AboutIcon />
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