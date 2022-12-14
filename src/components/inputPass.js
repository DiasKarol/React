import React from 'react';
import formData from 'react-formdata';
import { Inputs } from './styleComponents';

var InputPass = formData(function ({ ocHook }) {
    return (
        <>
            <Inputs
                id="name"
                type="text"
                name="Nome"
                placeholder="Nome"
                pattern="/^[a-z]{3,}$/gim"
                onChange={ocHook}
                required
            />
            <Inputs
                id="email"
                type="email"
                name="Email"
                placeholder="E-mail"
                pattern="/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim"
                onChange={ocHook}
                required
            />
            <Inputs
                id="password"
                type="password"
                name="Senha"
                placeholder="Senha"
                pattern="/^\w{1,}$/gim"
                onChange={ocHook}
                required
            />
            <Inputs
                id="firstName"
                type="text"
                name="Primeiro Nome"
                placeholder="Primeiro nome"
                pattern="/^[a-z]{3,}$/gim"
                onChange={ocHook}
                required
            />
            <Inputs
                id="lastName"
                type="text"
                name="Sobrenome"
                placeholder="Sobrenome"
                pattern="/^[a-z]{3,}$/gim"
                onChange={ocHook}
                required
            />
        </>
    );
});

export { InputPass };