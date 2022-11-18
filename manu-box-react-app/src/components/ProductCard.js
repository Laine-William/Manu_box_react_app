// 
import React from 'react';

// 
import { Button, Card} from 'react-bootstrap';

// 
import { useCart } from 'react-use-cart';

// 
const ProductCard = (props) => {

    // 
    let { image, price, title} = props.data;

    // 
    const { addItem } = useCart();

    // 
    const addToCart = () =>{

        // 
        addItem(props.data);

    //console.log(props.data);
    }

    // 
    return (

        // 
        <Card 
            style={{ width: '18rem', height: 'auto' }}
                     className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}>

                {/*  */}
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>

                    {/*  */}
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            
            {/*  */}
            <Card.Body>

                {/*  */}
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title}
                </Card.Title>

                {/*  */}
                <Card.Title>
                    <span className="h3">{price}</span> m²
                </Card.Title>

                {/*  */}
                <Button
                    onClick={()=> addToCart()}
                    
                    className={`d-flex align-item-center m-auto border-0`}>
                    Ajouter
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;