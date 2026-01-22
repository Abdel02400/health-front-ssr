import type { ReactElement } from 'react';
import contact from '@client-assets/images/contact.png';
import ContactForm from '@client-forms/ContactForm/ContactForm';
import './contact.scss';

function Contact(): ReactElement {
    return (
        <div className='contact container'>
            <img className='contact__illustration' src={contact} alt='Illustration pour envoyer un mail' />
            <ContactForm />
        </div>
    );
}

export default Contact;