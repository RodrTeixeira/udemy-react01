import { useState, useRef } from 'react'
import './App.css'
import { Header } from './Header';


function App() {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const descriptionRef = useRef(null);
  const typeRef = useRef("user");

  function handleSave(e){
    e.preventDefault();

    console.log({
      name: nameRef.current?.value,
    })
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
          ref={nameRef}
        />

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          ref={emailRef}
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          ref={usernameRef}
        />

        <textarea
          type="text"
          placeholder="Digite sua descriçao..."
          className="input"
          ref={descriptionRef}
        ></textarea>


        <select  
          className="select"
          ref={typeRef}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App