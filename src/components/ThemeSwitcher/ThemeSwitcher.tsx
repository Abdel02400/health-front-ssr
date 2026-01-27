import type { ReactElement } from 'react';
import { useTheme } from '@client-hooks/useTheme';
import SunAndMoonIcon from '@client-components/icons/SunAndMoonIcon';
import { clsx } from '@client-utils/clsx';
import { THEME } from '@client-store/slices/globalData/types';
import './theme-switcher.scss';

function ThemeSwitcher(): ReactElement {
    const { toggleTheme, theme } = useTheme();

    return (
        <div 
            className={clsx('theme-switcher',
                theme === THEME.DARK ? 'theme-switcher--dark' : 'theme-switcher--light'
            )}
            onClick={toggleTheme}
        >
            <SunAndMoonIcon />
        </div>
    );
}

export default ThemeSwitcher;