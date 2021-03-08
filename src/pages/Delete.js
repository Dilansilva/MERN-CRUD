import React, { Component } from 'react';
import DeleteCard from '../components/DeleteCard';//import delete card

export default class Delete extends Component {
    constructor(props){
        super(props);
        this.state = [

        ];
    }
    render() {
        return (
            <div>
                <DeleteCard
                    heading="knkn"
                    body="knknk"
                />
            </div>
        )
    }
}
