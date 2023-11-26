import "../../../src/styles/index.css";
import "./ProfilePage.css";
import FormulariosPerfil from "../../components/formulariosPerfil/FormulariosPerfil";
import TarjetaInfoPerfil from "../../components/tarjetaInfoPerfil/TarjetaInfoPerfil";

function ProfilePage() {
  return (
    <div className="row" id="row-id">    
      <TarjetaInfoPerfil />
      <FormulariosPerfil />
    </div>
  );
}

export default ProfilePage;
