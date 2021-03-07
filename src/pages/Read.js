import React, { useState } from 'react';

import {Button,//import bootstrap
        Card,
        Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import Cards from '../components/Cards';//impotr card component

const Read = () => {
    return(
        <>
            <NavigationBar/>
               <Cards
                    header="This is from header one"
                    body="sample bodydddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
               />
               <Cards
                    header="This is from header two"
                    body="sample body 2dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
               />
        </>
    );
}

export default Read;