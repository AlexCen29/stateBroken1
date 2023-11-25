import React, { useEffect, useState } from 'react';
import "../../../src/styles/index.css";
import "./renderProperties.css";

interface Property {
  tipo: string;
  id: number;
  direccion: string;
  descripcion: string;
  img1Path: string;
  fechaDeCreacion: string;
  empleado: {
    id: number;
    nombre: string;
    imgPerfil: string;
  };
}

async function fetchProperties(): Promise<Property[]> {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Token not found');
  }
  const response = await fetch('https://jimenezmiapi.somee.com/api/InmueblesyTerrenos/ultimos5', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }
  const data = await response.json();
  return data;
}

function RenderProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetchProperties()
      .then(data => setProperties(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return (
      <div className="container" id="properties">
      <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Error</div>
        <div className="card-body">
          
          <h5 className="card-title">Fuera de servicio</h5>
          <p className="card-text">Lo sentimos, actualmente no podemos mostrar las propiedades.</p>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="container" id="properties">
      <h1>Propiedades agregadas recientemente</h1>
      {properties.slice(0, 4).map(property => (
        <div className="card" style={{ width: "16rem" }} key={property.id}>
          <div className="container" id="white-header">
            <div className="white-header-data">
              <div className="profile-pic"></div>
              <div className="persona">
                <h5>{property.empleado.nombre}</h5>
                <h6>Agente</h6>
              </div>
              <i
                className="fa-solid fa-ellipsis-vertical"
                style={{ color: "#1D1B20" }}
                id="options"
              ></i>
            </div>
          </div>
          <img src={property.img1Path} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{property.direccion}</h5>
            <p className="card-text">{property.descripcion}</p>
            <div id="buttons">
              <a href="#" className="btn btn-primary detalles">
                Detalles
              </a>
              <a href="#" className="btn btn-primary">
                Ofertar
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RenderProperties;
