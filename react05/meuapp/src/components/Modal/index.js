import "./modal.css";
import { FiX } from "react-icons/fi";

export default function Modal({conteudo, close}){
    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={close}>
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
                    <div className="row">
                        <span>
                            Assunto: <i>Suporte</i>
                        </span>
                        <span>
                            Cadastrado em: <i>22/08/2022</i>
                        </span>
                    </div>
                    <div className="row">
                        <span>
                            Status: <i>Aberto</i>
                        </span>
                    </div>
                    <>
                        <h3>Complemento</h3>
                        <p>
                            Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado Aqui vai todo complemento do chamado
                        </p>
                    </>
                </main>
            </div>
        </div>
    )
}