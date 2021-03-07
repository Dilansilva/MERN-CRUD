import React from 'react';

import {Button,//import bootstrap
        Form,
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from '../components/NavigationBar';//import navigation bar

const Create = () => {
    return(
        <>
            <NavigationBar/>
        <Jumbotron>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Heading here</Form.Label>
                    <Form.Control type="text" placeholder="Heading" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                    <Form.Control placeholder="Article Body is here" as="textarea" rows={11} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Article
            </Button>
        </Form>
    </Jumbotron>
        </>
    );
}

export default Create;