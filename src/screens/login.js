import React from 'react';
import { useState } from 'react';
import { Modal } from '../components/modal'; 
import { InputPassLogin } from '../components/inputPassLogin';
import { Login } from '../components/login';
import { Button } from '../components/styleComponents';
import { Link } from 'react-router-dom'

const contextValue = React.createContext(null);

function LoginScreen() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <form className="App">
                <h1>Realize seu login</h1>
                <InputPassLogin onChange={(values) => console.log(values)} />
                <Button
                    onClick={e => {
                        e.preventDefault();
                        setShow(true);
                        Login();
                    }}
                >
                    Entrar
                </Button>
                <Button><Link to={'/update'} className='links'>Atualizar</Link></Button>
                <Modal onClose={() => setShow(false)} show={show} acao='Login' message='Por favor, click em "Atualizar" para atualizar seu cadastro'/>
            </form>
        </div>
    );
}

export default LoginScreen;
export { contextValue };