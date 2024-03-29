/*-------------------------------------------------------------
* obter PUBLICIDADE Amazon 1
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
    
   var segundoAtual= new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
} // obterPublicidade_amazon_1

 
function obterPublicidade_amazon_2() {
   var opcoes = [
      `<a href="https://amzn.to/3TALI9P">
            <img src="/images/publicidade/amazon/monitor_lg.png" class="img-fluid" alt="MONITOR LG GAMER 21.5">
            <p class="font_1 text-center m-0 p-0" >                      
               <i>MONITOR LG GAMER 21.5 - Marca: LG</i>
            </p> 
      </a>`,  

      `<a href="https://amzn.to/3VEaCZ4">
         <img src="/images/publicidade/amazon/tablet_sansung.png" class="img-fluid" alt="Galaxy Tab S9 FE, Grafite, 10.9 - Marca: SAMSUNG">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Galaxy Tab S9 FE, Grafite, 10.9<br>Tablet - Marca: SAMSUNG</i>
         </p> 
      </a>`,  
        
      `<a href="https://amzn.to/4adoWvW">
         <img src="/images/publicidade/amazon/mouse_sem_fio.png" class="img-fluid" alt="Mouse sem fio Logitech M170 com Design Ambidestro Compacto, Conexão USB e Pilha Inclusa - Preto  ">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Mouse sem fio Logitech M170 com Design Ambidestro Compacto, Conexão USB</i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/3vsUtuJ">
         <img src="/images/publicidade/amazon/kindle.png" class="img-fluid" alt="Kindle 11ª Geração">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Kindle 11ª Geração - Mais leve, com resolução de 300 ppi e o dobro de armazenamento - Cor Preta - Marca: Amazon</i>
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
      
   ];

   var opcao_padrao =  
   `<a href="https://amzn.to/3VEaCZ4">
      <img src="/images/publicidade/amazon/tablet_sansung.png" class="img-fluid" alt="Galaxy Tab S9 FE, Grafite, 10.9 - Marca: SAMSUNG">
      <p class="font_1 text-center m-0 p-0" >                      
         <i>Galaxy Tab S9 FE, Grafite, 10.9<br>Tablet - Marca: SAMSUNG</i>
      </p> 
   </a>`   ;
      
   var segundoAtual = new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
} // obterPublicidade_amazon_2

 
function obterPublicidade_amazon_3() {
   var opcoes = [
      `<a href="https://amzn.to/3VxTDYd">
         <img src="/images/publicidade/amazon/elseve_oleo_apilar.png" class="img-fluid" alt="ELSÉVE Óleo Capilar L'Oréal Paris Elseve Óleo Extraordinário 100Ml">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>ELSÉVE Óleo Capilar L'Oréal Paris Elseve Óleo Extraordinário 100Ml</i>
         </p> 
      </a>`, 
     
      `<a href="https://amzn.to/3vxBz5S">
         <img src="/images/publicidade/amazon/elseve_creme_capilar.png" class="img-fluid" alt="L'Oréal Paris Elsève Creme Tratamento Leave in Cicatri Renov, Branco">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>L'Oréal Paris Elsève Creme Tratamento Leave in Cicatri Renov, Branco</i>
         </p> 
      </a>`, 

      `<a href="https://amzn.to/3PJ7V4t">
         <img src="/images/publicidade/amazon/fritadeira_sem_oleo.png" class="img-fluid" alt="Fritadeira Sem Óleo Air Fryer 3,5L, Mondial, Preto, 1500W, 220V - AF-31">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Fritadeira Sem Óleo Air Fryer 3,5L, Mondial, Preto, 1500W, 220V - AF-31</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/3IZK398">
         <img src="/images/publicidade/amazon/psicologia_financeira.png" class="img-fluid" alt="A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>A psicologia financeira: lições atemporais sobre fortuna, ganância e felicidade</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/4aCtVWR">
         <img src="/images/publicidade/amazon/livro_desassossego.png" class="img-fluid" alt="Livro do desassossego Capa comum – Versão integral">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Livro do desassossego Capa comum – Versão integral</i>
         </p> 
      </a>`,      
      
      `<a href="https://amzn.to/4cyIgW1">
         <img src="/images/publicidade/amazon/livros_fernando_pessoa.png" class="img-fluid" alt="Poesias Livro de bolso">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Poesias Livro de bolso</i>
         </p> 
      </a>`,
      
      
   ];

   var opcao_padrao =  
      `<a href="https://amzn.to/3PJ7V4t">
         <img src="/images/publicidade/amazon/fritadeira_sem_oleo" class="img-fluid" alt="Fritadeira Sem Óleo Air Fryer 3,5L, Mondial, Preto, 1500W, 220V - AF-31">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Fritadeira Sem Óleo Air Fryer 3,5L, Mondial, Preto, 1500W, 220V - AF-31</i>
         </p> 
      </a>`;
      
   var segundoAtual = new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
} // obterPublicidade_amazon_3