import './Mais_projetos.css';
import Image66 from '../../assets/Rectangle 66.png';
import { Link } from 'react-router-dom';

const Maisprojetos = () => {
    return (
        <div className="agrupe-tudo">
            <div className="pai-menu">
                <div className="info-menu">
                    <div className="name-menu">
                        <p>Ana Júlia</p>
                    </div>
                    <div className="cargo-menu">
                        <p>Front-End Developer</p>
                    </div>
                    <div className="agrupe-email">
                        <p>E-mail</p>
                        <a href="mailto:anaju.silvaalves@gmail.com">anaju.silvaalves@gmail.com </a>
                    </div>
                    <div className="agrupe-numero">
                        <p>Telefone</p>
                        <a href="tel:5585994306177">+55 (85) 99430-6177</a>
                    </div>
                    <div className="agrupe-idioma">
                        <p>Idioma</p>
                        <div className="idioma">
                            <p>Espanhol</p>
                            <span>Básico</span>
                        </div>
                        <div className="idioma">
                            <p>Inglês</p>
                            <span>Básico</span>
                        </div>
                    </div>
                </div>
                <div className="button-ver-mais">
                    <a href="" target="_blank">
                        <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82766 11.813L11.813 13.7984L13.7984 11.8131L23.6261 1.98539L21.6407 0L11.813 9.82766L1.98539 8.8086e-06L0 1.98539L9.82766 11.813Z" fill="#D9D9D9" fill-opacity="0.6"/>
                        </svg>
                        <span>baixar currículo</span>
                    </a>                     
                </div>  

            </div>
            <div className="container projetos-page">
                <div className="pai-projeto">
                    <div className="info-title">
                        <Link to={"/"}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 12H17M7 12L11 8M7 12L11 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                        <h3>Projetos</h3>
                    </div>
                    <div className="agrupe-projetos">
                        <div className="projetos">
                            <div className="imagem-projeto">
                                <img src={Image66}></img>
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
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Maisprojetos;