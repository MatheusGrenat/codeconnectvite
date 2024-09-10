import './styles.css'

export default function Ordenacao(){
    return(
        <ul className='lista-ordenacao'>
                    <li>
                        <a href='#' className='ordenacao-link-clicado'>Recentes</a>
                    </li>
                    <li>
                        <a href='#' className='ordenacao-link'>Populares</a>
                    </li>
        </ul>
    )
}