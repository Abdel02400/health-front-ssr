import type { ReactElement } from 'react';
import { useNavigation } from 'react-router';
import { clsx } from '@client-utils/clsx';
import './navigation-progress.scss';

function NavigationProgress(): ReactElement | null {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className={clsx('navigation-progress', isLoading && 'is-loading')} />
    );
}

export default NavigationProgress;
