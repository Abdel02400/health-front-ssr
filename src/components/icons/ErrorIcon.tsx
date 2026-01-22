import type { ReactElement } from 'react';

function ErrorIcon(): ReactElement {
    return (
        <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 96 960 960" fill="#FF5A64">
                <path d="m251.333 851.333-46.666-46.666L433.334 576 204.667 347.333l46.666-46.666L480 529.334l228.667-228.667 46.666 46.666L526.666 576l228.667 228.667-46.666 46.666L480 622.666 251.333 851.333Z" />
            </svg>
        </span>
    );
}

export default ErrorIcon;