import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";

import "./dashboard.css";
import { Link } from "react-router-dom";
//import { CloseButton } from "react-toastify/dist/components";

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>
                <>
                    <Link to="/new" className="new">
                        <FiPlus color="#fff" size={25} />
                        Novo Chamado
                    </Link>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-Label="Cliente">
                                    Mercado Esquina
                                </td>
                                <td data-Label="Assunto">
                                    Suporte
                                </td>
                                <td data-Label="Status">
                                    <span className="badge" style={{ backgroundColor: "#999" }}>
                                        Em aberto
                                    </span>
                                </td>
                                <td data-Label="Cadastrado">
                                    12/05/2022
                                </td>
                                <td data-Label="#">
                                    <button className="action" style={{backgroundColor: "#3586f6"}}>
                                        <FiSearch color="#fff" size={17} />
                                    </button>
                                    <button className="action"  style={{backgroundColor: "#f6a935"}}>
                                        <FiEdit2 color="#fff" size={17} />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </>
            </div>
        </div>
    )
}

    //                <div className="container dashboard">
    //                    <h1>Teste</h1>
    //                </div>
    //                            <tr>
    //                            <td data-Label="Cliente">
    //                                Informática TECH
    //                            </td>
    //                            <td data-Label="Assunto">
    //                                Suporte
    //                            </td>
    //                            <td data-Label="Status">
    //                                <span className="badge" style={{ backgroundColor: "#999" }}>
    //                                    Em aberto
    //                                </span>
    //                            </td>
    //                            <td data-Label="Cadastrado">
    //                                12/05/2022
    //                            </td>
    //                            <td data-Label="#">
    //                                <button className="action" style={{backgroundColor: "#3586f6"}}>
    //                                    <FiSearch color="#fff" size={17} />
    //                                </button>
    //                                <button className="action"  style={{backgroundColor: "#f6a935"}}>
    //                                    <FiEdit2 color="#fff" size={17} />
    //                                </button>
    //                            </td>
    //                        </tr>