import type { FieldValues, FieldPath, RegisterOptions, Validate,} from 'react-hook-form';
import type { FieldConfigFunction } from '@client-form/types/form';

export const useFieldConfig = <T extends FieldValues>(): FieldConfigFunction<T> => {
    return (name, validationRules, options) => {
        const customOptions: RegisterOptions<T, FieldPath<T>> = {};

        if (validationRules?.length) {
            const validateMap: Record<string, Validate<unknown, T>> = {};

            validationRules.forEach((rule, index) => {
                validateMap[`rule_${index}`] = (value, formValues) =>
                    rule({ value, formValues });
            });

            customOptions.validate = validateMap;
        }

        if (options) Object.assign(customOptions, options);

        return { name, options: customOptions };
    };
};