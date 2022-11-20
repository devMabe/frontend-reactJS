import React, { ChangeEvent, useState } from "react";
import { onLogin } from "../auth/auth.api";
import { Link } from "react-router-dom";
import { ButtonGrettings } from "../components/Button.greetings";
import "../assets/css/Login.css";
import logo from "../assets/img/iconReact.png";

type HandleInputChange = ChangeEvent<HTMLInputElement>;

function LoginPageForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setCredentials({ ...credentials, [name]: value });
  };
  const [error, setError] = useState("");
  const [succes, setSucces] = useState({
    message: ""
  });
  const [userLogger, setUserLogger] = useState({
    email: "",
    id: "",
    accssesToken: "",
  });
  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    let response = await onLogin(credentials);

    if (response && response.error) {
      setSucces({message: ""});
      setCredentials({
        email: "",
        password: ""
      })
      setError(response.error);
    } else {
      setUserLogger(response);
      setSucces({
        message: "¡Ha iniciado sesión correctamente!"
      });
      setCredentials({
        email: "",
        password: "",
      });
      setError("");
    }
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            
            <img src={logo} id="icon" alt="User Icon" />
          </div>

          <form onSubmit={login}>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="email"
              placeholder="Correo electronico..."
              required
              onChange={handleInputChange}
              value={credentials.email}
              
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              required
              placeholder="Contraseña..."
              onChange={handleInputChange}
              value={credentials.password}
              min="6"
            />
            <input type="submit" className="fadeIn fourth" value="Inicar" />
          </form>

          <Link className="underlineHover" to="/register">
            ¿No tienes cuenta? ¡Registrate aquí !
          </Link>
          {error.length > 0 &&
            <div className="alert alert-danger" role="alert">
            {error}
            </div>
          }

          { succes.message !== '' && 
            <div className="alert alert-success" role="alert">
            {succes.message}
            </div>
          }



        </div>
      </div>

      <ButtonGrettings userLog={userLogger.accssesToken} />
    </>
  );
}

export default LoginPageForm;
