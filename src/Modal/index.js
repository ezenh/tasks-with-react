import React from "react";
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modal">
            <p> Tarea Agregada
            { children }
            </p>
        </div>,

        document.getElementById('modal')
    )
}


export { Modal }