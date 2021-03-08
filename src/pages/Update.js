import React, { useState,useEffect } from 'react';

import NavigationBar from '../components/NavigationBar';//import navigation bar
import UpdateCard from '../components/UpdateCard';//import component for update

const Update = () => {
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