import React, { useState } from 'react';
import './componentsMenu.css';
import Logo from '../images/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';


import { Link, useLocation,  } from 'react-router-dom'


function Menu() {
    //const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;
    return (
        <div>
            <Navbar color="dark" dark expand="md" className='barra'>
                <Link to="/" className='navbar-brand'><img src={Logo} alt='logo' width={130}></img></Link>
                <NavbarToggler onClick={toggle} className='nav' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/sobre" className={location === '/sobre' ? 'nav-link active' : 'nav-link'}>Sobre nós</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contato" className={location === '/contato' ? 'nav-link active' : 'nav-link'}>Contato</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <hr className='hr mt-0'></hr>
        </div>
    )
}
export default Menu