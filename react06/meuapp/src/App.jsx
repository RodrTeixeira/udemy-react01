import './App.css'
import { Header } from './Header';

import { useForm } from "react-hook-form";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().noempty("O campo nome é obrigatório !"),
  email: z.string().email("Digite um email válido.").noempty("O campo email é obrigatório !"),
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres !")
  .max(10, "O username pode ter no máximo 10 caracteres !")
  .noempty("O campo username é obrigatório !")
})

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

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
          {...register("name")}
          id="name"
        />
        { errors.name && <p>{errors.name.message}</p>}
        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email")}
          id="email"
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username")}
          id="username"
        />

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
