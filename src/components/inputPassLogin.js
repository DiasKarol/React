import React from 'react';
import formData from 'react-formdata';
import { Inputs } from './styleComponents';

var InputPassLogin = formData(function ({ ocHook }) {
    return (
        <>
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
        </>
    );
});

export { InputPassLogin };