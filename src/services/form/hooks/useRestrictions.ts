import { useEffect, useEffectEvent, type RefObject } from 'react';
import { getEventKey, getNextValue } from '@client-form/utils/restrictions';
import { controlKeys } from '@client-constants/keyboard';
import type {
    RestrictionOptions,
    UseRestrictionsRefType,
    UseRestrictionsRefArrayType
} from '@client-form/types/restrictions';

export const useRestrictions = (
    ref: RefObject<UseRestrictionsRefType | UseRestrictionsRefArrayType | null>,
    restrictions?: RestrictionOptions
): void => {

    const onKey = useEffectEvent((event: KeyboardEvent | InputEvent) => {
        if (!restrictions || restrictions.disableRestrictKey) return;

        const key = getEventKey(event);
        if (!key || controlKeys.includes(key)) return;

        const input = event.target as UseRestrictionsRefType;
        const nextValue = getNextValue(
            input.value ?? '',
            key,
            input.selectionStart,
            input.selectionEnd
        );

        if (restrictions.restrictedPattern && new RegExp(restrictions.restrictedPattern).test(key)) {
            event.preventDefault();
            return;
        }

        if (restrictions.pattern && !new RegExp(restrictions.pattern).test(nextValue)) event.preventDefault();
    });

    const onPaste = useEffectEvent((event: ClipboardEvent) => {
        if (!restrictions) return;

        if (restrictions.disablePaste) {
            event.preventDefault();
            return;
        }

        const pasteValue = event.clipboardData?.getData('text');
        if (!pasteValue) return;

        const input = event.target as UseRestrictionsRefType;
        const nextValue = getNextValue(
            input.value ?? '',
            pasteValue,
            input.selectionStart,
            input.selectionEnd
        );

        if (restrictions.restrictedPattern && new RegExp(restrictions.restrictedPattern).test(pasteValue)) {
            event.preventDefault();
            return;
        }

        if (restrictions.pattern && !new RegExp(restrictions.pattern).test(nextValue)) event.preventDefault();
    });

    useEffect(() => {
        if (!ref.current) return;

        const elements = Array.isArray(ref.current) ? ref.current.filter(Boolean) : [ref.current];

        elements.forEach((el) => {
            el?.addEventListener('keydown', onKey);
            el?.addEventListener('beforeinput', onKey);
            el?.addEventListener('paste', onPaste);
        });

        return () => {
            elements.forEach((el) => {
                el?.removeEventListener('keydown', onKey);
                el?.removeEventListener('beforeinput', onKey);
                el?.removeEventListener('paste', onPaste);
            });
        };
    }, [ref]);
};