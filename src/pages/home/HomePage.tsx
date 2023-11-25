import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import "../../../src/styles/index.css";
import "./HomePage.css"
import RenderProperties from "../../components/renderProperties/RenderProperties";
import SideMenu from "../../components/sideMenu/SideMenu";
import ListaClientesRecientes from "../../components/listaClientesRecientes/ListaClientesRecientes";


function HomePage() {
  /* let navigate = useNavigate(); */

 /*  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token'))
      ?.split('=')[1];

    if (!token) {
      navigate('/');
    } else {
      fetch(`http://jimenezmiapi.somee.com/api/Login/ValidarToken?token=${token}`, {
  method: 'HEAD',
})
.then((response) => {
  if (!response.ok) {
    navigate('/');
  }
})
.catch((error) => {
  console.error('Error:', error);
  navigate('/');
});
    }
  }, []); */
  return (
    <>
      <SideMenu />
      <RenderProperties />
      <div>
        <ListaClientesRecientes />
      </div>
    </>
  );
}
export default HomePage;
