import "../../../src/styles/index.css";
import "./ErrorPage.css"
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="parent">
        <div className="container-sm" id="error">
          <h1>Perdimos la ruta...</h1>
            <i>
              <p>{error.statusText || error.status}</p>
            </i>
        </div>
      </div>
    );
  } else{
    return(
        <div id="parent">
          <div className="container" id="error">
              <h1>Algo no anda bien...</h1>
              <p>Ocurrió un error inesperado</p>
          </div>
        </div>
    );
  }
}
