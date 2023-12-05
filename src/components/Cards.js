import React from 'react';
import './componentsCards.css';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';



function Cards({ img, titulo, descricao }) {

    return (
        <div className="center-container">
            <Card className='card'
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody className="card-body">
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>

                    <CardText>
                        {descricao}
                    </CardText>
                    <Button className='botao'>
                        Peça já
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}
export default Cards;