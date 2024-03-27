/*-------------------------------------------------------------
* obter a  Frase Poetica de forma cíclica
*-------------------------------------------------------------*/ 
function obterPublicidade() {
   
   var frases = [
      `<a href="https://amzn.to/3Vw8i6h"> 
         <span class="font_0 ">Publicidade</span><br>               
         <img src="/images/publicidade/amazon/caneca_porcelana_1.png" class="img-fluid" alt="Imagem da Caneca de Porcelana">
         <p class="font_1 m-0" id="frase4">                      
            <i>Canecas de Porcelana Personalizadas</i>
        </p> 
      </a>`,

      `<a href="https://amzn.to/3TQCvM3"> 
         <span class="font_0 ">Publicidade</span><br>               
         <img src="/images/publicidade/amazon/caneca_porcelana_2.png" class="img-fluid" alt="Imagem da Caneca de Porcelana">
         <p class="font_1 m-0" id="frase4">                      
            <i>Canecas de Porcelana Personalizadas</i>
        </p> 
      </a>`,


  ];
    

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}
