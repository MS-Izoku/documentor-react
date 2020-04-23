import React from 'react'
import CreateAccountForm from '../Containers/CreateAccountForm'
import LoginForm from '../Containers/LoginForm'

const CreateAccountPage = (props) =>{
    return <div className="page-area">
        <CreateAccountForm login={props.login} />
        <LoginForm login={props.login} />
    </div>
}

export default CreateAccountPage