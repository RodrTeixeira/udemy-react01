
let renderCount = 0;

export function Header() {
  renderCount++;
  
  return (
   <h3>renderizou {renderCount}</h3>
  )
}

