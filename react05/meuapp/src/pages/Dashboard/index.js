import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";

import "./dashboard.css";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, limit, startAfter, query} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

import { format } from "date-fns";

//import { CloseButton } from "react-toastify/dist/components";

const listRef = collection(db, "chamados")

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        async function loadChamados(){
            const q = query(listRef,orderBy("created", "desc"), limit(5));

            const querySnapshot = await getDocs(q)
            setChamados([]);
            await updateState(querySnapshot)
            setLoading(false);
        }
        loadChamados();

        return () => { }
    },[])

    async function updateState(querySnapshot){
        const isCollectionEmpty = querySnapshot.size === 0;
        if(isCollectionEmpty){
            let lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    clienteId: doc.data().clienteId,
                    created: doc.data().created,
                    createdFormat: format(doc.data().created.toDate(), "dd/MM/yyyy"),
                    status: doc.data().status,
                    complemento: doc.data().complemento,
                })
            })
            setChamados(chamados => [...chamados, ...lista])
        }else{
            setIsEmpty(true);
        }
    }

    if(loading){
        return(
            <div>
                <Header/>
                <div className="content">
                    <Title name="Tickets">
                        <FiMessageSquare size={25} />
                    </Title>
                    <div className="container dashboard">
                        <span>Buscando Chamados...</span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Tickets">
                    <FiMessageSquare size={25} />
                </Title>
                <>
                    {chamados.length === 0 ? (
                        <div className="container dashboard">
                            <span>Nenhum Chamado Encontrado...</span>
                            <Link to="/new" className="new">
                            <FiPlus color="#fff" size={25} />
                                 Novo Chamado
                            </Link>
                        </div>
                    ) : (
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
                                {chamados.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td data-Label="Cliente">
                                               {item.cliente}
                                            </td>
                                            <td data-Label="Assunto">
                                                {item.assunto}
                                            </td>
                                            <td data-Label="Status">
                                                <span className="badge" style={{ backgroundColor: "#999" }}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td data-Label="Cadastrado">
                                                {item.createdFormat}
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
                                        
                                    )
                                })}

                            </tbody>
                        </table>
                        </>
                    )}
                   
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