import "./CampoTeste.css"

const CampoTeste = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input  onChange={evento => props.aoAlterado(evento.target.value)}/>
        </div>
    )
}

export default CampoTeste