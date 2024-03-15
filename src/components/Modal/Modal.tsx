import React, {useRef, useEffect} from "react";
import './Modal.css';
import { createPortal } from "react-dom";

type ModalProps = React.PropsWithChildren<{
    open : boolean;
}>;

const Modal : React.FC<ModalProps> = ({ children, open}) => {
    const modalRoot : HTMLElement = document.getElementById("modal") || document.body;
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open && dialog.current) {
            dialog.current.showModal();
        } else if (dialog.current) {
            dialog.current.close();
        }
    }, [open]);



    return createPortal (
        <dialog
            ref={dialog}>
            {children}
        </dialog>,
        modalRoot
    );
}

export default Modal;