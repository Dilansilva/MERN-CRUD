import NavigationBar from '../components/NavigationBar';//import navigation bar
import UpdateCard from '../components/UpdateCard';//import component for update

import React, { Component } from 'react'

export default class Update extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <UpdateCard/>
            </div>
        )
    }
}
