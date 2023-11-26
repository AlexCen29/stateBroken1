import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../../src/styles/index.css";
import "./HomePage.css";
import RenderProperties from "../../components/renderProperties/RenderProperties";
import SideMenu from "../../components/sideMenu/SideMenu";
import ListaClientesRecientes from "../../components/listaClientesRecientes/ListaClientesRecientes";
import EventosProximos from "../../components/eventosProximos/EventosProximos";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    } else {
      fetch(
        `http://jimenezmiapi.somee.com/api/Login/ValidarToken?token=${token}`,
        {
          method: "HEAD",
        }
      )
        .then((response) => {
          if (!response.ok) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          navigate("/");
        });
    }
  }, []);
  return (
    <>
      <SideMenu />
      <div id="home-page">
        <div className="row">
          <RenderProperties />
          <EventosProximos />
        </div>
        <div className="row">
          <ListaClientesRecientes />
        </div>
      </div>
    </>
  );
}
export default HomePage;
