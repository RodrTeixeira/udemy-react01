import "./modal.css";
import { FiX } from "react-icons/fi";

export default function Modal(){
    return(
        <div className="modal">
            <div className="container">
                <button className="close">
                    <FiX size={25} color="#fff" />
                    Voltar
                </button>
                <main>
                    <h2>Detalhes do Chamado</h2>
                    <div className="row">
                        <span>
                            Cliente: <i>Mercado</i>
                        </span>
                    </div>
                </main>
            </div>
        </div>
    )
}