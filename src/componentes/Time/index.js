import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    //o trecho abaixo: "props.colaboradores.length > 0 &&" é chamado de renderização condicional. É dessa forma que é feito no react para colocar uma condição para gerar o JSX ou não. De forma prática, o que está à direita de && só será executado se o que estiver na esquerda for true. Aqui també poderia ser utilizado o operador ternário (a? b : c)
    return (
        (props.colaboradores.length) > 0 && <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                key={colaborador.nome} 
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                time={colaborador.time}
                corDeFundo={props.corPrimaria}
            />)}
            </div>
        </section>
    )
}

export default Time