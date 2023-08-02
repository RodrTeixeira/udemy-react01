import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
       feed: [
          {id: 1, username: "Antonio", curtidas: 10, comentarios: 2},
          {id: 2, username: "Lucas", curtidas: 120, comentarios: 20},
          {id: 3, username: "Amanda", curtidas: 30, comentarios: 12},
       ]
    };
}

  render(){
    return(
      <div>
        {this.state.feed.map((item) => {
          return(
            <div key={item.id}>
              <h3>{item.username}</h3>
              <a>{item.curtidas} curtidas / {item.comentarios} comentários</a>
            </div>
          );
        })}
      </div>
        
    );
  }
}

  
export default App;