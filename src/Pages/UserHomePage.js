import React, {Component} from 'react'
import {withRouter} from 'react-router'

class UserHomePage extends Component{
    render(){
        return <div className="page-area">
            <div id="user-landing-jumbotron" className="jumbotron">
                User Landing Jumbotron
            </div>
            <div className="row">
                <div className="col neu-container">Section 1</div>
                <div className="col neu-container">Section 2</div>
                <div className="col neu-container">Section 3</div>
            </div>
        </div>
    }
}

export default withRouter(UserHomePage)