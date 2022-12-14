import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cadastro from "./screens/cadastro";
import LoginScreen from "./screens/login";
import Update from "./screens/update";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Cadastro />}/>
            </Routes>
            <Routes>
                <Route exact path='/login' element={<LoginScreen />}/>
            </Routes>
            <Routes>
                <Route exact path='/update' element={<Update />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;