import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"
import CampoTeste from "../CampoTeste"

const Formulario = () => {

    const times = [
        'Programação',
        'Frontend',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    //States:
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido =>", nome, cargo, imagem, time)
    }
    //JSX:
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} 
                            label="Nome" 
                            placeholder="Digite seu nome" 
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}
                            />
                <CampoTexto obrigatorio={true} 
                            label="Cargo" 
                            placeholder="Digite seu cargo" 
                            valor={cargo}
                            aoAlterado={valor => setCargo(valor)}
                            />
                <CampoTexto label="Imagem" 
                            placeholder="Digite o endereço da imagem" 
                            valor={imagem}
                            aoAlterado={valor => setImagem(valor)}
                            />
                <ListaSuspensa  obrigatorio={true} 
                                label="Time" 
                                itens={times} 
                                valor={time}
                                aoAlterado={valor => setTime(valor)}
                                />
                <Botao>
                    Criar Card
                </Botao>

                <CampoTeste label="Teste"
                            aoAlterado={valor => console.log(valor)}
                />
            </form>
        </section>
    )
}

export default Formulario