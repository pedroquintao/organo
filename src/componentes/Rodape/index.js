import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='redes'>
                <ul>
                    <li>     
                        <a href='http://www.facebook.com'>
                            <img src='./imagens/fb.png' alt='Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='http://www.twitter.com'>
                            <img src='./imagens/tw.png' alt='Twitter'/>
                        </a>
                    </li>
                    <li>
                        <a href='http://www.instagram.com'>
                            <img src='./imagens/ig.png' alt='Instagram'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='organoLogo'>
                <img src='./imagens/logo.png' alt='Instagram'/>
            </div>
            <div className='desenvolvidoPor'>
                <p>
                    Desenvolvido por Alura.
                </p>
            </div>
        </footer>
    )
}

export default Rodape