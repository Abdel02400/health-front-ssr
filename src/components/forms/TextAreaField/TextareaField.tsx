import { useEffect, useRef, type ReactElement } from 'react';
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
import './textarea-field.scss';

type TextAreaFieldProps<T extends FieldValues> = {
    fieldConfig: FieldConfig<T>;
    placeholder: string;
    icon: ReactElement;
    restrictions?: RestrictionOptions;
    disabled?: boolean;
};

function TextAreaField<T extends FieldValues>(props: TextAreaFieldProps<T>): ReactElement {
    const {
        fieldConfig,
        placeholder,
        icon,
        restrictions = undefined,
        disabled = false
    } = props;

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const { register } = useFormContext<T>();
    const { validationClass, error } = useValidationForm<T>(fieldConfig.name);
    const { ref, ...rest } = register(fieldConfig.name, fieldConfig.options);
    useRestrictions(textareaRef, restrictions);

    const resizeTextarea = () => {
        if (textareaRef.current === null) return;
        textareaRef.current.style.height = '1px';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    useEffect(() => {
        window.addEventListener('resize', resizeTextarea);
        return () => window.removeEventListener('resize', resizeTextarea);
    }, []);

    return (
        <div className={clsx('textarea-field', validationClass && validationClass)}>
            <div className="textarea-field__wrapper">
                {icon}
                <textarea
                    {...rest}
                    ref={(e) => {
                        ref(e);
                        textareaRef.current = e;
                    }}
                    onInput={resizeTextarea}
                    id={convertNameToId(fieldConfig.name)}
                    placeholder={placeholder}
                    disabled={disabled}
                />
                {(validationClass === FIELD_ERROR_CLASS && FIELD_ERROR_CLASS) && <span className='textarea-field__wrapper__validation-icon'><ErrorIcon /></span>}
                {(validationClass === FIELD_VALID_CLASS && FIELD_VALID_CLASS) && <span className='textarea-field__wrapper__validation-icon'><ValidIcon /></span>}
            </div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
    );
}

export default TextAreaField;