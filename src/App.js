import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';


function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])//Novo array, expalhando aqui dentro os colaboradores antigos e colocando o que acabou de chegar no final. Dessa forma obtem-se um array novo com todos os colaboradores
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
