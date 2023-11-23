import "../../../src/styles/index.css";
import "./HomePage.css"
import RenderProperties from "../../components/renderProperties/RenderProperties";
import SideMenu from "../../components/sideMenu/SideMenu";
import ListaClientesRecientes from "../../components/listaClientesRecientes/ListaClientesRecientes";
function HomePage() {
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
