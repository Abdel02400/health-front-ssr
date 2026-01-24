import type { FieldValues } from 'react-hook-form';
import type { ValidateRule } from '@client-form/types/form';
import { getErrorMessage } from '@client-form/messages/getErrorMessage';
import { REGEX_EMAIL } from '@client-form/constants/regex';

export const email = <T extends FieldValues>(): ValidateRule<T> => ({ value }) => {
    if (typeof value !== 'string') return getErrorMessage('email');
    if (REGEX_EMAIL.test(value)) return true;
    return getErrorMessage('email');
};