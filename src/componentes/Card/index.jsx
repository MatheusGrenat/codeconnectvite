import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import Icone from './assets/icone.png'

import './styles.css';

export default function Card(){
    return(
        <article className='card'>
            <div className='card__imagem'>
                <img src={Capa} alt='imagem do post' />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>Titulo do post</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul className='lista__rodape'>
                        <li>
                            <img src={Code} alt="codigos" />
                            <p>10</p>
                        </li>
                        <li>
                            <img src={Share} alt="compartilhamentos" />
                            <p>10</p>
                        </li>
                        <li>
                            <img src={Chat} alt="comentarios" />
                            <p>12</p>
                        </li>
                    </ul>
                    <div className='rodape__usuario'>
                        <img src={Icone} alt="imagem do usuario" />
                        @Matheus
                    </div>
                </div>
            </div>
        </article>
    )
}