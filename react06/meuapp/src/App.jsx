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
          value={email}
          onChange={ (event) => setEmail(event.target.value) }
          placeholder="Digite seu email..."
          className="input"
        />

        <input
          type="text"
          value={username}
          onChange={ (event) => setUsername(event.target.value) }
          placeholder="Digite seu username..."
          className="input"
        />

        <textarea
          type="text"
          value={description}
          onChange={ (event) => setDescription(event.target.value) }
          placeholder="Digite sua descriçao..."
          className="input"
        ></textarea>


        <select  
          className="select"
          value={type}
          onChange={e => setType(e.target.value)}
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
