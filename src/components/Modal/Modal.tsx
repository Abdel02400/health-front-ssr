import { useState, type PropsWithChildren, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '@client-hooks/useLockBodyScroll';
import CloseIcon from '@client-components/icons/CloseIcon';
import { clsx } from '@client-utils/clsx';
import LogoIcon from '@client-components/icons/LogoIcon';
import { useCssVariable } from '@client-hooks/useCssVariable';

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
    const animationDuration = useCssVariable('--modal-animation', 200);
    useLockBodyScroll();

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