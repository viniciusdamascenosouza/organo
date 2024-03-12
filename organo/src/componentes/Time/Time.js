import Colaborador from "../Colaborador";
import "./Time.css";

export const Time = (props) => {

  const fundoTime = {backgroundColor: props.corSecundaria}

  return (
    <section className="time" style={fundoTime}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <Colaborador />
    </section>
  );
};
