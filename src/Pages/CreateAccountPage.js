import React from "react";
import CreateAccountForm from "../Containers/CreateAccountForm";
import LoginForm from "../Containers/LoginForm";

const CreateAccountPage = (props) => {
  return (
    <div className="page-area" id="create-account">
      <div className="wrapper space-around">
        <div className="neu-container p-10">
          <CreateAccountForm login={props.login} />
        </div>
        <div className="neu-container p-10">
          <LoginForm login={props.login} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
