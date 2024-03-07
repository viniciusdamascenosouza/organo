import "./CampoTexto.css";

export const CampoTexto = (props) => {

  let valor = "Vinícius";

  const aoDigitado = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={valor} onChange={aoDigitado} required="{props.obrigatorio}" placeholder= {props.placeholder} />
    </div>
  );
};
