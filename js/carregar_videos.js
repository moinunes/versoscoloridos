var videos_1 = [
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=uKkkfgaoSlQ">Fernando Pessoa</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=uKkkfgaoSlQ"><img class="img-fluid" src="/images/capas/capa_fernando_da_mai_alta_janela.png" alt="Fernando Pessoa"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=-MKjWWH_z_8">Carlos Drummond de Andrade</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=-MKjWWH_z_8"><img class="img-fluid" src="/images/capas/capa_drummond_alem_terra.png" alt="Carlos Drummond de Andrade"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8">Adélia Prado</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8"><img class="img-fluid" src="/images/capas/capa_adelia_prado_com_licenca.png" alt="Adélia Prado"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=X_HF_ylmOlQ">Bráulio Bessa</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=X_HF_ylmOlQ"><img class="img-fluid" src="/images/capas/capa_braulio_bessa_professor.png" alt="Bráulio Bessa"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=BUGfkuMZYA8">Cecília Meireles</a>',
      link: '<a target="_blank" href="https://www.youtube.com/watch?v=BUGfkuMZYA8"><img class="img-fluid" src="/images/capas/capa_cecilia_bailarina.png" alt="Cecília Meireles"></a>'
   },

   

]; 

var videos_2 = [
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=gZPR-diceGk&t=30s">Cecília Meireles</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=gZPR-diceGk&t=30s"><img class="img-fluid" src="/images/capas/capa_cecilia_a_arte.png" alt="Cecília Meireles"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=TJIHymyZdTY&t=2s">Clarice Lispector</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=TJIHymyZdTY&t=2s"><img class="img-fluid" src="/images/capas/capa_clarice_lispector_eu.png" alt="Clarice Lispector"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8">Adélia Prado</a>',
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8"><img class="img-fluid" src="/images/capas/capa_adelia_prado_com_licenca.png" alt="Adélia Prado"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=eZJ1_ER_FKw">Casimiro De Abreu</a>',
      link: '<a target="_blank" href="https://www.youtube.com/watch?v=eZJ1_ER_FKw"><img class="img-fluid" src="/images/capas/capa_casimiro_abreu_meus_oito_anos.png" alt="Casimiro De Abreu"></a>'
   },
   { autor: '<a class="link_1" target="_blank" href="https://www.youtube.com/watch?v=sdoqIGQQ00E">Cecília Meireles</a>',
      link: '<a target="_blank" href="https://www.youtube.com/watch?v=sdoqIGQQ00E"><img class="img-fluid" src="/images/capas/capa_cecilia_motivo.png" alt="Cecília Meireles"></a>'
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

