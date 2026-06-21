import './Experiencia.css';

const Experiencia = () => {
    return (
        <div className="page-width">
            <div className="pai-experiencia">
                <div className="info-title">
                    <h2>Experiências</h2>
                </div>
                <div className="pai-cargo">
                    
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="16" rx="8" fill="#D9D9D9"/>
                    </svg>
                    <div className="info-experiencia">
                        <h3 className="cargo">Jovem Aprendiz</h3>
                        <div className="agrupe-cargo">
                            <h4 className="empresa">Fortes Tecnologia</h4>
                            <div className="button">
                                <p>Atual</p>
                            </div>
                        </div>
                        <p className="atividades-cargo"></p>
                    </div>
                    
                </div>
            
                <div className="pai-cargo">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="16" rx="8" fill="#D9D9D9"/>
                    </svg>
                    <div className="info-experiencia">
                        <h3 className="cargo">Assistente</h3>
                        <div className="agrupe-cargo">
                            <h4 className="empresa">Flávio Cell</h4>
                            <div className="button">
                                <p>10/2022 - 05/2023</p>
                            </div>
                        </div>
                        <p className="atividades-cargo">Organização da loja, gerenciamento do estoque utilizando planilhas, divulgação de produtos nas redes sociais, vendas, atendimento na loja física e online.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Experiencia;