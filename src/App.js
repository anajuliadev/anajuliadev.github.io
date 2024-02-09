import React from 'react';
import Menu from './components/Main-content/Menu/Menu';
import Main from './components/Main-content/Main';
import Maisprojetos from './components/Mais_projetos/Mais_projetos';
import Projetos from './components/Main-content/Page_projetos/Projetos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>

    <Menu></Menu>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path='/maisprojetos' element={<Maisprojetos></Maisprojetos>} />

            <Route path='/projetos' element={Projetos} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
