import { useFormContext, type FieldValues, type Path, type FieldError } from 'react-hook-form';
import { getDeepValue } from '@client-utils/object';
import { isEmpty } from '@client-utils/value';
import { FIELD_ERROR_CLASS, FIELD_VALID_CLASS } from '@client-form/constants/form';

type UseValidationFormReturn = {
    validationClass?: string;
    error?: FieldError;
};

export const useValidationForm = <T extends FieldValues>(
    fieldName: Path<T>
): UseValidationFormReturn => {
    const { formState: { errors, touchedFields, isSubmitted }, watch } = useFormContext<T>();
    const value = watch(fieldName);
    const error = getDeepValue(fieldName, errors) as FieldError | undefined;
    const isTouched = Boolean(getDeepValue(fieldName, touchedFields));

    const shouldDisplayError = Boolean(error && (isTouched || isSubmitted));

    if (shouldDisplayError) return { validationClass: FIELD_ERROR_CLASS, error };

    const hasValue = !isEmpty(value) && !Number.isNaN(value);

    if (!error && hasValue && (isTouched || isSubmitted)) {
        return {
            validationClass: FIELD_VALID_CLASS,
            error: undefined,
        };
    }

    return {
        validationClass: undefined,
        error: undefined,
    };
};