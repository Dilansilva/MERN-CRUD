import React, { useState,useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import Cards from '../components/Cards';//impotr card component

import axios from 'axios';

const Read = () => {
   const [article,setArticle] = useState({
        header: 'Dilan',
        body: 'This is a sample body'
   })//state for article
   
   useEffect(() => {
     axios.get('http://localhost:4000/read')
     .then(function (response) {
       // handle success
       console.log(response);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     });
   },[]);

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