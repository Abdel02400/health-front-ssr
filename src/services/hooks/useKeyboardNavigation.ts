import type { KeyboardEvent } from 'react';
import { actionKeys } from '@client-constants/keyboard';

type KeyboardNavigationOptionsType = {
    up: () => void;
    down: () => void;
    select: () => void;
}

export function useKeyboardNavigation() {
    return (event: KeyboardEvent, options: KeyboardNavigationOptionsType) => {
        const key = event.code;

        if (!actionKeys.includes(key)) return;
        if ((key === 'KeyK' || key === 'KeyJ') && !event.altKey) return;

        switch (key) {
            case 'Enter':
                event.preventDefault();
                options.select();
                break;
            case 'KeyK':
            case 'ArrowUp':
                event.preventDefault();
                options.up();
                break;
            case 'KeyJ':
            case 'ArrowDown':
                event.preventDefault();
                options.down();
                break;
            default:
        }
    };
}