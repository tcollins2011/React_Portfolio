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
                        <Card.Text>
                            <a href = {Props.githubRepo}> GitHub Repository </a>
                        </Card.Text>
                        <a href = {Props.deployedLink}> Deployed Website </a>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )  
}

export default MakeCard;