import React, { useState,useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import Cards from '../components/Cards';//impotr card component

const Read = () => {
   const [article,setArticle] = useState('')//state for article
   useEffect(() => {
        //fetch api here
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