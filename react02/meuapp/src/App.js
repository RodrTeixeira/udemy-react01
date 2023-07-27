
import React from "react";

// const Bemvindo = () => <h1>Bem-vindo!!!</h1>;

const Bemvindo = (props) => {
    return (
      <div>
        <h2>Bem-vindo {props.nome}</h2>
        <h3>Tenho {props.idade} anos</h3>
      </div>
    );
}

function App() {
    return(
      <div>
          Olá Mundo!
          <Bemvindo nome="Lucas" idade="12"/>
          <Bemvindo nome="Antonio" idade="33"/>
      </div>
    );
}

export default App;