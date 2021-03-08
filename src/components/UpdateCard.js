import {//import bootstrap
        Jumbotron,
        Form,
        Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'

export class UpdateCard extends Component {
    render(props) {
        return (
            <Jumbotron>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Article Header</Form.Label>
                            <Form.Control 
                                type="text" 
                                defaultValue={this.props.defaultValueHeader}
                            />

                                <Form.Label>Article Body</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        defaultValue={this.props.defaultValueBody}
                                    />
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={this.props.onclick}
                    >
                        Update
                    </Button>
                </Form>
            </Jumbotron>
        )
    }
}

export default UpdateCard
