import React, {Component} from 'react'
import {withRouter} from 'react-router'

class UserHomePage extends Component{
    constructor(){
        super()
        this.state={
            projects: []
        }
    }

    renderProjects = () =>{
        this.state.projects.map(project => <div className="neu-container p-2">
            <h3>{project.name}</h3>
            <div className="neu-container inverse">
                <div id={project.name + likes + id}>
                    Likes: {project.likeCount}
                </div>
                <div id={project.name + projects.bookCount + project.id}>
                    {project.bookCount}
                </div>
            </div>
        </div>)
    }

    render(){
        return <div className="page-area">
            <div id="user-landing-jumbotron" className="jumbotron">
                User Landing Jumbotron
            </div>
            <div className="wrapper col">
                <h2>Recent Projects</h2>
                <div className="wrapper">
                    {this.renderProjects()}
                </div>
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