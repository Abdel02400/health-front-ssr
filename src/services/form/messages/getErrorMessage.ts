import { getDeepValue } from '@client-utils/object';
import type { Path } from '@client-form/types/path';

const errorsMessage = {
    required: 'Ce champ est obligatoire',
    email: 'Merci de renseigner un email valide',
};

export const getErrorMessage = (
    key: Path<typeof errorsMessage>,
    params?: Record<string, string>
): string => {
    const rawMessage = getDeepValue(key, errorsMessage);

    if (typeof rawMessage !== 'string') throw new Error(`The key "${key}" does not exist in error messages`);

    let message = rawMessage;

    if (params) {
        for (const [param, value] of Object.entries(params)) {
            message = message.replace(`{${param}}`, value);
        }
    }

    return message;
};