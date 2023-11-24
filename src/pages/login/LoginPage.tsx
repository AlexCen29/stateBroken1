import React from "react";
import "../../../src/styles/index.css";
import "./LoginPage.css";
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  navigate('/home');
  };

  return (
    <div id="background">
      <div className="container-sm" id="login">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              // id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              // id="exampleInputPassword1"
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" id="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
