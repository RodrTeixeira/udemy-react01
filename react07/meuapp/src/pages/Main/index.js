import React, {useState, useCallback} from "react";
import {FaGithub, FaPlus} from "react-icons/fa";

import {Container, Form, SubmitButton} from "./styles";

import api from "../../services/api";

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);

    const handleSubmit = useCallback((e)=>{
        
    },[])
       

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Adicionar Repositórios"
                value={newRepo}
                onChange={handleinputChange}
                />
                <SubmitButton>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}