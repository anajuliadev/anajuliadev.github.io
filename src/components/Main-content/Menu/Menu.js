import './Menu.css';

const Menu = () => {
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
                    <div className="agrupe-dados">
                        <div className="agrupe-email">
                            <p>E-mail</p>
                            <a href="mailto:anaju.silvaalves@gmail.com">anaju.silvaalves@gmail.com </a>
                        </div>
                        <div className="agrupe-numero">
                            <p>Telefone</p>
                            <a href="tel:5585994306177">(85) 99430-6177</a>
                        </div>
                    </div>
                    <div className="agrupe-idioma">
                        <p>Idioma</p>
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
        </div>
    )
   
};

export default Menu;