import NavigationBar from '../components/NavigationBar';//import navigation bar
import UpdateCard from '../components/UpdateCard';//import component for update

import React, { Component } from 'react'

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title : 'njnknkk',
                body : 'knknkn'
            }
        ];
      }
    render() {
        return (
            <div>
                <NavigationBar/>
                {this.state.map((data) => {
                        return(
                            <UpdateCard
                                defaultValueHeader={data.title}
                                defaultValueBody={data.body}
                                
                            />
                        )
                    })
                }
            </div>
        )
    }
}
