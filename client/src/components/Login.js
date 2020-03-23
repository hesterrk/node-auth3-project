import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loginChangeInput, postLogin } from "./actions/actionCreators";

function Login(props) {
  const history = useHistory();

  const handleChange = e => {
    props.loginChangeInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    props.postLogin({
      username: props.username,
      password: props.password,
      department: props.department
    })
    history.push("/users");
  };

  return (
    <div>
      <h3> Login Here </h3>
      <form onSubmit={onLogin}>
        <label>
          Username: <br></br>
          <input
            type="text"
            name="username"
            placeholder="Please enter username"
            value={props.username}
            onChange={handleChange}
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
          />
        </label>
        <br></br>
        <label>
          Department: <br></br>
          <input
            type="text"
            name="department"
            placeholder="Please enter department"
            value={props.department}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.loginReducer.loginInput.username,
    password: state.loginReducer.loginInput.password,
    department: state.loginReducer.loginInput.department,
    isLoading: state.loginReducer.isLoading
  };
};

export default connect(mapStateToProps, { loginChangeInput, postLogin })(Login);
