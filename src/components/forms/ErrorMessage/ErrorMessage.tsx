import type { PropsWithChildren, ReactElement } from 'react';
import './error-message.scss';

function ErrorMessage({ children }: PropsWithChildren): ReactElement {
    return (
        <p className='error-message'>{children}</p>
    );
}

export default ErrorMessage;