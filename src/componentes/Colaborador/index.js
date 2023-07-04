import "./Colaborador.css"

const Colaborador = ({nome, imagem, cargo}) => { //Aqui, é possível utilizar um operador javascript de desestruturação. Para isso é só substituir o props pelos nomes de suas propriedades, tudo isso entre chaves ({})
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador