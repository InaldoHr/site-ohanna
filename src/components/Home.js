import { Col, Row } from "reactstrap";
import Carousell from "./Carousell";
import Cards from "./Cards";
import marmita from "../images/marmita.jpg";
import acai from "../images/acai.jpg";
import hamburguer from "../images/hamburguer.png";

function Home() {
    return (
        <div>
            <Carousell />

            <Row className="mt-4">
                <Col xs="12" sm="6" md="4">
                    <Cards img={marmita} titulo="Marmitas" descricao="Marmitas com várias opções de proteínas e guarnições!" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Cards img={acai} titulo="Gelados" descricao="Várias opções de gelados para refrescar o seu dia!" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Cards img={hamburguer} titulo="Hamburguer Gourmet" descricao="Utiliza ingredientes de alta qualidade com ótimos sabores" />
                </Col>
            </Row>
        </div>
    );
}

export default Home;