import React, { useState } from 'react';
 
function App() {
 
  // Declarar uma nova variável de state, na qual chamaremos de "contador"
  const [contador, setContador] = useState(0);
 
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
          Aumentar
      </button>
    </div>
  );
}
export default App;