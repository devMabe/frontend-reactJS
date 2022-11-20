import React, { ChangeEvent, useState } from "react";
import { onRegister } from "../auth/auth.api";
import {NavLink} from 'react-router-dom';

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

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    

    const response = await onRegister(data);

    if (response && response.error) {
      setError(response.error);
    }
  };

  return (
    <form onSubmit={register}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Correo Electronico"
        name="email"
        value={data.email}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={data.password}
        placeholder="Contraseña"
        name="password"
        onChange={handleInputChange}
        required
      />
      

      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        value={data.name}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Register</button>
      <NavLink to="/"> ¿Tienes cuenta ? ¡Inicia sesión aquí!</NavLink>
      {error.length > 0 && <p>{error}</p>}
    </form>
  );
}

export default RegisterPageForm;
