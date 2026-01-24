import type { ReactElement, PropsWithChildren } from 'react';
import { useFormContext, type FieldValues } from 'react-hook-form';
import ErrorMessage from '@client-components/forms/ErrorMessage/ErrorMessage';
import { useValidationForm } from '@client-form/hooks/useValidationForm';
import { convertNameToId } from '@client-utils/string';
import { clsx } from '@client-utils/clsx';
import type { FieldConfig } from '@client-form/types/form';
import './checkbox-field.scss';

type CheckboxFieldProps<T extends FieldValues> = PropsWithChildren<{
    fieldConfig: FieldConfig<T>;
}>;

function CheckboxField<T extends FieldValues>(props: CheckboxFieldProps<T>): ReactElement {
    const { fieldConfig, children } = props;
    const { register } = useFormContext<T>();
    const { validationClass, error } = useValidationForm<T>(fieldConfig.name);

    return (
        <div className={clsx('checkbox-field', validationClass && validationClass)}>
            <div className="checkbox-field__container">
                <input type="checkbox" 
                    id={convertNameToId(fieldConfig.name)} 
                    {...register(fieldConfig.name, fieldConfig.options)} 
                    name={fieldConfig.name} 
                />
                <label htmlFor={convertNameToId(fieldConfig.name)}>
                    {children}
                </label>
            </div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
    );
}

export default CheckboxField;