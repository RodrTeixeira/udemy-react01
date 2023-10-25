import { useState } from "react";
import "./admin.css";

export default function Admin() {
    const [tarefaInput, setTarefaInput] = useState("")
    function handleRegister(e){
        e.preventDefault();
        alert("CLICOU")
    }
    return(
        <div className="admin-container">
            <h1>Minhas Tarefas</h1>
            <form className="form" onSubmit={handleRegister}>
                <textarea
                placeholder="Digite sua Tarefa..."
                value={tarefaInput}
                onChange={(e) => setTarefaInput(e.target.value)}
                />
                <button className="btn-register" type="submit">Registrar Tarefa</button>
            </form>
            <article className="list">
                <p>Estudar JavaScript e ReactJS hoje a noite</p>
                <div>
                    <button>Editar</button>
                    <button className="btn-delete">Concluir</button>
                </div>
            </article>
            <button className="btn-logout">Sair</button>
        </div>
    )
}