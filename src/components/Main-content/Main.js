import './Main.css';
import Menu from './Menu/Menu'
import Inicial from './Page_inicial/Inicial';
import Linguagens from './Page_linguagens/Linguagens';
import Projetos from './Page_projetos/Projetos';
import Experiencia from './Page_experiencia/Experiencia';
import Formacao from './Page-formacao/Formacao';
import Curso from './Page_cursos/Curso'

const Main = () => {
    return (
        <div class="container index">
            <Inicial></Inicial>
            <Linguagens></Linguagens>
            <Projetos></Projetos>
            <Experiencia></Experiencia>
            <Formacao></Formacao>
            <Curso></Curso>
        </div>

    )
};

export default Main;