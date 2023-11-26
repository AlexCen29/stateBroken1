import "../../../src/styles/index.css";
import "./ProfilePage.css";
import FormulariosPerfil from "../../components/formulariosPerfil/FormulariosPerfil";
import TarjetaInfoPerfil from "../../components/tarjetaInfoPerfil/TarjetaInfoPerfil";

function ProfilePage() {
  return (
    <div id="profile">
      <div className="row">
        <div id="left-col">
          <TarjetaInfoPerfil />
        </div>
        <div id="right-col">
          <FormulariosPerfil />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
