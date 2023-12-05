
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Rodape from './components/Rodape';


function App() {
  return (

    <Container fluid className='p-0 overflow-hidden' >
      <BrowserRouter>
        <Row>
          <Col>
            {/*Menu*/}
            <Menu />
          </Col>
        </Row>
        <Row>
          <Col>

            {/*Conteudo*/}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </Col>
        </Row>

        <Row>
          <Col>
            {/*Rodapé*/}
            <Rodape />

          </Col>
        </Row>
      </BrowserRouter>
    </Container>

  );
}

export default App;
