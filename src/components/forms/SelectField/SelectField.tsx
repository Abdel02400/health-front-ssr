import type { ReactElement } from 'react';
import { useFormContext, useController, type FieldValues, type PathValue, type Path } from 'react-hook-form';
import { useValidationForm } from '@client-form/hooks/useValidationForm';
import ErrorMessage from '@client-components/forms/ErrorMessage/ErrorMessage';
import { clsx } from '@client-utils/clsx';
import BaseSelect from './BaseSelect/BaseSelect';
import type { FieldConfig, ItemListType } from '@client-form/types/form';
import './select-field.scss';

type SelectFieldProps<T extends FieldValues, K extends Path<T>> = {
    items: ItemListType<PathValue<T, K>>[];
    fieldConfig: FieldConfig<T> & { name: K };
    icon: ReactElement;
    defaultLabel: string;
};

function SelectField<T extends FieldValues, K extends Path<T>>(props: SelectFieldProps<T, K>): ReactElement {
    const { items, fieldConfig, defaultLabel, icon } = props;
    const { control, setValue } = useFormContext<T>();
    const { validationClass, error } = useValidationForm<T>(fieldConfig.name);

    const handleSelect = (item: ItemListType<PathValue<T, K>>) => {
        setValue(fieldConfig.name, item.value, { shouldTouch: true, shouldValidate: true });
    };

    const { field: { onBlur, name, value, ref } } = useController<T, K>({
        name: fieldConfig.name,
        control,
        defaultValue: undefined,
        rules: { ...fieldConfig.options },
    });

    return (
        <div 
            className={clsx('select-field', validationClass && validationClass)}
            data-id={fieldConfig.name}
        >
            <BaseSelect
                name={name}
                onBlur={onBlur}
                onSelect={handleSelect}
                value={value}
                list={items}
                fieldRef={ref}
                icon={icon}
                defaultLabel={defaultLabel}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
    );
}

export default SelectField;