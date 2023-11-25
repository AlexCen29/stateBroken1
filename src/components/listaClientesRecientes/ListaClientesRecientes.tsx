import React, { useState, useEffect } from "react";
import "../../../src/styles/index.css";
import "./ListaClientesRecientes.css";

interface Cliente {
  id: number;
  nombre: string;
  fechaCreacion: string;
  empleado: {
    id: number;
    nombre: string;
    imagen: string;
  };
}

const clientesPrueba: Cliente[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  nombre: `Cliente ${i}`,
  fechaCreacion: new Date().toISOString(),
  empleado: {
    id: i,
    nombre: `Empleado ${i}`,
    imagen: `url-imagen-${i}`,
  },
}));

function ListaClientesRecientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token"));
    if (!cookie) {
      throw new Error("Token not found");
    }

    const token = cookie.split("=")[1];
    fetch("http://jimenezmiapi.somee.com/api/Cliente/ultimos5", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hubo un error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => setClientes([...data, ...clientesPrueba])) // Añadir los datos de prueba después de los datos de la API // Solo se muestran los primeros 5 clientes
      .catch((error) =>
        setError(
          "Un problema al cargar los datos. Por favor, inténtalo de nuevo más tarde."
        )
      );
  }, []);

  return (
    <>
      <div className="container" id="clients">
        <h1>Clientes agregados recientemente</h1>
        <div className="principal">
          {error && (
            <div className="item">
              <div className="name">{error}</div>
            </div>
          )}

          {clientes.length === 0 ? (
            <div className="item">
              <div className="name">No hay clientes recientes</div>
            </div>
          ) : (
            clientes.slice(0, 9).map((cliente, index) => (
              <div className="item" key={`${cliente.id}-${index}`}>
                <div className="name">{cliente.nombre}</div>
                <div className="broker">
                  <div className="picture">
                    {cliente.empleado.nombre.charAt(0).toUpperCase()}
                  </div>
                  <div className="agent-name">{cliente.empleado.nombre}</div>
                </div>
                <div className="agent-label">~{cliente.empleado.imagen}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ListaClientesRecientes;
