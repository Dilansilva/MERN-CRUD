import React from 'react';

import {Button,//import bootstrap
        Form,
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = () => {
    return(
        <Jumbotron>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Heading here</Form.Label>
                        <Form.Control type="text" placeholder="Heading" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={12} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Article
                </Button>
            </Form>
        </Jumbotron>
    );
}

export default Create;