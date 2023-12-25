document.addEventListener('DOMContentLoaded', function () {
   const poemasLista = document.getElementById('poemas-lista');

   // Estrutura de dados: Poemas
   const poemas = [
       { author: 'Fernando Pessoa', title: 'O Que Me Dói Não É', file: 'poemas/fernando_pessoa_oquemedoi.txt' },
       { author: 'Fernando Pessoa', title: 'O Que Me Dói Não É', file: 'poemas/fernando_pessoa_oquemedoi.txt' },

       // Adicione mais poemas conforme necessário
   ];

   // Função para carregar e exibir os poemas
   function loadAndDisplayPoems(poemas) {
       poemas.forEach(poema => {
           fetch(poema.file)
               .then(response => response.text())
               .then(text => {
                   const poemaElement = document.createElement('div');
                   poemaElement.innerHTML = `<h2>${poema.author} - ${poema.title}</h2><p>${text}</p>`;
                   poemasLista.appendChild(poemaElement);
               });
       });
   }

   // Carregar e exibir os poemas
   loadAndDisplayPoems(poemas);
});