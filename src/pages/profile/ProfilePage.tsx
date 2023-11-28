import "../../../src/styles/index.css";
import "./ProfilePage.css";
import FormulariosPerfil from "../../components/formulariosPerfil/FormulariosPerfil";
import TarjetaInfoPerfil from "../../components/tarjetaInfoPerfil/TarjetaInfoPerfil";
import SideMenu from "../../components/sideMenu/SideMenu";

function ProfilePage() {
  return (
    <div className="row" id="row-id">    
      <SideMenu/>
      <TarjetaInfoPerfil />
      
    </div>
  );
}

export default ProfilePage;
