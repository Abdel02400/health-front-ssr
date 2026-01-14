import type { PropsWithChildren, ReactElement } from 'react';
import './title.scss';

function Title({ children }: PropsWithChildren): ReactElement {
    return (
        <h2 className='title'>{children}</h2>
    );
}

export default Title;