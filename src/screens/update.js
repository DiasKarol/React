import React from 'react';
import { useState } from 'react';
import { Modal } from '../components/modal'; 
import { InputPass } from '../components/inputPass';
import { updateUser } from '../components/Update';
import { Button } from '../components/styleComponents';

const contextValue = React.createContext(null);

function Update() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <form className="App">
                <h1>Atualize seu cadastro</h1>
                <InputPass onChange={(values) => console.log(values)} />
                <Button
                    onClick={e => {
                        e.preventDefault();
                        setShow(true);
                        updateUser();
                    }}
                >
                    Enviar
                </Button>
                <Modal onClose={() => setShow(false)} show={show} acao='Atualização' message='Agradecemos por atualizar seu cadastro'/>
            </form>
        </div>
    );
}

export default Update;
export { contextValue };