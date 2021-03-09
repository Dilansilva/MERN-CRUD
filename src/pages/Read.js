import React, { useState,useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import Cards from '../components/Cards';//impotr card component

import axios from 'axios';

const Read = () => {

   const [article,setArticle] = useState({})//state for article
   
   useEffect(() => {
     axios.get('http://localhost:4000/read')
     .then(function (response) {
       // handle succes
       setArticle(response.data);
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
         
               {
                article.map((data) => {
                       return(
                        <Cards
                          key={data._id}
                          header={data.article_heading}
                          body={data.article_body}
                        />
                      );
                 })
                }
        </>
    );
}

export default Read;