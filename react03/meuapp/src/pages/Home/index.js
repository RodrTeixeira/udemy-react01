import { useState } from "react";
import "./home.css";

export default function Home(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
      <div className="home-container">
        <h1> Lista de Tarefas
        </h1>
        <span>Gerencie sua agenda de forma fácil</span>
        <form className="form">
          <input 
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            autoComplete={false}
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </form>
      </div>
    )
  }