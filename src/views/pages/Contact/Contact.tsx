import type { ReactElement } from 'react';
import Title from '@client-components/Title/Title';
import AnimatedReveal from '@client-components/AnimatedReveal/AnimatedReveal';
import ContactIcon from '@client-components/icons/ContactIcon';
import ContactForm from '@client-forms/ContactForm/ContactForm';
import './contact.scss';

function Contact(): ReactElement {
    return (
        <div className='contact container'>
            <div className='contact__header'>
                <Title eyebrow={<><ContactIcon /> Contact</>}>Une question ? Écris-nous</Title>
                <AnimatedReveal delay={200}>
                    <p className='contact__description'>On te répond sous 24h, promis.</p>
                </AnimatedReveal>
            </div>
            <AnimatedReveal delay={600} className='contact__form'>
                <ContactForm />
            </AnimatedReveal>
        </div>
    );
}

export default Contact;