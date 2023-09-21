import { useState, useEffect } from "react";
import { db, auth } from "./firebaseConnection";
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot} from "firebase/firestore";
import "./app.css";
import { createUserWithEmailAndPassword } from "firebase/auth"

function App() {

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(listaPost);
      })
    }
    loadPosts();
  }, [])

  async function handleAdd(){
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // }) 
    // .then(() => {
    //   console.log("DADOS REGISTRADOS NO BANCO!!")
    // }) 
    // .catch((error) => {
    //   console.log("GEROU ERRO!! "+ error )
    // }) 
    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then (() => {
      console.log("CADASTRADO COM SUCESSO!")
      setAutor("");
      setTitulo("");
    })
    .catch((error) => {
      console.log("ERRO! "+ error)
    })
  }

  async function buscarPost(){

    // const postRef = doc(db, "posts", "YYaOIK4CNVNyRWX5f3Mr")

    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })
    // .catch((error) => {
    //   console.log("ERRO AO BUSCAR " + error )
    // })

    const postsRef = collection(db, "posts");
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        })
      })
      setPosts(lista);

    })
    .catch((error) => {
    console.log("DEU ALGUM ERRO AO BUSCAR! "+error)
    })

  }

  async function editarPost(){
    const docRef = doc(db, "posts", idPost)
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("POST ATUALIZADO!");
      setIdPost("");
      setTitulo("");
      setAutor("");
    })
    .catch((error) => {
      console.log("ERRO AO ATUALIZAR O POST! "+error)
    })
  }

  async function excluirPost(id){
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() => {
      alert("POST DELETADO COM SUCESSO!");
    })
    .catch((error) => {
      console.log("ERRO AO DELETAR O POST! "+error)
    })
  }

  async function novoUsuario(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      console.log("CADASTRADO LOGIN COM SUCESSO! ");
      setEmail("");
      setSenha("");
    })
    .catch((error) => {
      if (error.code === "auth/weak-password"){
        alert("Senha muito fraca!")
      } else if(error.code === "auth/email-already-in-use"){
        alert("Email já cadastrado!")
      }
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> 
      <div className="container">
        <h2>Usuários</h2>
        <label>Email</label>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um Email"
        /><br/>
        <label>Senha</label>
        <input 
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Informe uma Senha"
        /><br/>
        <button onClick={novoUsuario}>Cadastrar</button>
      </div>
      <br/>
      <hr/>
      <div className="container">
        <h2>Posts</h2>
        <label>ID do post:</label>
        <input 
          placeholder="Digite o ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        /><br/>
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
        <button onClick={buscarPost}>Buscar Post</button><br/>
        <button onClick={editarPost}>Atualizar Post</button>
        <ul>
          {posts.map((post) => {
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong><br/>
                <span>Titulo: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <button onClick={() => excluirPost(post.id)}>Excluir</button><br/><br/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;