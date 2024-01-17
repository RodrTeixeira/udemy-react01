import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlusCircle } from "react-icons/fi";

import "./new.css";


export default function New(){
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
                    </form>
                </div>
            </div>
        </diiv>
    )
}