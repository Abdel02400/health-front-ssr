import type { ReactElement } from 'react';
import { useFetcher } from 'react-router';
import { FormProvider } from 'react-hook-form';
import { useAppForm } from '@client-form/hooks/useAppForm';
import { useFieldConfig } from '@client-form/hooks/useFieldConfig';
import Title from '@client-components/Title/Title';
import InputField from '@client-components/forms/InputField/InputField';
import TextAreaField from '@client-components/forms/TextAreaField/TextareaField';
import CheckboxField from '@client-components/forms/CheckboxField/CheckboxField';
import PersonIcon from '@client-components/icons/PersonIcon';
import MailIcon from '@client-components/icons/MailIcon';
import { required } from '@client-form/validators/required';
import { email } from '@client-form/validators/email';
import { ALPHANUMERIC_32, EMAIL_180 } from '@client-form/constants/restrictions';
import { CONTACT_SUBJECT_LIST } from '@client-form/constants/contact';
import SelectField from '@client-components/forms/SelectField/SelectField';
import ListIcon from '@client-components/icons/ListIcon';
import type { ContactDTO } from '@client-dtos/contact/ContactDTO';
import './contact-form.scss';

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
                <div className='contact-form__fields'>
                    <InputField
                        fieldConfig={fieldConfig('name', [required()])}
                        placeholder='Votre nom'
                        icon={<PersonIcon />}
                        autoComplete='name'
                        restrictions={ALPHANUMERIC_32}
                        disabled={isLoading}
                    />
                    <InputField
                        fieldConfig={fieldConfig('email', [required(), email()])}
                        type='email'
                        placeholder='exemple@email.com'
                        icon={<MailIcon />}
                        autoComplete='email'
                        restrictions={EMAIL_180}
                        disabled={isLoading}
                    />
                </div>
                <SelectField
                    fieldConfig={fieldConfig('subject', [required()])}
                    defaultLabel='Sélectionnez un sujet'
                    icon={<ListIcon />}
                    items={[...CONTACT_SUBJECT_LIST]}
                />
                <TextAreaField
                    fieldConfig={fieldConfig('message', [required()])}
                    placeholder='Expliquez-nous votre demande, nous vous répondrons rapidement'
                    icon={<MailIcon />}
                    disabled={isLoading}
                />
                <CheckboxField fieldConfig={fieldConfig('consent', [required()])}>
                    J’accepte que mes données soient utilisées pour me recontacter.
                </CheckboxField>
                <button type="submit">submit</button>
            </fetcher.Form>
        </FormProvider>
    );
}

export default ContactForm;