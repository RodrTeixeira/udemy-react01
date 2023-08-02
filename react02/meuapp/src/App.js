import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       status: true
    };
    
  this.sair = this.sair.bind(this);
  this.entrar = this.entrar.bind(this);

}

  sair(){
    this.setState({status: false});
  }
  entrar(){
    this.setState({status: true});
  }

  render(){
    return(
      <div>
        {this.state.status ? 
        <div>
            <h2>Bem-vindo ao sistema!</h2>
            <button onClick={this.sair}>Sair no Sistema</button>
        </div> : 
        <div>
            <h2>Olá Visitante, faça o login !</h2>
            <button onClick={this.entrar}>Entrar no Sistema</button>
        </div>}
      </div>
        
    );
  }
}

  
export default App;