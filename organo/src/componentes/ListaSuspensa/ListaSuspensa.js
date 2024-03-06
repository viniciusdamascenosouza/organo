import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
  return (
      <div className="lista-suspensa">
        <label>{props.label}</label>
        <select required="{props.required}">
          {props.itens.map(item => <option key="item">{item}</option>)}
        </select>
      </div>
  );
};
