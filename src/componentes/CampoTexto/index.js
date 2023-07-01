import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` //não é obrigatório, mas é normal criar constantes para adicionar como propriedades

    return (
        <div className="campo-texto">   
            <label>{props.label}</label>
            <input value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto
