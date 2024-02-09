import React from "react";
import {Route , BrowserRouter , Routes} from "react-router-dom";

import Maincontent from './components/Main-content/Main';
import Maisprojetos from './components/Mais_projetos/Mais_projetos';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Maincontent} />
                <Route path="/Mais_projetos" element={Maisprojetos} />
            </Routes>
        </BrowserRouter>
    )
};

export default Navigation;