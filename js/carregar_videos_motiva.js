var videos_1 = [
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=62Z4H2fhOZ8">Um bilhete antigo revela amor</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=62Z4H2fhOZ8"><img class="img-fluid" src="/images/capas/capa_bilhete.png" alt="Um bilhete antigo revela amor"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://youtu.be/IJS2DE0iLgk?si=o1ctGE_j80eEZo-V">Páginas do passado, o amor escreve sua história...</a>',
     link: '<a target="_blank" href="https://youtu.be/IJS2DE0iLgk?si=o1ctGE_j80eEZo-V"><img class="img-fluid" src="/images/capas/capa_uma_carta_esquecida.png" alt="Nas páginas do passado, o amor escreve sua história"></a>'
   },
]; 

var videos_2 = [
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=lgPSU6oSrwo">Sua luz interior é a chama que nunca se apaga</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=lgPSU6oSrwo"><img class="img-fluid" src="/images/capas/capa_sua_luz_interior.png" alt="Sua luz interior é a chama que nunca se apaga"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=ezJv141czvk">No sótão, uma caixa esquecida</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=ezJv141czvk"><img class="img-fluid" src="/images/capas/capa_caixa_da_alegria.png" alt="No sótão, uma caixa esquecida"></a>'
   },   
   
]; 

function obterVideo_1() {
   let videos = videos_1.concat(videos_2); 
   var segundoAtual = new Date().getSeconds();
   var indiceVideo = segundoAtual % videos.length;
   return videos[indiceVideo];   
}

function obterVideo_2() { 
   let videos = videos_2.concat(videos_1); 
   var segundoAtual = new Date().getSeconds();
   var indiceVideo = segundoAtual % videos.length;
   return videos[indiceVideo];   
}

