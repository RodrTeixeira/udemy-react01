import { useRef } from 'react'
import './App.css'
import { Header } from './Header';

import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit } = useForm()

  function handleSave(data){
    console.log(data);
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name", { required: true })}
          id="name"
        />
    
        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email", { required: true })}
          id="email"
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username", { required: true })}
          id="username"
        />

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
