import ReactDOM from "react-dom"

interface props {
    open:boolean,
    children:JSX.Element
}

const Modal = ({open,children}:props) => {
    if(!open) return null

    return ReactDOM.createPortal(
        children,
        document.getElementById("modal-root")!
    )
}

export default Modal