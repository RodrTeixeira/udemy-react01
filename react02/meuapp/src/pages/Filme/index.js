import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "da78d99ef4c7fdd90e5ade18e4bf1a7a",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(() => {
                console.log("FILME NAO ENCONTRADO!!!")
            })
        }
        loadFilme();
    },[])
    return(
        <div>
            <h1>ACESSANDO FILME {id}</h1>
        </div>
    )
}

export default Filme