import React from "react";
import CreateAccountForm from "../Containers/CreateAccountForm";
import LoginForm from "../Containers/LoginForm";

const CreateAccountPage = (props) => {
  return (
    <div className="page-area" id="create-account">
      <div className="wrapper space-around">
    
          <CreateAccountForm login={props.login} />
     
   
          <LoginForm login={props.login} />
     
      </div>
    </div>
  );
};

export default CreateAccountPage;
