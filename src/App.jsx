import { useState } from 'react'
import './App.css'

function App() {

 const [name, setName] = useState('Sofia');
 const [newName, setNewName] = useState('');

 const changeNames = (e) => {
    e.preventDefault();
    if (newName !== '') {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <div className="App">
      <h1>Cambiale el nombre al Profesor</h1>
      <h2>Teacher Name: {name}</h2>
      
      <form onSubmit={changeNames}>
        <input 
          type="text" 
          placeholder="Escribe el nuevo nombre" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
        <button type="submit">Cambiar Nombre</button>
      </form>
    </div>
  );
}

export default App;