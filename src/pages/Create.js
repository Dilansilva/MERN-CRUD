import React from 'react';
import {Button,
        Form,
        } from 'react-bootstrap';

const Create = () => {
    return(
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Heading here</Form.Label>
                        <Form.Control type="text" placeholder="Heading" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Article
                </Button>
            </Form>
        </div>
    );
}

export default Create;