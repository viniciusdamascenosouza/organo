import "./CampoTexto.css";

export const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    console.log(evento.target.value);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input onChange={aoDigitado} required="{props.obrigatorio}" placeholder= {props.placeholder} />
    </div>
  );
};
