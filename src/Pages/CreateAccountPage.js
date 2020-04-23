import React from 'react'
import CreateAccountForm from '../Containers/CreateAccountForm'

const CreateAccountPage = (props) =>{
    return <div className="page-area">
        <CreateAccountForm login={props.login} />
    </div>
}

export default CreateAccountPage