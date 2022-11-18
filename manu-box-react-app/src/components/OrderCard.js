import React from 'react';
import { Card, 
         Row, 
         Col, 
         Badge } from 'react-bootstrap';
         
import { useThemeHook } from '../GlobalComponents/ThemeProvider';

const OrderCard = (props) => {
    const [theme] = useThemeHook();
    return (
       <Card className={`mb-3`} border={theme? 'warning' : 'primary'}>
            <Card.Header>
                <b>{props.box}</b>
                <small className="float-end">{props.boxId}</small>
            </Card.Header>
            <Row className="p-2">
                <Col xs={3} sm={2}>
                    <Card.Img variant="top" src={props.image} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            <Badge pill bg="success">{props.description}</Badge>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
       </Card>
    );
};

export default OrderCard;