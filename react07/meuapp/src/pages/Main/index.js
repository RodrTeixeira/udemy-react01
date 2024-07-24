import React, {useState} from "react";
import {FaGithub, FaPlus} from "react-icons/fa";

import {Container, Form, SubmitButton} from "./styles";

export default function Main(){

    const [newRepo, setNewRepo] = useState('');

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>
            <Form onSubmit={() => {}}>
                <input 
                type="text" 
                placeholder="Adicionar Repositórios"
                value={newRepo}
                />
                <SubmitButton>
                    <FaPlus color="#FFF" size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}