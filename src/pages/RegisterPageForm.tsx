import React, { ChangeEvent, useState } from "react";
import { onRegister } from "../auth/auth.api";
import { Link } from "react-router-dom";
import logo from "../assets/img/usuario.png";
type HandleInputChange = ChangeEvent<HTMLInputElement>;

function RegisterPageForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setData({ ...data, [name]: value });
  };
  const [error, setError] = useState("");
  const [succes, setSucces] = useState({
    message: "",
  });
  const register = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await onRegister(data);

    if (response && response.error) {
      setSucces({
        message: "",
      });
      setData({
        name: "",
        password: "",
        email: ""
      })
      setError(response.error);
      
    } else {
      setError("")
      setData({
        email: "",
        password: "",
        name: "",
      });
      setSucces({
        message: "¡Cuenta creada correctamente!",
      });
    }
  };

  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
        <h3 className="mt-3">Crea tu cuenta</h3>
          <div className="fadeIn first">
            <img src={logo}  id="iconUser" alt="User Icon" />
          </div>

          <form onSubmit={register}>
            <input
              type="email"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Correo electronico..."
              required
              onChange={handleInputChange}
              value={data.email}
            />

            <input
              type="text"
              id="text"
              className="fadeIn second"
              name="name"
              placeholder="Nombre completo..."
              required
              onChange={handleInputChange}
              value={data.name}
            />

            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              required
              placeholder="Contraseña..."
              onChange={handleInputChange}
              value={data.password}
              minLength={6}
            />
            <input type="submit" className="fadeIn fourth" value="Crear cuenta" />
          </form>

          <Link className="underlineHover" to="/">
            ¿Tienes cuenta? ! Inicia sesión aquí !
          </Link>
          {error.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {succes.message !== "" && (
            <div className="alert alert-success" role="alert">
              {succes.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RegisterPageForm;
