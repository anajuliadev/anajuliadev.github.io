import './Projetos.css';
import Image from '../../../assets/Rectangle 66.png';

const Projetos = () => {
    return (
        <div className="page-width">
            <div className="pai-projeto">
                <div className="info-title">
                    <h3>Projetos</h3>
                </div>
                <div className="agrupe-projetos">
                    <div className="projetos">
                        <div className="imagem-projeto">
                            <img src={Image}></img>
                        </div>
                        <div className="pai-info-projeto">
                            <div className="info-projeto">
                                <h4>Site</h4>
                                <p>Criei este site para praticar minhas habilidades e estudos e com objetivo de ter um currículo interativo e voltado ao que eu gosto de fazer.</p>
                            </div>
                            <div className="button-projeto">
                                <a href="" target="_blank">VER PROJETO</a>
                                <a href="" target="_blank">REPOSITÓRIO</a>
                            </div>
                        </div>
                    </div>
                    <div className="projetos">
                        <div className="imagem-projeto">
                           <img src={Image}></img>
                        </div>
                        <div className="pai-info-projeto">
                            <div className="info-projeto">
                                <h4>Routinely</h4>
                                <p>Um aplicativo com intuito de ajudar os usuários a terem um dia a dia mais organizado de maneira prática e iterativa.</p>
                            </div>
                            <div className="button-projeto">
                                <a href="" target="_blank">VER PROJETO</a>
                                <a href="" target="_blank">REPOSITÓRIO</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="button-ver-mais">
                        <a href="projetos.html" target="_blank">
                            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82766 11.813L11.813 13.7984L13.7984 11.8131L23.6261 1.98539L21.6407 0L11.813 9.82766L1.98539 8.8086e-06L0 1.98539L9.82766 11.813Z" fill="#D9D9D9" fill-opacity="0.6"/>
                            </svg>
                                
                            <span>ver mais projetos</span>
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    )
};

export default Projetos;