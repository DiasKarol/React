import React from 'react';
//import { token } from './login';

export function Modal(props) {

    //const {username} = useContext(token)

    if (!props.show) {
        return null
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='contentModal' onClick={e => e.stopPropagation()}>
                <div className='headerModal'>
                    <p>{props.acao} realizado com sucesso!</p>
                    <button onClick={props.onClose} className='button'>X</button>
                </div>
                <div className='bodyModal'>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
        
    )
}