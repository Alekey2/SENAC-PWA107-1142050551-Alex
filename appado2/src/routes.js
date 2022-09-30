import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/home.js";
import Cadastro from "./pages/Cadastro/cadastro.js";
import Financiamento from "./pages/Financiamento/financiamento.js";
import Movimentacao from "./pages/Movimentacao/movimentacao.js";
import Header from "./componentes/Header/header.js"
import Sobre from "./pages/SobreNos/sobre.js";

function RouterApp (){
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path= '/Cadastro' element={<Cadastro/>}/>
            <Route path='/Financiamento' element={<Financiamento/>}/>
            <Route path='/SobreNos' element={<Sobre/>}/>
            <Route path='/Header' element={<Header/>}/>
            <Route path='/Movimentacao' element={<Movimentacao/>}/>
        </Routes>
    </BrowserRouter>
    );
}
export default RouterApp;
