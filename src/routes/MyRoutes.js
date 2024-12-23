import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/Home/Home.js";
import Avaliacao from "../pages/rate/Avaliaca.js";
import Footer from "../components/footer/Footer.js";
import Matricula from "../pages/Matricula/Matricula.js";
import CardPayment from "../pages/payments/cardPayment/CardPayment.js";
import PixPayment from "../pages/payments/pixPayment/PixPayment.js";
import NavigateVerify from "../components/verifyNavigate/NavigateVerify.js";
import ConsultMatricula from "../pages/ConsultPaymentMatricula/ConsultMatricula.js";
import CardConsultTable from "../components/cards/cardTableConsultMatricula/CardConsultTable.js";
import ConsultCodigo from "../pages/consultMatricula/ConsultCodigo.js";


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