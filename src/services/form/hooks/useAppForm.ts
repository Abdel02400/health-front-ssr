import { RE_VALIDATE_MODE, VALIDATION_MODE } from '@client-form/constants/form';
import { useForm, type FieldValues, type DefaultValues, type UseFormReturn } from 'react-hook-form';

type UseAppFormFunction = <T extends FieldValues>(defaultValues?: DefaultValues<T>) => UseFormReturn<T>;

export const useAppForm: UseAppFormFunction = <T extends FieldValues>(defaultValues?: DefaultValues<T>) => {
    return useForm<T>({
        mode: VALIDATION_MODE,
        reValidateMode: RE_VALIDATE_MODE,
        shouldFocusError: false,
        shouldUseNativeValidation: false,
        defaultValues
    });
};