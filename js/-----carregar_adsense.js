// Função que será chamada quando a div #frase1 for visualizada
function handleFrase1Intersection(entries, observer) {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       // Chame sua função aqui
       carregar_anuncio();
       // Desconecte o observer após a interseção ocorrer, se desejar
       observer.disconnect();
     }
   });
 }
 
 // Crie uma instância do IntersectionObserver
 const observer = new IntersectionObserver(handleFrase1Intersection);
 
 // Selecione o elemento que você deseja observar
 const target = document.getElementById('frase1');
 
 // Comece a observar o elemento-alvo
 observer.observe(target);
 
 
 function carregar_anuncio() {
   document.getElementById('div_anuncio_1').innerHTML = `
   <span class="font_0">PUBLICIDADE</span>
   <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-2582645504069233"
     data-ad-slot="8188250620"></ins>
   <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
   </script>`;
 }
 