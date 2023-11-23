import "../../../src/styles/index.css";
import "./HomePage.css"
import RenderProperties from "../../components/renderProperties/RenderProperties";
import SideMenu from "../../components/sideMenu/SideMenu";
function HomePage() {
  return (
    <>      
      <SideMenu/>      
      <RenderProperties/>
    </>
  );
}
export default HomePage;
