import { useRef } from 'react'
import './App.css'
import { Header } from './Header';

import { useForm } from "react-hook-form";

function App() {

  function handleSave(e){
    e.preventDefault();

  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSave}>
        
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
        />
    
        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
        />

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
