import type { ReactElement } from 'react';
import './separator.scss';

type SeparatorProps = {
  text?: string;
};

function Separator({ text = undefined }: SeparatorProps): ReactElement {
    return (
        <div className='separator'>
            <span className="separator__line" />
            {text && <span className="separator__text">{text}</span>}
            <span className="separator__line" />
        </div>
    );
}

export default Separator;
