import React from 'react';
import { useState } from 'react';
import { Modal } from '../components/modal'; 
import { InputPass } from '../components/inputPass';
import { register } from '../components/register';
import { Button } from '../components/styleComponents';
import { Link } from 'react-router-dom'

const contextValue = React.createContext(null);

function Cadastro() {
    const [show, setShow] = useState(false);

    //const {username} = useContext(token)

    return (
        <div>
            <form className="App">
                <h1>Cadastre-se</h1>
                <InputPass onChange={(values) => console.log(values)} />
                <Button
                    onClick={e => {
                        e.preventDefault();
                        setShow(true);
                        register();
                    }}
                >
                    Enviar
                </Button>
                <Button><Link to={'/login'} className='links'>Entrar</Link></Button>
                <Modal onClose={() => setShow(false)} show={show} acao='Cadastro' message='Por favor, click em "entrar" para navegar'/>
            </form>
        </div>
    );
}

export default Cadastro;
export { contextValue };