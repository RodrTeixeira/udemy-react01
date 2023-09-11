import { useState } from "react";
import { db } from "./firebaseConnection";
import { doc,setDoc } from "firebase/firestore";
import "./app.css";
function App() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd(){
    await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      autor: autor,
    }) 
    .then(() => {
      console.log("DADOS REGISTRADOS NO BANCO!!")
    }) 
    .catch((error) => {
      console.log("GEROU ERRO!! "+ error )
    }) 
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> 
      <div className="container">
        <label>Título:</label>
        <textarea 
        type
        placeholder="Digite o título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        /><br/>
        <label>Autor:</label>
        <input type="text" 
        placeholder="Autor do Post"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        /><br/>
        <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
