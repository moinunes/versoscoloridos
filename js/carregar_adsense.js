function carregarAnuncio(containerId) {
   // Código para carregar o anúncio do AdSense no container específico
   // Substitua o seguinte código pelo seu código real do AdSense
   
   document.getElementById(containerId).innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86" data-ad-client="ca-pub-2582645504069233" data-ad-slot="1072171767"></ins>';
   (adsbygoogle = window.adsbygoogle || []).push({});
}

function handleIntersection(entries, observer) {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           // Se a frase está visível, carregue o anúncio
           carregarAnuncio('adsense-container-' + entry.target.id.slice(-1));
           observer.unobserve(entry.target);
       }
   });
}

const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.2  // Pode ajustar o valor conforme necessário
   //threshold: 1.0
};

// Observador de interseção para cada frase
const observer1 = new IntersectionObserver(handleIntersection, options);
observer1.observe(document.getElementById('frase1'));

const observer2 = new IntersectionObserver(handleIntersection, options);
observer2.observe(document.getElementById('frase2'));

const observer3 = new IntersectionObserver(handleIntersection, options);
observer3.observe(document.getElementById('frase3'));
