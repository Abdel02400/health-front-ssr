const CONTACT_SUBJECT = {
    GENERAL: 'Question générale',
    TECHNICAL: 'Problème technique',
    BILLING: 'Abonnement / facturation',
    FEEDBACK: 'Suggestion / feedback',
    OTHER: 'Autre',
} as const;

type ContactSubjectType = typeof CONTACT_SUBJECT[keyof typeof CONTACT_SUBJECT];

export type ContactDTO = {
    name: string;
    email: string;
    subject: ContactSubjectType;
    message: string;
    consent: boolean;
};