//import { Modal } from './modal';
import React, { createContext, useContext, useEffect, useState } from 'react';

const token = createContext({ email: '', password: '' });
export const UseToken = () => {
    return useContext(token);
};

export const TokenProvider = props => {
    const [apiData, setApiData] = useState([]);
    const UseTokenObject = {
        apiValue: {
            apiData,
            setApiData
        }
    };
    return (
        <UseToken.Provider value={UseTokenObject}>
            {props.children}
        </UseToken.Provider>
    );
};

function Login() {
    const {
        apiValue: { apiData, setApiData }
    } = UseToken();

    const body = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    useEffect(() => {
        fetch('localhost:8000/login', options)
            .then(response => {
                if (response.status === 202) {
                    return response.json();
                }
                return console.error('Ocorreu um erro!');
            })
            .then((response) => {
                setApiData(response);
            })
            .catch(() => {
                return new Error(`Erro na resposta do servidor código`);
            });
    });
}

export { Login };
