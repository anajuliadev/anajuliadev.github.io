const pastinhas = document.querySelectorAll('.pastinha');
pastinhas.forEach(pasta => {
    pasta.addEventListener('click', function abrirPastinha(event){
        console.log(event);
 

        if (pasta.classList.contains('aberto')) {
            pasta.classList.add('fechado')
            pasta.classList.remove('aberto')
        } else {
            pasta.classList.add('aberto')
            pasta.classList.remove('fechado')
        }
    });
    
});

//se pastinha tiver a classe 'aberto' , add a classe 'fechado'
// se tiver a calsse 'fechado' , add 'aberto' 