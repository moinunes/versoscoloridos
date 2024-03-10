function carregarAnuncio(containerId) { 
   
   document.getElementById(containerId).innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="-fb+5w+4e-db+86" data-ad-client="ca-pub-2582645504069233" data-ad-slot="1072171767"></ins>';
   (adsbygoogle = window.adsbygoogle || []).push({});
}

function handleIntersection(entries, observer) {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           // Se a frase está visível, carregue o anúncio
           const containerId = 'adsense-container-' + entry.target.id;
           carregarAnuncio(containerId);
           observer.unobserve(entry.target);
       }
   });
}

const options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.5  // Pode ajustar o valor conforme necessário
};

// Observador de interseção para cada frase
const observer1 = new IntersectionObserver(handleIntersection, options);
observer1.observe(document.getElementById('frase1'));

//const observer2 = new IntersectionObserver(handleIntersection, options);
//observer2.observe(document.getElementById('frase2'));

//const observer3 = new IntersectionObserver(handleIntersection, options);
//observer3.observe(document.getElementById('frase3'));
