import '../assets/css/Login.css';

export function ButtonGrettings(props: any) {
  let token = props.userLog; 

  const validar = () => {
    alert('token:' + token)
  };

  return <button className='fadeIn fourth' onClick={validar}>Saludar</button>;
}
