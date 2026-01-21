import type { ReactElement } from 'react';
import XIcon from '@client-components/icons/XIcon';
import SnapchatIcon from '@client-components/icons/SnapchatIcon';
import InstagramIcon from '@client-components/icons/InstagramIcon';
import FacebookIcon from '@client-components/icons/FacebookIcon';
import LinkedinIcon from '@client-components/icons/LinkedinIcon';
import './footer.scss';

function Footer(): ReactElement {
    return (
        <footer className='footer container'>
            <div className='footer__content'>
                <div className='footer__content-icons'>
                    <XIcon />
                    <SnapchatIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedinIcon />
                </div>
                <p className='footer__content-copyright'>&copy; Copyright 2026 - Health</p>
            </div>
        </footer>
    );
}

export default Footer;