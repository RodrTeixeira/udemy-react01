import { Link } from "react-router-dom";

function Contato() {
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa (11) 3324-4567</span><br/><br/>
            <Link to="/">Home</Link><br/><br/>
            <Link to="/sobre">Sobre</Link>
        </div>
    )
}

export default Contato;