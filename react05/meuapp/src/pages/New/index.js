import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlusCircle } from "react-icons/fi";

import "./new.css";


export default function New(){
    const [customers, setCustomers] = useState([]);

    const [complemento, setComplemento] = useState("");
    const [assunto, setAssunto] = useState("Suporte");
    const [status, setStatus] = useState("Aberto");

    return(
        <diiv>
            <Header/>
            <div className="content">
                <Title name="Novo Chamado">
                    <FiPlusCircle size={25} />
                </Title>
                <div className="container">
                    <form className="form-profile">
                        <label>Clientes</label>
                        <select>
                            <option key={1} value={1}>Mercado Teste</option>
                            <option key={2} value={2}>Loja Informática</option>
                        </select>
                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Técnica">Visita Técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                        <label>Status</label>
                        <div className="status">
                            <input
                                type="radio"
                                name="radio"
                                Value="Aberto"
                            />
                            <span>Em Aberto</span>

                            <input
                                type="radio"
                                name="radio"
                                Value="Progresso"
                            />
                            <span>Progresso</span>

                            <input
                                type="radio"
                                name="radio"
                                Value="Atendido"
                            />
                            <span>Atendido</span>
                        </div>
                        <label>Complemento</label>
                        <textarea
                            type="text"
                            placeholder="Descreva seu problema (opcional)"
                        />
                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </diiv>
    )
}