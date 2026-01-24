import type { FieldValues, FieldPath, RegisterOptions, ValidateResult } from 'react-hook-form';

type ValidateRuleContext<T extends FieldValues, V = unknown> = {
  value: V;
  formValues: T;
};

export type ItemListType<V = string> = {
    value: V;
    display: string;
}

export type ValidateRule<T extends FieldValues, V = unknown> = (
  ctx: ValidateRuleContext<T, V>
) => ValidateResult | Promise<ValidateResult>;

export type FieldConfig<T extends FieldValues> = {
  name: FieldPath<T>;
  options: RegisterOptions<T, FieldPath<T>>;
};

export type FieldConfigFunction<T extends FieldValues> = (
  name: FieldPath<T>,
  validationRules?: ValidateRule<T>[],
  options?: RegisterOptions<T, FieldPath<T>>
) => FieldConfig<T>;