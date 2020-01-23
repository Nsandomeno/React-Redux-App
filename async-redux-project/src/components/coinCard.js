import React from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import '../App.css';

function CoinCard(props) {
    return(
        <Card key={props.coin.id}>
            <CardBody className="CoinCard">
                <CardTitle> {props.coin.name} ({props.coin.symbol}) </CardTitle>
                <CardSubtitle> ${props.coin.price_usd} </CardSubtitle>
                <CardText>
                    <ul>
                        <li> One day change: {props.coin.percent_change_24h}% </li>
                        <li> One hour change: {props.coin.percent_change_1h}% </li>
                    </ul>
                </CardText>
            </CardBody>
        </Card>
    )
}
export default CoinCard;