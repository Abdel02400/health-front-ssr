import { useLayoutEffect } from 'react';
import { DEV_STYLES_ID } from '@shared-constants/ssr';

export const useRemoveDevStyles = () => {
    useLayoutEffect(() => {
        const style = document.getElementById(DEV_STYLES_ID);
        style?.remove();
    }, []);
};