import "./header.css";

let renderCount = 0;

export function Header() {

  renderCount++;
  
  return (
   <h3 className="header">renderizou {renderCount}</h3>
  )
}

