import "../assets/css/Login.css";
import { onGreetings } from "../auth/auth.api";
import { useState } from "react";
export function ButtonGrettings(props: any) {

  const [error, setError] = useState("");
  const [succes, setSucces] = useState("");
  

  const validar = async () => {

    const  response = await onGreetings(props.userLog);
    if (response && response.error) {
      setSucces("");
      console.log(response);
      setError(response.error.data.message);
    } else {
      setError("");
      console.log(response);
      
      setSucces(response.response);
    }
  };




  return (
    <>
      <button className="fadeIn fourth" onClick={validar}>
        Saludar
      </button>

      {error.length > 0 && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {succes !== "" && (
        <div className="alert alert-success text-center" role="alert">
          {succes}
          <a className="btn-sm btn-success "  href={'/'}>cerrar sesion</a>
        </div>
      )}
    </>
  );
}
