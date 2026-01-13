import { useState, type PropsWithChildren, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '@client-hooks/useLockBodyScroll';
import CloseIcon from '@client-components/icons/CloseIcon';
import { clsx } from '@client-utils/clsx';
import LogoIcon from '@client-components/icons/LogoIcon';

type ModalProps = PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
    modalClassName?: string;
}>;

function TemplateModal(props: ModalProps): ReactElement {
    const {
        children,
        onClose,
        modalClassName = undefined
    } = props;
    const [fadeout, setFadeout] = useState<boolean>(false);
    useLockBodyScroll();

    const animationDurationString = getComputedStyle(document.documentElement)
        .getPropertyValue('--modal-animation')
        .replace('s', '');
    const animationDuration = parseFloat(animationDurationString) * 1000;

    const closeModal = (): void => {
        if (typeof onClose !== 'function') return;
        setFadeout(true);

        setTimeout(() => {
            onClose();
        }, animationDuration - 50);
    };

    return createPortal((
        <div className={clsx(['modal', modalClassName, fadeout && 'fadeout'])} onClick={closeModal}>
            <div className="modal__block" onClick={(event) => event.stopPropagation()}>
                <span className="modal__block-header">
                    <LogoIcon />
                    <span onClick={closeModal}><CloseIcon /></span>
                </span>
                <div className="modal__block-content">{children}</div>
            </div>
        </div>
    ), document.body);
}

function Modal(props: ModalProps): ReactElement|null {
    const { isOpen } = props;
    return isOpen ? <TemplateModal {...props} /> : null;
}

export default Modal;