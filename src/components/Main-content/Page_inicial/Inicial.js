import './Inicial.css';
import Picture from '../../../assets/julia.jpg';

const Inicial = () => {
    return (
        <div className="pai-cabecalho">
            
            <div className="cabecalho-info">
                <div className="info-inicial">
                    <p className="apresentacao">Olá, me chamo</p>
                    <p className="name">Ana Júlia</p>
                </div>
                <div className="info-area">
                    <p>front-end developer</p>
                </div>
                <div className="info-descricao">
                    <p>Tenho 20 anos e estou cursando Análise e Desenvolvimento de Sistemas.</p>
                        <span><p>Atualmente estou estudando para me aprofundar mais na área de desenvolvimento front-end e futuramente me especializar no assunto.</p></span>
                </div>
                <div className="info-linguagens">
                    <p>HTML5 // CSS // Git // GitHub // JavaScript // React</p>
                </div>
                <div className="button-ver-mais">
                    <a href="" target="_blank">
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82766 11.813L11.813 13.7984L13.7984 11.8131L23.6261 1.98539L21.6407 0L11.813 9.82766L1.98539 8.8086e-06L0 1.98539L9.82766 11.813Z" fill="#D9D9D9" fill-opacity="0.6"/>
                        </svg>
                            
                        <span>ver currículo</span>
                    </a>
                </div>
            </div>
            <div className="cabecalho-imagem">
                <img src= {Picture}></img>
            </div>

        </div>
    )
};

export default Inicial;