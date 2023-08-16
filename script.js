const pastinhas = document.querySelectorAll('.pastinha');
pastinhas.forEach(pasta => {
    pasta.addEventListener('click', function abrirPastinha(event){
        console.log(event);
        pasta.classList.add('pretina');
    });
});

