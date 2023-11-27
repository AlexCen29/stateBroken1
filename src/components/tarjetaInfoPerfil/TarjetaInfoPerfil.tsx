import { useState, useEffect } from "react";
import "../../../src/styles/index.css";
import "./TarjetaInfoPerfil.css";
import avatarImage from "/img/Avatar1.jpg";

interface Empleado {
  id: number;
  nombre: string;
  apellMater: string;
  apellPater: string;
  curp: string;
  sexo: string;
  direccion: string;
  rol_fk: number;
  correo_electronico: string;
  fechaNac: string;
  fechaContratacion: string;
  estatus: number;
  imgPerfil: string;
  rol: {
    id: number;
    nombre: string;
    descripcion: string;
  }
}

function TarjetaInfoPerfil() {
  const [empleado, setEmpleado] = useState<Empleado | null>(null);

  useEffect(() => {
    const idEmpleado = localStorage.getItem("idEmpleado");
    const tu_token = localStorage.getItem("token");
    if (idEmpleado) {
      fetch(`https://jimenezmiapi.somee.com/api/Empleado/${idEmpleado}`,{
        method: "GET",
        headers: {
          'Authorization': `Bearer ${tu_token}`
        },
      
      })
        .then(response => response.json())
        .then(data => setEmpleado(data))
        .catch(error => console.error(error));
    }
  }, []);

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container infoBase">
      <div className="container encabezado">
        <img src={/* empleado.imgPerfil ||  */avatarImage} alt="Profile" />
        <div>
          <h2>{`${empleado.nombre} ${empleado.apellPater} ${empleado.apellMater}`}</h2>
          <span>{empleado.rol.nombre}</span>
          <span>{empleado.correo_electronico}</span>
        </div>
      </div>
      <div className="container cuerpo">
        <div className="container descripcion">
          <p><strong>CURP</strong></p>
          <p><strong>Dirección</strong></p>
          <p><strong>Fecha de nacimiento</strong></p>
          <p><strong>Sexo</strong></p>
        </div>
        <div className="container data">
          <p>{empleado.curp}</p>
          <p>{empleado.direccion}</p>
          <p>{empleado.fechaNac}</p>
          <p>{empleado.sexo}</p>
        </div>
      </div>
    </div>
  );
}

export default TarjetaInfoPerfil;