/*-------------------------------------------------------------
* obter a  Frase Poetica de forma cíclica
*-------------------------------------------------------------*/ 
function obterPublicidade() {
   
   var frases = [
      `<a href="https://amzn.to/3Vw8i6h">            
         <img src="/images/publicidade/amazon/caneca_porcelana_1.png" class="img-fluid" alt="Imagem da Caneca de Porcelana">
         <p class="font_1 text-center m-0">                      
            <i>Canecas de Porcelana Personalizadas</i>
        </p> 
      </a>`,

      `<a href="https://amzn.to/3TQCvM3">             
         <img src="/images/publicidade/amazon/caneca_porcelana_2.png" class="img-fluid" alt="Imagem da Caneca de Porcelana">
         <p class="font_1 text-center m-0 ">                      
            <i>Canecas de Porcelana Personalizadas</i>
        </p> 
      </a>`,

      `<a href="https://amzn.to/4axiM9z">
         <img src="/images/publicidade/amazon/cafe_com_Deus_pai.png" class="img-fluid" alt="Café com Deus Pai 2024: Porções Diárias de paz">
         <p class="font_1 text-center m-0" >                      
            <i>Café com Deus Pai 2024: Porções Diárias de paz</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/3xc3Mj3">
         <img src="/images/publicidade/amazon/como_fazer_amigos_dale_carnegie.png" class="img-fluid" alt="Como fazer amigos e influenciar pessoas">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Como fazer amigos e influenciar pessoas - Dale Carnegie</i>
         </p> 
       </a>`,

       



  ];
    

   var frase_padrao = "Sua autenticidade é sua beleza.<br> Abrace quem você é, pois você é único e especial.";
   var segundoAtual = new Date().getSeconds();
   var indiceFrase = segundoAtual % frases.length;   
   var fraseCorrespondente = frases[indiceFrase] || frase_padrao;   
   return fraseCorrespondente;
}
