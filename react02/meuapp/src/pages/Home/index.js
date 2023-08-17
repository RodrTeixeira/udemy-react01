import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo à página HOME</h1>
      <span>Sujeito Programador</span><br/><br/>
      <Link to="/sobre" >Sobre</Link><br/><br/>
      <Link to="/contato" >Contato</Link>
    </div>
  )
}

export default Home;