import { useParams } from "react-router-dom";

function Produto() {

    const {} = useParams();

    return(
        <div>
            <h2>PÁGINA DETALHE DO PRODUTO</h2>
            MEU PRODUTO É 123
        </div>
    )
}

export default Produto;