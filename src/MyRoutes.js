import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js"
import Avaliacao from "./pages/Avaliaca.js";
import Footer from "./components/Footer.js";
import Matricula from "./pages/Matricula.js";
import CardPayment from "./pages/CardPayment.js";
import PixPayment from "./pages/PixPayment.js";
import NavigateVerify from "./components/NavigateVerify.js";
import ConsultMatricula from "./pages/ConsultMatricula.js";
import CardConsultTable from "./components/CardConsultTable.js";
import ConsultCodigo from "./pages/ConsultCodigo.js";


export default function MyRoutes(){
    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/avaliaçao" element={<NavigateVerify component={<Avaliacao/>}/>}/>
                <Route path="/matricula" element={<NavigateVerify component={<Matricula/>}/>}/>
                <Route path="/pagamento-cartao" element={<NavigateVerify component={<CardPayment/>}/>}/>
                <Route path="/pagamento-pix" element={<NavigateVerify component={<PixPayment/>}/>}/>
                <Route path="/pagamento-matricula" element={<NavigateVerify component={<ConsultMatricula/>}/>}/>
                <Route path="/tableconsult" element={<NavigateVerify component={<CardConsultTable/>}/>}/>
                <Route path="/consultcodigo" element={<NavigateVerify component={<ConsultCodigo/>}/>}/>

            </Routes>
            <Footer/>
        </Router>
    )
}