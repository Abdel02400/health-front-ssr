import type { FieldValues } from 'react-hook-form';
import { getErrorMessage } from '@client-form/messages/getErrorMessage';
import { isEmpty } from '@client-utils/value';
import type { ValidateRule } from '@client-form/types/form';

export const required = <T extends FieldValues>(message?: string): ValidateRule<T> => ({ value }) => {
    const errorMessage = message ?? getErrorMessage('required');

    if (value !== null && typeof value === 'object') {
        const hasValue = Object.values(value).some((v) => !isEmpty(v) && v !== false);
        return hasValue || errorMessage;
    }

    if (
        value === undefined ||
        value === null ||
        value === false ||
        (typeof value === 'number' && Number.isNaN(value)) ||
        (typeof value === 'string' && value.trim() === '')
    ) {
        return errorMessage;
    }

    return true;
};