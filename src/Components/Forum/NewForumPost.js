import React , {Component} from 'react'

export default class NewForumPost extends Component{
    constructor(){
        this.state={
            title: "",
            content: ""
        }
    }

    handleSubmit = (event) =>{

    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input name="title" type="text" placeholder="Title"/>
                <input name="content" placeholder=""/>
                <input type="submit" />
            </form>
        </div>
    }
}

const ErrorHandler = errorMessage =>{
    return <div>
        {errorMessage}
    </div>
}