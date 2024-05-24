import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Estado para el saludo basado en la hora
  const currentHour = new Date().getHours();
  let greetingMessage;
  if (currentHour >= 6 && currentHour <= 12) {
    greetingMessage = "Buenos días";
  } else if (currentHour >= 13 && currentHour <= 19) {
    greetingMessage = "Buenas tardes";
  } else {
    greetingMessage = "Buenas noches";
  }

  // Datos para los ejercicios de mapeo
  const items = ["Item 1", "Item 2", "Item 3"];
  const objects = [
    { name: "Object 1", value: "Value 1" },
    { name: "Object 2", value: "Value 2" },
    { name: "Object 3", value: "Value 3" }
  ];

  // Estado para mostrar/ocultar contenido
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* Saludo basado en la hora */}
      <h1>{greetingMessage}</h1>

      {/* Renderizar elementos de un array */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Mapear y renderizar un array de objetos */}
      <ul>
        {objects.map((obj, index) => (
          <li key={index}>{obj.name} - {obj.value}</li>
        ))}
      </ul>

      {/* Botón para mostrar/ocultar contenido */}
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar" : "Mostrar"} contenido
        </button>
        {visible && <p>Este es el contenido visible.</p>}
      </div>
    </div>
  );
};

// Renderiza la aplicación
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
