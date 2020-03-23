import React from "react";
import { postSignUp, changeSignUpInput } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function SignUp(props) {
  const history = useHistory();

  const handleChange = e => {
    props.changeSignUpInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onRegister = e => {
    e.preventDefault();
    props.postSignUp({
      username: props.username,
      password: props.password,
      department: props.department
    });
    history.push("/users");
  };

  if (props.isLoading) {
    return <div>Please Wait...</div>;
  }

  return (
    <div>
      <h3> Sign Up Here!!! </h3>

      <br></br>
      <form onSubmit={onRegister}>
        <label>
          Username: <br></br>
          <input
            type="text"
            name="username"
            placeholder="Please enter username"
            value={props.username}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <input
            type="password"
            name="password"
            placeholder="Please enter Password"
            value={props.password}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label>
          Department: <br></br>
          <input
            type="text"
            name="department"
            placeholder="Please confirm department"
            value={props.department}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <button> Sign Up </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.registerReducer.registerInput.username,
    password: state.registerReducer.registerInput.password,
    department: state.registerReducer.registerInput.department,
    isLoading: state.registerReducer.isLoading
  };
};

export default connect(mapStateToProps, { changeSignUpInput, postSignUp })(
  SignUp
);
