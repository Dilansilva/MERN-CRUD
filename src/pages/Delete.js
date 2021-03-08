import React, { Component } from 'react';
import DeleteCard from '../components/DeleteCard';//import delete card
import NavigationBar from '../components/NavigationBar';//import navigation bar

export default class Delete extends Component {
    constructor(props){
        super(props);
        this.state = [

        ];
    }
    render() {
        return (
            <>
            <NavigationBar/>
                <DeleteCard
                    heading="knkn"
                    body="knknk"
                    // click={}
                />
                
            </>
        )
    }
}
