import { CONTACT_SUBJECT_LIST } from '@client-form/constants/contact';

type ContactSubjectType = typeof CONTACT_SUBJECT_LIST[number]['value'];

export type ContactDTO = {
    name: string;
    email: string;
    subject: ContactSubjectType;
    message: string;
    consent: boolean;
};