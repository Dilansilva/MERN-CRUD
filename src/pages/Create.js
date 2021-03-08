import React, { useState } from 'react';

import {Button,//import bootstrap
        Form,
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from '../components/NavigationBar';//import navigation bar

const axios = require('axios');//import axios

const Create = () => {

    const [heading,setHeading] = useState('');//state for article heading
    const [body,setBody] = useState('');//state for article body

    const onClickSubmit = (e) => {  
        e.preventDefault();//disable the page reload
        
          axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `http://localhost:4000/create`,
            params: {
                heading : heading,
                body : body
            }
        })
        .then((response) => response.data)
        .catch((error) => error);
        
    }

    return(
        <>
            <NavigationBar/>
        <Jumbotron>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Heading here</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Heading"
                        onChange={(e) => {setHeading(e.target.value)}}
                        
                    />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Article Body</Form.Label>
                    <Form.Control 
                        placeholder="Article Body is here" 
                        as="textarea" rows={11} 
                        onChange={(e) => {setBody(e.target.value)}}
                    />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit"
                onClick={onClickSubmit}
            >
                Add Article
            </Button>
        </Form>
    </Jumbotron>
        </>
    );
}

export default Create;