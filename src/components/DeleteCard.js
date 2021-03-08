import React, { Component } from 'react';

import {//import bootstrap
    Jumbotron,
    Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DeleteCard extends Component {
    render() {
        return (
           <Jumbotron>
                <h1>{this.props.heading}</h1>
                    <p>
                        {this.props.body}
                    </p>
            <p>
                <Button 
                    variant="primary"
                    onClick={this.props.click}
                >Delete</Button>
            </p>
           </Jumbotron>
        )
    }
}
