import "./modal.css";
import { FiX } from "react-icons/fi";

export default function Modal(){
    return(
        <div className="modal">
            <div className="container">
                <button className="close">
                    <FiX size={25} color="#fff" />
                </button>
            </div>
        </div>
    )
}