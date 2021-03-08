import React, { useState,useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import UpdateCard from '../components/UpdateCard';//import component for update

const Update = () => {

    const [Article,setArticle] = useState('');//state for article retreive

    const [updateHeader,setupdateHeader] = useState('');//state for article header
    const [updateBody,setupdateBody] = useState('');//state for article body
    
    return(
        <div>
            <NavigationBar/>
            <UpdateCard
                defaultValueHeader="knknk"
                defaultValueBody="jknknkn"
                
            />
        </div>
    );
}

export default Update;