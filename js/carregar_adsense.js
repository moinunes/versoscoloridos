// Seleciona as divs onde você quer colocar as frases
const div_publicidade_1 = document.querySelector('#div_publicidade_1');
//const div_publicidade_2 = document.querySelector('#div_publicidade_2');
//const div_publicidade_3 = document.querySelector('#div_publicidade_3');

// Opções para o IntersectionObserver
const opcoes = {
  root: null, // o viewport do navegador é usado como área de observação
  rootMargin: '0px', // margem para expandir a área de interseção
  threshold: 0.5 // a porcentagem de visibilidade do elemento para disparar o callback
};

// Criação do IntersectionObserver para cada div observada
['div_observada1', 'div_observada2', 'div_observada3'].forEach(id => {
  const divObservada = document.getElementById(id);
  const observer = new IntersectionObserver(function(entries, observer) {
    // Para cada entrada (elemento observado)
    entries.forEach(entry => {
      // Se a div observada está visível
      if (entry.isIntersecting) {
        // Chame sua função para colocar a frase na div correspondente
        colocarFrase(id );
        
        // Depois de chamar a função, pare de observar a div
        observer.unobserve(entry.target);
      }
    });
  }, opcoes);

  // Começa a observar a div atual
  observer.observe(divObservada);
});

 
function colocarFrase(divObservadaId ) { 
   let frase;
   
   switch (divObservadaId) {
      case 'div_observada1':
         codigoAdSense = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2582645504069233"></script>
                           <ins class="adsbygoogle"
                                 style="display:block"
                                 data-ad-client="ca-pub-2582645504069233"
                                 data-ad-slot="8477839329"
                                 data-ad-format="auto"
                                 data-full-width-responsive="true"></ins>
                           <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`;
         div_publicidade_1.innerHTML = codigoAdSense;
         break;

      case 'div_observada2':     
         codigoAdSense = ` <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2582645504069233"
                           crossorigin="anonymous"></script>
                           <!-- ads_display_2 -->
                           <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-2582645504069233"
                              data-ad-slot="9796119410"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins>
                           <script>
                              (adsbygoogle = window.adsbygoogle || []).push({});
                           </script>`;

         div_publicidade_2.innerHTML = codigoAdSense;
      break; 

      case 'div_observada3':     
         codigoAdSense = ` <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2582645504069233"
                           crossorigin="anonymous"></script>
                           <!-- ads_display_2 -->
                           <ins class="adsbygoogle"
                              style="display:block"
                              data-ad-client="ca-pub-2582645504069233"
                              data-ad-slot="9796119410"
                              data-ad-format="auto"
                              data-full-width-responsive="true"></ins>
                           <script>
                              (adsbygoogle = window.adsbygoogle || []).push({});
                           </script>`;

         div_publicidade_3.innerHTML = codigoAdSense;
         break; 
  } 
   
 
}
