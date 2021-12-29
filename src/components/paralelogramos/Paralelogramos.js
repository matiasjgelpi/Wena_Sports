export const Paralelogramos = ({ categoria, dato, color_cuadro }) => {
    
  return (
    <div id="paralelogramo">
      <div id="nombre-dato">
        <p>{categoria}</p>
      </div>
      <div id="dato" style={{ backgroundColor: color_cuadro }}>
        <p>{dato}</p>
      </div>
    </div>
  );
};
