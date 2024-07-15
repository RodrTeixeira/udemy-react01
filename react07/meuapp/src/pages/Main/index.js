import React from "react";
import {FaGithub} from "react-icons/fa";

import {Container, Form} from "./styles";

export default function Main(){
    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>
            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar Repositórios"/>
            </Form>
        </Container>
    )
}