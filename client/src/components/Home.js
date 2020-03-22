import React from "react";
import { NavLink } from "react-router-dom";




function Home() {

    return (
        <div>
            <h3> Welcome to Auth 3 Project Front-end</h3>
             <NavLink exact to="/register">
              <button className="signupButton"> Sign Up </button>
            </NavLink>
            <NavLink exact to="/login">
              <button className="loginButton">Login </button>
            </NavLink>
            <NavLink exact to="/users">
              <button> Users </button>
            </NavLink>

        </div>
    )


}

export default Home;