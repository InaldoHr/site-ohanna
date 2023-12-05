import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom'
import './componentsRodape.css';
import logo from '../images/logo.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";






function Rodape() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;

    return (
        <footer className="rodape">
            <hr className='hrpe'></hr>
            <Container>
                <Row className='text-center'>
                    <Col sm="6" md="3" className=''>
                        <img className='img-fluid d-block mx-auto' src={logo}></img>

                    </Col>

                    <Col xs="12" sm="6" md="3" >
                        <h5 className='title'>Cantinho da Ohana</h5>
                        <p>Endereço:  Av. Darcy Vieira Marcondes, n° 218 - Res. Comercial Cidade Vista Alegre, Pindamonhangaba - SP, 12442-010</p>
                        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
                    </Col>
                    <Col xs="12" sm="12" md="3" >


                        <ul className={`list-unstyled ${isOpen ? 'open' : ''}`}>
                            <li className='title'>Menu</li>
                            <li><Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
                            <li><Link to="/sobre" className={location === '/sobre' ? 'nav-link active' : 'nav-link'}>Sobre</Link></li>
                            <li><Link to="/contato" className={location === '/contato' ? 'nav-link active' : 'nav-link'}>Contato</Link></li>
                        </ul>
                    </Col>
                    <Col xs="12" sm="12" md="3" >
                        <ul className='semana'>
                            <li className='horario'>Horários de funcionamento</li>
                            <li>segunda-feira <b>*Fechado*</b></li>
                            <li>terça-feira	<b>11:00–19:00</b></li>
                            <li>quarta-feira <b>11:00–19:00</b></li>
                            <li>quinta-feira <b>11:00–23:00</b></li>
                            <li>sexta-feira	<b>11:00–23:00</b></li>
                            <li>sábado <b>11:00–23:00</b></li>
                            <li>domingo	<b>11:00–23:00</b></li>

                        </ul>
                    </Col>

                </Row>
                <Row className='icons'>
                    <Col className='icons'>
                        <a className='zapp' href='https://api.whatsapp.com/send/?phone=5512982365360&text&type=phone_number&app_absent=0s' target="_blank" rel="noopener noreferrer" ><IoLogoWhatsapp />
                        </a>
                        <a className='facee' href='https://www.facebook.com/cantinhodaohana?locale=pt_BR' target="_blank" rel="noopener noreferrer"><FaFacebook />

                        </a>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Rodape;