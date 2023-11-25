import React, { FormEvent, useState } from "react";
import "../../../src/styles/index.css";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

interface LoginResponse {
  token: string,
  idEmpleado: number,
  nombreEmpleado: string;

}

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};

const LoginPage = () => {
  const [usercorreo, setUsercorreo] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const responsi = await fetch("http://jimenezmiapi.somee.com/api/Login/Acceso", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: usercorreo,
          contrasenia: userpassword,
        }),
      });

      if (responsi.ok) {
        const data: LoginResponse = await responsi.json();
        let date = new Date();

        date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // un dia de expiracion
        document.cookie = `token=${data.token}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `idEmpleado=${data.idEmpleado}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `nombreEmpleado=${data.nombreEmpleado}; expires=${date.toUTCString()}; path=/`;
        console.log(data.token);
        console.log(data.idEmpleado);
        console.log(data.nombreEmpleado);
        navigate("/home");
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.log(error);
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div id="background">
      <div className="container-sm" id="login">
        <h1>Log in</h1>
        {error && <Alert message={error} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setUsercorreo(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setUserpassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary" id="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;