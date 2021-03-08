import React from 'react';

import {//import bootstrap
        Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Create</Navbar.Brand>
                <Navbar.Brand href="/read">Read</Navbar.Brand>
                <Navbar.Brand href="/update">Update</Navbar.Brand>
                <Navbar.Brand href="/delete">Delete</Navbar.Brand>
            </Navbar>
        </>
    );
}

export default NavigationBar;