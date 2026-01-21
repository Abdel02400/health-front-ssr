import { memo, type PropsWithChildren, type ReactElement } from 'react';
import { clsx } from '@client-utils/clsx';
import './button.scss';

type ButtonVariant = 'primary' | 'secondary';
type ButtonType = 'button' | 'submit';
type ButtonProps = PropsWithChildren<{
    type?: ButtonType;
    variant?: ButtonVariant;
    icon?: ReactElement;
    onClick?: () => void;
}>;

const Button = memo(function Button(props: ButtonProps): ReactElement {
    const {
        children,
        type = 'button',
        variant = 'primary',
        icon = undefined,
        onClick = undefined
    } = props;

    return (
        <button onClick={onClick} className={clsx('button', variant)} type={type}>
            {icon}
            {children}
        </button>
    );
});

export default Button;