import { useRef, type HTMLInputAutoCompleteAttribute, type HTMLInputTypeAttribute, type ReactElement } from 'react';
import { useFormContext, type FieldValues } from 'react-hook-form';
import ErrorMessage from '@client-components/forms/ErrorMessage/ErrorMessage';
import { clsx } from '@client-utils/clsx';
import { convertNameToId } from '@client-utils/string';
import { FIELD_ERROR_CLASS, FIELD_VALID_CLASS } from '@client-form/constants/form';
import ErrorIcon from '@client-components/icons/ErrorIcon';
import ValidIcon from '@client-components/icons/ValidIcon';
import { useRestrictions } from '@client-form/hooks/useRestrictions';
import { useValidationForm } from '@client-form/hooks/useValidationForm';
import type { FieldConfig } from '@client-form/types/form';
import type { RestrictionOptions } from '@client-form/types/restrictions';
import './input-field.scss';

type InputFieldProps<T extends FieldValues> = {
    fieldConfig: FieldConfig<T>;
    placeholder: string;
    icon: ReactElement;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    restrictions?: RestrictionOptions;
    disabled?: boolean;
};

function InputField<T extends FieldValues>(props: InputFieldProps<T>): ReactElement {
    const {
        fieldConfig,
        placeholder,
        icon,
        type = 'text',
        autoComplete = undefined,
        restrictions = undefined,
        disabled = false
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const { register } = useFormContext<T>();
    const { validationClass, error } = useValidationForm<T>(fieldConfig.name);
    const { ref, ...rest } = register(fieldConfig.name, fieldConfig.options);
    useRestrictions(inputRef, restrictions);

    return (
        <div className={clsx('input-field', validationClass && validationClass)}>
            <div className="input-field__wrapper">
                {icon}
                <input
                    {...rest}
                    ref={(e) => {
                        ref(e);
                        inputRef.current = e;
                    }}
                    id={convertNameToId(fieldConfig.name)}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    disabled={disabled}
                />
                {validationClass === FIELD_ERROR_CLASS && <span className='input-field__wrapper__validation-icon'><ErrorIcon /></span>}
                {validationClass === FIELD_VALID_CLASS && <span className='input-field__wrapper__validation-icon'><ValidIcon /></span>}
            </div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
    );
}

export default InputField;