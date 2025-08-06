import { useState } from 'react'
import './App.css'

function App() {

 const [name, setName] = useState('Sofia');
 const [newName, setNewName] = useState('');

 const names = ['Data', 'Reyes', 'Yolanda'];
    return (
        <div className="App">
            <h1>Cambiale el nombre al Profesor</h1>
            <p>Haz click sobre cualquiera de los nombres de la lista y observa como cambia el nombre del teacher</p>
            <h2>Teacher Name: {name}</h2>
             <ul>
        {names.map((prof, index) => (
          <li key={index} onClick={() => setName(prof)} style={{cursor: 'pointer'}}>
            {prof}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default App
