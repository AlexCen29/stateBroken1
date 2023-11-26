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
    imagen: `agente ${i}`,
  },
}));

function ListaClientesRecientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientes = async () => {
      const token = localStorage.getItem("token");
      console.log(token); // Imprime el token en consola

      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        "https://jimenezmiapi.somee.com/api/Cliente/ultimos5",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un error al obtener los datos");
      }

      const data = await response.json();
      setClientes([...data, ...clientesPrueba]);
      console.log(data);
      // Añadir los datos de prueba después de los datos de la API // Solo se muestran los primeros 5 clientes
    };

    fetchClientes().catch((error) =>
      setError(
        "Un problema al cargar los datos. Por favor, inténtalo de nuevo más tarde."
      )
    );
  }, []);

  return (
    <div className="" id="clients">
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
          clientes.slice(0, 5).map((cliente, index) => (
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
  );
}

export default ListaClientesRecientes;
