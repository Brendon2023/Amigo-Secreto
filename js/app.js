    // Cria um vetor (array) que armazenará todos os nomes digitados.
    let amigos = [];

    // Captura o texto digitado no campo,
    // remove espaços extras e converte para letras maiúsculas.
    function adicionar () {
    let amigo = document.getElementById('nome-amigo').value.trim().toUpperCase();

    // Verifica se o usuário deixou o campo vazio.
    if (amigo === '') {
        alert('Digite o nome do amigo!');
        return;
    }


    //  Impede a adição se houver qualquer número (0 a 9)
    if (/\d/.test(amigo)) {
        alert('O nome do amigo não pode conter números!');
        return;
    }



    // Verifica se o nome já foi cadastrado anteriormente.
    if (amigos.includes(amigo)) {
        alert('Nome já adicionado!');
        return;
    }

    
    // Localiza o elemento HTML onde será exibida a lista de amigos.
    let lista = document.getElementById('lista-amigos');

    // Adiciona o novo nome ao array.
    amigos.push(amigo);

    // Se for o primeiro nome, apenas exibe.
    if(lista.textContent == '') {
        lista.textContent = amigo;

    // Caso já existam nomes, adiciona uma vírgula antes do novo.
    }else{
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    
    // Limpa o campo para facilitar o próximo cadastro.
    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }
   embaralha(amigos);
   let sorteio = document.getElementById('lista-sorteio');

   for (let i = 0; i < amigos.length; i++) {
    if ( i == amigos.length - 1) {
     sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>';
    }
    else {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br>';
    }
}
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}



