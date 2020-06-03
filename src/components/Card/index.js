import React from "react";
import { CardDeck, Card } from "react-bootstrap";
function MakeCard(Props) {
    return(
        <>
           <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Props.Img} />
                    <Card.Body>
                        <Card.Title>{Props.title}</Card.Title>
                        <Card.Text>
                        {Props.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )  
}

export default MakeCard;