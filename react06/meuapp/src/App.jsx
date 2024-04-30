import { useState } from "react";

import './App.css'
import { Header } from './Header';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <Header name={name} />

    <p>Nome:</p>
    <input
      placeholder="Digite seu nome..."
      value={name}
      onChange={(e) => setName(e.target.value) }
    />

    <p>Email:</p>
    <input
      placeholder="Digite seu Email..."
      value={email}
      onChange={(e) => setEmail(e.target.value) }
    />
    <br/>

    </div>
  )
}

export default App
