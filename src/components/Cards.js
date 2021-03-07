import React from 'react';

import {//import bootstrap
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = (props) => {
    return(
        <div className="nav justify-content-center">
            <Jumbotron>
                <h2>{props.header}</h2>
                    <p>{props.body}</p>
            </Jumbotron>     
        </div>
    );
}

export default Cards;