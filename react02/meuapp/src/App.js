
import React from "react";

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou: {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
        <a href={props.fb}>Facebook </a>
        <a>LinkedIn </a>
        <a>YouTube </a>
    </div>
  )
}

function App() {
    return(
      <div>
          <h1>Conheça nossa equipe !</h1>
          <hr/>
          <Equipe nome="Lucas" cargo="Programador" idade="29" facebook="https://google.com"/>
          <Equipe nome="Antonio" cargo="Designer" idade="25" facebook="https://google.com" />
          <Equipe nome="Amanda" cargo="Front-end" idade="22" facebook="https://google.com" />
      </div>
    );
}

export default App;