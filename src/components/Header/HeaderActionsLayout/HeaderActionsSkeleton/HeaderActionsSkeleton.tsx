import type { ReactElement } from 'react';
import './header-actions-skeleton.scss';

function HeaderActionsSkeleton(): ReactElement {
    return (
        <div className='header-actions-skeleton'>
            <div className='header-actions-skeleton__button'></div>
            <div className='header-actions-skeleton__button'></div>
            <div className='header-actions-skeleton__icon'></div>
        </div>
    );
}

export default HeaderActionsSkeleton;