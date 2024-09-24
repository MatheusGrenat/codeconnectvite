import Code from './assets/code.svg'
import Chat from './assets/chat.svg'
import Share from './assets/share.svg'
import './styles.css';

export default function Card({imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario}){
    console.log(usuario)
    return(
        <article className='card'>
            <div className='card__imagem'>
                <img src={imagemUrl} alt='imagem do post' />
            </div>
            <div className='card__conteudo'>
                <div className='conteudo__texto'>
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className='conteudo__rodape'>
                    <ul className='lista__rodape'>
                        <li>
                            <img src={Code} alt="codigos" />
                            <p>{linhasDeCodigo}</p>
                        </li>
                        <li>
                            <img src={Share} alt="compartilhamentos" />
                            <p>{compartilhamentos}</p>
                        </li>
                        <li>
                            <img src={Chat} alt="comentarios" />
                            <p>{comentarios}</p>
                        </li>
                    </ul>
                    <div className='rodape__usuario'>
                        <img src={usuario.imagem} alt="imagem do usuario" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    )
}