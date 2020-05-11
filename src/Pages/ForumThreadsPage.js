import React, {Component} from 'react'
import {baseURL} from '../services/asyncHelper'
import {withRouter} from 'react-router'


class ForumThreadsPage extends Component{
    constructor(){
        super()
        this.state={
            title: "Threads Page",
            threads: []
        }
    }

    componentDidMount(){
        fetch(baseURL)
        .then(resp => resp.json)
        .then(threads => {
            this.setState({threads})
        })
    }

    render(){
        return <div className="page-area">
            <h2>{this.state.title}</h2>
            <div className="wrapper mx-2 neu-container">
                {this.state.threads.map(thread => <ForumThread thread={thread} />)}
            </div>
        </div>
    }
}

const ForumThread = (props) =>{
    return <div>
        <h3>{props.thread.title}</h3>
    </div>
}

export default withRouter(ForumThreadsPage)