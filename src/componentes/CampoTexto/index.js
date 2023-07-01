import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` //não é obrigatório, mas é normal criar constantes para adicionar como propriedades

    let valor = ''

    const aoDigitado = (e) => {
        valor = e.target.value
        console.log("Valor=", valor)
    }

    return (
        <div className="campo-texto">   
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto