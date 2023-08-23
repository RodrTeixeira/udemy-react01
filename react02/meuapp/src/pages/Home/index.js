import { useEffect, useState } from 'react';
import api from "../../services/api";

//URL DA API: /movie/now_playing?api_key=da78d99ef4c7fdd90e5ade18e4bf1a7a&language=pt-BR

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadfilmes(){
            const response = await api.get("/movie/now_playing", {
                params: {
                    api_key: "da78d99ef4c7fdd90e5ade18e4bf1a7a",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);

        }

        loadfilmes();

    }, [])

    return(
        <div>
            <h1>BEM-VINDO À HOME!</h1>
        </div>
    )
}

export default Home;