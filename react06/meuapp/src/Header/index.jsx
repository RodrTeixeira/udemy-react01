import "./header.css";

export function Header({name}) {

  console.log("Componente HEADER Renderizou...")
  
  return (
   <h3 className="header">Bem-vindo {name}</h3>
  )
}

