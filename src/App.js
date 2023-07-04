import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {
  
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])//Spread Operator: Novo array, expalhando aqui dentro os colaboradores antigos e colocando o que acabou de chegar no final. Dessa forma obtem-se um array novo com todos os colaboradores. Essa sintaxe é a mesma coisa de ter criado uma variavel temporária, feito o push com o novo colaborador e passado essa nova variavel como argumento do setColaboradores
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario nomesDostimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)/*Em resumo, nessa linha foi feita uma conversão do array de objetos JSON para um padrão de componente. Ou seja, cada objeto json foi convertido em um componente que cada propriedade representa uma propriedade do objeto JSON. Além disso, foi utilizado um filter na propriedade colaboradores, dessa forma, cada vez que uma area de um time for criada, só serão adicionados à essa lista os coloboradores que pertencem àquele time*/} 
      <Rodape />
    </div>
  );
}

export default App;
