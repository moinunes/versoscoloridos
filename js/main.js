document.addEventListener('DOMContentLoaded', function () {
   const autoresLista = document.getElementById('autores-lista');

   // Array de autores
   const autores = ['autor1', 'autor2', /* adicione mais autores conforme necessário */];

   // Popula a lista de autores
   autores.forEach(function (autor) {
       const listItem = document.createElement('li');
       listItem.innerHTML = `<a href="poems/${autor}/">${autor}</a>`;
       autoresLista.appendChild(listItem);
   });
});