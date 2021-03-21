import React, { useState } from 'react';

import {Button,//import bootstrap
        Form,
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from '../components/NavigationBar';//import navigation bar

const Create = () => {

    const [heading,setHeading] = useState('');//state for article heading
    const [body,setBody] = useState('');//state for article body

    const [addMessage, setAddmessage] = useState('');//state for article added success
    const [error,setError] = useState('');//state for error message 

    

    const onClickSubmit = (e) => {  

        e.preventDefault();//disable the page reload
        
        fetch('http://localhost:4000/create',{
            method : 'POST',
            mode : 'cors',
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:4000/create'
            },
            body : JSON.stringify({
               heading,
               body
            })
        }).then(response => response.json())
        .then((data) => {
            if(data.message == ' '){
                setAddmessage('Successfully Created the Article');
            } else if(data.message == 'unable to create'){
                setAddmessage('Unable to create the article');
            }
        })
        .catch((error) => {
           setError('Internal Error');
        })
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
                    <small>{addMessage}</small>
                    <small>{error}</small>
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