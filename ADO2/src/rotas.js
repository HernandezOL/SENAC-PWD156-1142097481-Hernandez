import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/index.js';
import Cadastro from './Pages/Cadastro/cadastro.js';
import Financiamento from './Pages/Financiamento/financiamento.js';
import ContaCorrente from './Pages/ContaCorrente/conta.js';
import SobreNos from './Pages/SobreNos/sobre.js';
import Header from './Pages/Header/header.js';




function RouterApp(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/financiamento" element={<Financiamento/>}></Route>
                <Route path="/conta" element={<ContaCorrente/>}></Route>
                <Route path="/sobre" element={<SobreNos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;