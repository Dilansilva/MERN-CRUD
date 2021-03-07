import React from 'react';

import {//import bootstrap
        Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Create</Navbar.Brand>
                <Navbar.Brand href="#home">Read</Navbar.Brand>
                <Navbar.Brand href="#home">Update</Navbar.Brand>
                <Navbar.Brand href="#home">Delete</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default NavigationBar;