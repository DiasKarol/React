import React from 'react';
import formData from 'react-formdata';

var InputPass = formData(function ({ ocHook }) {
    return (
        <>
            <input
                id='name'
                type="text"
                name="Nome"
                placeholder="Nome"
                pattern="/^[a-z]{3,}$/gim"
                onChange={ocHook}
                required
            />
            <input
                id='email'
                type="email"
                name="Email"
                placeholder="E-mail"
                pattern="/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim"
                onChange={ocHook}
                required
            />
            <input
                id='password'
                type="password"
                name="Senha"
                placeholder="Senha"
                pattern="/^\w{1,}$/gim"
                onChange={ocHook}
                required
            />
        </>
    );
});

export { InputPass };
