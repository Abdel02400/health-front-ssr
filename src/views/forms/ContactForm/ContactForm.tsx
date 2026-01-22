import type { ReactElement } from 'react';
import { useFetcher } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { useAppForm } from '@client-form/hooks/useAppForm';
import { useFieldConfig } from '@client-form/hooks/useFieldConfig';
import Title from '@client-components/Title/Title';
import InputField from '@client-components/forms/InputField/InputField';
import PersonIcon from '@client-components/icons/PersonIcon';
import { required } from '@client-form/validators/required';
import { ALPHANUMERIC_32, EMAIL_180 } from '@client-form/constants/restrictions';
import type { ContactDTO } from '@client-dtos/contact/ContactDTO';

function ContactForm(): ReactElement {
    const formMethods = useAppForm<ContactDTO>();
    const fieldConfig = useFieldConfig<ContactDTO>();
    const { handleSubmit } = formMethods;

    const fetcher = useFetcher();
    const isLoading = fetcher.state === "submitting" || fetcher.state === "loading";

    const submit = (formData: ContactDTO) => {
        fetcher.submit(formData, {
            method: "post",
            action: "/contact",
        });
    };

    return (
        <FormProvider {...formMethods}>
            <fetcher.Form onSubmit={handleSubmit(submit)}>
                <Title text='Nous contacter' />
                <InputField
                    fieldConfig={fieldConfig('name', [required()])}
                    placeholder='Votre nom'
                    icon={<PersonIcon />}
                    restrictions={ALPHANUMERIC_32}
                    disabled={isLoading}
                />
            </fetcher.Form>
        </FormProvider>
    );
}

export default ContactForm;