/*-------------------------------------------------------------
* obter PUBLICIDADE Amazon
*-------------------------------------------------------------*/ 
function obterPublicidade_amazon_1() {
   
   var opcoes = [
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

       `<a href="https://amzn.to/4cxlPAu">
            <img src="/images/publicidade/amazon/antipulgas_carrapatos.png" class="img-fluid" alt="NexGard Spectra Antipulgas e Carrapatos e Vermífugo para Cães">
            <p class="font_1 text-center m-0 p-0" >                      
               <i>NexGard Spectra Antipulgas e Carrapatos e Vermífugo para Cães de 3,6 a 7,5kg - 1 tablete Marca: Nexgard</i>
            </p> 
        </a>`,
    
       `<a href="https://amzn.to/3VIIWls">
         <img src="/images/publicidade/amazon/sabonete_alfazema_provencal.png" class="img-fluid" alt="Sabonete Alfazema Provençal, PHEBO, Lilás, 100g">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Sabonete Alfazema Provençal, PHEBO, Lilás, 100g</i>
         </p> 
       </a>`,
       
       `<a href="https://amzn.to/3IXAzuW">
         <img src="/images/publicidade/amazon/impressora_epson.png" class="img-fluid" alt="EPSON EcoTank L1250">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>EPSON EcoTank L1250 - Impressora, tanque de Tinta Colorida<br>Com sistema 100% sem cartuchos</i>
         </p> 
      </a>`,      
           
      `<a href="https://amzn.to/3TxS221">
            <img src="/images/publicidade/amazon/jbl_fone_ouvido.png" class="img-fluid" alt="JBL, Fone de Ouvido in Ear, C50HI - Preto">
            <p class="font_1 text-center m-0 p-0" >                      
               <i>JBL, Fone de Ouvido in Ear, C50HI</i>
            </p> 
        </a>`,  

      `<a href="https://amzn.to/3xeMMZy">
         <img src="/images/publicidade/amazon/livro_o_pequeno_principe.png" class="img-fluid" alt="O Pequeno Príncipe - Edição de Luxo Almofada Capa dura ">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>O Pequeno Príncipe - Edição de Luxo Almofada Capa dura </i>
         </p> 
      </a>`,  

        

   ];

   var opcao_padrao =  
     `<a href="https://amzn.to/3VIIWls">
         <img src="/images/publicidade/amazon/sabonete_alfazema_provencal.png" class="img-fluid" alt="Sabonete Alfazema Provençal, PHEBO, Lilás, 100g">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Sabonete Alfazema Provençal, PHEBO, Lilás, 100g</i>
         </p> 
       </a>`;
    
   var segundoAtual = new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
}


/*-------------------------------------------------------------
* obter PUBLICIDADE Amazon
*-------------------------------------------------------------*/ 
function obterPublicidade_amazon_2() {
   
   var opcoes = [
      `<a href="https://amzn.to/3TxS221">
            <img src="/images/publicidade/amazon/jbl_fone_ouvido.png" class="img-fluid" alt="JBL, Fone de Ouvido in Ear, C50HI - Preto">
            <p class="font_1 text-center m-0 p-0" >                      
               <i>JBL, Fone de Ouvido in Ear, C50HI</i>
            </p> 
      </a>`,  

      `<a href="https://amzn.to/3IXAzuW">
         <img src="/images/publicidade/amazon/impressora_epson.png" class="img-fluid" alt="EPSON EcoTank L1250">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>EPSON EcoTank L1250 - Impressora, tanque de Tinta Colorida<br>Com sistema 100% sem cartuchos</i>
         </p> 
      </a>`,    

      `<a href="https://amzn.to/3VIIWls">
         <img src="/images/publicidade/amazon/sabonete_alfazema_provencal.png" class="img-fluid" alt="Sabonete Alfazema Provençal, PHEBO, Lilás, 100g">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Sabonete Alfazema Provençal, PHEBO, Lilás, 100g</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/3xeMMZy">
         <img src="/images/publicidade/amazon/livro_o_pequeno_principe.png" class="img-fluid" alt="O Pequeno Príncipe - Edição de Luxo Almofada Capa dura ">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>O Pequeno Príncipe - Edição de Luxo Almofada Capa dura </i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/4axiM9z">
            <img src="/images/publicidade/amazon/cafe_com_Deus_pai.png" class="img-fluid" alt="Café com Deus Pai 2024: Porções Diárias de paz">
            <p class="font_1 text-center m-0" >                      
               <i>Café com Deus Pai 2024: Porções Diárias de paz</i>
            </p> 
        </a>`,


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

      `<a href="https://amzn.to/3xc3Mj3">
         <img src="/images/publicidade/amazon/como_fazer_amigos_dale_carnegie.png" class="img-fluid" alt="Como fazer amigos e influenciar pessoas">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Como fazer amigos e influenciar pessoas - Dale Carnegie</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/4cxlPAu">
         <img src="/images/publicidade/amazon/antipulgas_carrapatos.png" class="img-fluid" alt="NexGard Spectra Antipulgas e Carrapatos e Vermífugo para Cães">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>NexGard Spectra Antipulgas e Carrapatos e Vermífugo para Cães de 3,6 a 7,5kg - 1 tablete Marca: Nexgard</i>
         </p> 
      </a>`,
      
      
   ];

   var opcao_padrao =  
     `<a href="https://amzn.to/3VIIWls">
         <img src="/images/publicidade/amazon/sabonete_alfazema_provencal.png" class="img-fluid" alt="Sabonete Alfazema Provençal, PHEBO, Lilás, 100g">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Sabonete Alfazema Provençal, PHEBO, Lilás, 100g</i>
         </p> 
       </a>`;
    
   var segundoAtual = new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
}