import './componentsContato.css';
import { Col, Row } from "reactstrap";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import ItemForm from "../components/ItemForm";
import atendente from "../images/atendente.png";

function Contato() {
    return (
        <div className='contato'>
            <Row className='mt-5 p-5'>
                <Col xs="12" md="6">
                    <Row className='text-center p-3'>
                        <Col xs="4" md="6">
                            <p>Whatsapp</p>
                            <a className='zap' href='https://api.whatsapp.com/send/?phone=5512982365360&text&type=phone_number&app_absent=0s' target="_blank" rel="noopener noreferrer" ><IoLogoWhatsapp /></a>
                        </Col>
                        <Col xs="4" md="6">
                            <p>Facebook</p>
                            <a className='face' href='https://www.facebook.com/cantinhodaohana?locale=pt_BR' target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        </Col>
                        <Col xs="4" md="6">
                            <p>Instagram</p>
                            <a className='insta' href='https://www.instagram.com/cantinhodaohana.oficial/' target="_blank" rel="noopener noreferrer"><SlSocialInstagram /> </a>
                        </Col>
                        <Col xs="12" md="6">
                            <p>Ligue direto</p>
                            <p className='call'><IoCall /></p>
                            <p className=''>12 98236-5360</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="6">
                    <h1>Mande uma Mensagem:</h1>
                    <ItemForm label="Nome" name="nome" type="text" ph="Digite seu nome" />
                    <ItemForm label="Email" name="email" type="email" ph="Digite seu email" />
                    <ItemForm label="Telefone" name="telefone" type="tel" ph="Digite seu telefone" />
                    <ItemForm label="Assunto" name="assunto" type="text" ph="Informe o assunto da sua mensagem" />
                    <ItemForm label="Mensagem" name="mensagem" type="textarea" ph="Digite a mensagem a ser encaminhada para nossa equipe." />
                </Col>
            </Row>
        </div>
    )
}
export default Contato;