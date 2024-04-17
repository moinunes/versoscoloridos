var videos_1 = [
   { autor: "Fernando Pessoa",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=uKkkfgaoSlQ"><img class="img-fluid" src="/images/capas/capa_fernando_da_mai_alta_janela.png" alt="Fernando Pessoa"></a>'
   },
   { autor: "Carlos Drummond de Andrade",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=-MKjWWH_z_8"><img class="img-fluid" src="/images/capas/capa_drummond_alem_terra.png" alt="Carlos Drummond de Andrade"></a>'
   },
   { autor: "Adélia Prado",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8"><img class="img-fluid" src="/images/capas/capa_adelia_prado_com_licenca.png" alt="Adélia Prado"></a>'
   },

]; 

var videos_2 = [
   { autor: "Cecília Meireles",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=gZPR-diceGk&t=30s"><img class="img-fluid" src="/images/capas/capa_cecilia_a_arte.png" alt="Cecília Meireles"></a>'
   },
   { autor: "Clarice Lispector",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=TJIHymyZdTY&t=2s"><img class="img-fluid" src="/images/capas/capa_clarice_lispector_eu.png" alt="Clarice Lispector"></a>'
   },
   { autor: "Adélia Prado",
     link: '<a target="_blank" href="https://www.youtube.com/watch?v=b4He7bRP3x8"><img class="img-fluid" src="/images/capas/capa_adelia_prado_com_licenca.png" alt="Adélia Prado"></a>'
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

