import "./colaborador.css";
import { IoIosCloseCircle, IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onclick: favoritar,
    }

  return (
    <div className="colaborador">
      <IoIosCloseCircle
        size={30}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito
            ? <IoMdHeart {...propsFavorito} color="#ff0000" onClick={favoritar} />
            : <IoIosHeartEmpty {...propsFavorito} onClick={favoritar} />}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
