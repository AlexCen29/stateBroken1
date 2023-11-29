import React, { useState, useEffect } from 'react';
import "./ListaMisClientes.css";
import "../../../../../src/styles/index.css";

interface Cliente {
  id: number;
  nombre: string;
  correoElectronico: string;
  fechaNac: string;
  fechaCreacion: string;
  telefono: number;
  empleado: null;
}

function ListaMisClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const response = await fetch(`https://jimenezmiapi.somee.com/api/Cliente/empleado/${localStorage.getItem("idEmpleado")}`,{
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
      
      
      });
      const data = await response.json();
      setClientes(data);
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <table className="miTabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Fecha de creacion</th>
          </tr>
        </thead>
        <tbody>
          {clientes.slice().reverse().map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nombre}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.correoElectronico}</td>
              <td>{cliente.fechaCreacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaMisClientes;