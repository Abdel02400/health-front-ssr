import type { FieldValues } from 'react-hook-form';
import type { ValidateRule } from '@client-form/types/form';
import { getErrorMessage } from '@client-form/messages/getErrorMessage';

export const minLength = <T extends FieldValues>(size: number): ValidateRule<T> => ({ value }) => {
    if (typeof value !== 'string') throw new Error('Length rule can only be use on string');

    if (value.length >= size) return true;
    return getErrorMessage('minLength', { size: size.toString() });
};