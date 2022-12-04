import React from 'react';
import { useState } from 'react';
import { Modal } from './components/modal';
import { InputPass } from './components/inputPass';
import { register } from './components/register';
import './App.css';
import './components/modal.css';

const contextValue = React.createContext(null);

function App() {
    const [show, setShow] = useState(false);
    
    return (
        <div >
          <form className="App">
            <InputPass onChange={values => console.log(values)} />
            <button onClick={(e) => {e.preventDefault(); setShow(true); register()}}>Enviar</button>
            <Modal onClose={() => setShow(false)} show={show}/>
          </form>
        </div>
    );
}

export default App;
export { contextValue };
