/*-------------------------------------------------------------
* obter PUBLICIDADE Amazon 1
*-------------------------------------------------------------*/ 
function obterPublicidade_amazon_1() {   
   var opcoes = [
    

      `<a href="https://amzn.to/3vodQoN">             
         <img src="/images/publicidade/amazon/pet/pet_coleira.png" class="img-fluid" alt="Scalibor Coleira Antiparasitária 48cm para Cães Scalibor para Cães, 48 cm">
         <p class="font_1 text-center m-0">                      
            <i>Scalibor Coleira Antiparasitária <br>48cm para Cães Scalibor para Cães, 48 cm</i>
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

      `<a href="https://amzn.to/4axiM9z">
         <img src="/images/publicidade/amazon/cafe_com_Deus_pai.png" class="img-fluid" alt="Café com Deus Pai 2024: Porções Diárias de paz">
         <p class="font_1 text-center m-0" >                      
            <i>Café com Deus Pai 2024: Porções Diárias de paz</i>
         </p> 
      </a>`,

      `<a href="https://amzn.to/3xc3Mj3">
         <img src="/images/publicidade/amazon/livros/dale_carnegie_como_fazer_amigos.png" class="img-fluid" alt="Como fazer amigos e influenciar pessoas">
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
         <img src="/images/publicidade/amazon/livros/o_pequeno_principe.png" class="img-fluid" alt="O Pequeno Príncipe - Edição de Luxo Almofada Capa dura ">
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

      `<a href="https://amzn.to/3xa2wwQ">
         <img src="/images/publicidade/amazon/livros/colleen Hoover_e_assim_que_comeca.png" class="img-fluid" alt="É assim que começa (Vol. 2 É assim que acaba)">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>É assim que começa (Vol. 2) <br>É assim que acaba </i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/3THZQ10">
         <img src="/images/publicidade/amazon/livros/marcela_ceribelli_aurora.png" class="img-fluid" alt="Aurora: O despertar da mulher exausta eBook Kindle">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Aurora: O despertar da mulher exausta eBook Kindle</i>
         </p> 
      </a>`,  

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
      
      `<a href="https://amzn.to/3xejvy9">
         <img src="/images/publicidade/amazon/livros/rupi_kaur_o_que_o_sol.png" class="img-fluid" alt="o que o sol faz com as flores">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>o que o sol faz com as flores - Rupi Kaur</i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/3xejvy9">
         <img src="/images/publicidade/amazon/livros/o_homem_mais_rico_babilonia.png" class="img-fluid" alt="O homem mais rico da Babilônia">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>O homem mais rico da Babilônia</i>
         </p> 
      </a>`, 

      `<a href="https://amzn.to/3IXAzuW">
         <img src="/images/publicidade/amazon/impressora_epson.png" class="img-fluid" alt="EPSON EcoTank L1250">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>EPSON EcoTank L1250 - Impressora, tanque de Tinta Colorida<br>Com sistema 100% sem cartuchos</i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/3VEMftW">
         <img src="/images/publicidade/amazon/livros/igor_pires_textos_crueis.png" class="img-fluid" alt="Textos cruéis demais para serem lidos rapidamente – Onde dorme o amor (TCD Livro 2) eBook Kindle">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Textos cruéis demais para serem lidos rapidamente – Onde dorme o amor (TCD Livro 2) eBook Kindle</i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/3TxS221">
            <img src="/images/publicidade/amazon/jbl_fone_ouvido.png" class="img-fluid" alt="JBL, Fone de Ouvido in Ear, C50HI - Preto">
            <p class="font_1 text-center m-0 p-0" >                      
               <i>JBL, Fone de Ouvido in Ear, C50HI</i>
            </p> 
        </a>`,  
      
   ];

   // teste
   var opcoes11 = [

      `<a href="https://amzn.to/3xejvy9">
         <img src="/images/publicidade/amazon/livros/rupi_kaur_o_que_o_sol.png" class="img-fluid" alt="o que o sol faz com as flores">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>o que o sol faz com as flores - Rupi Kaur</i>
         </p> 
      </a>`,  
       
 
   ]

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
         <img src="/images/publicidade/amazon/livros/fernando_pessoa_desassossego.png" class="img-fluid" alt="Livro do desassossego Capa comum – Versão integral">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Livro do desassossego Capa comum – Versão integral</i>
         </p> 
      </a>`,      
      
      `<a href="https://amzn.to/4cyIgW1">
         <img src="/images/publicidade/amazon/livros/fernando_pessoa_livros.png" class="img-fluid" alt="Poesias Livro de bolso">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Poesias Livro de bolso</i>
         </p> 
      </a>`,
            
      `<a href="https://amzn.to/3VEU6rI">
         <img src="/images/publicidade/amazon/quadros_frase.png" class="img-fluid" alt="Kit 3 Quadros Frase Abençoados Por Deus Cabeceira Mdf Vazado">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Kit 3 Quadros Frase Abençoados Por Deus Cabeceira Mdf Vazado</i>
         </p> 
      </a>`, 

      `<a href="https://amzn.to/3TG3lF9">
         <img src="/images/publicidade/amazon/pet/pet_areia_viva_verde.png" class="img-fluid" alt="Viva Verde Areia Higiênica Biodegradável Para Gatos Grãos Mistos 4Kg">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Viva Verde Areia Higiênica Biodegradável Para Gatos Grãos Mistos 4Kg</i>
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


function obterPublicidade_amazon_4() {
   var opcoes = [ 
      `<a href="https://amzn.to/3PD9dhd">
         <img src="/images/publicidade/amazon/pape_sulfite_a4.png" class="img-fluid" alt="Chamex - Papel Sulfite, A4, 75g, 500 folhas">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Chamex - Papel Sulfite, A4, 75g, 500 folhas</i>
         </p> 
      </a>`,  

      `<a href="https://amzn.to/4awDztW">
         <img src="/images/publicidade/amazon/tv_lg_55.png" class="img-fluid" alt="Smart TV 55" 4K LG UHD ThinQ AI 55UR8750PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Smart TV 55" 4K LG UHD ThinQ AI 55UR8750PSA HDR Bluetooth Alexa Google Assistente Airplay2 3 HDMI</i>
         </p> 
      </a>`, 

      `<a href="https://amzn.to/3TAvlKB">
         <img src="/images/publicidade/amazon/beleza_morte_subita.png" class="img-fluid" alt="Lola Cosmetics, 25834, Morte Súbita - Máscara Super Hidratante, 450g">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Lola Cosmetics, 25834, Morte Súbita - Máscara Super Hidratante, 450g</i>
         </p> 
      </a>`, 

      `<a href="https://amzn.to/4arpqOU">
         <img src="/images/publicidade/amazon/pet/pet_lencos.png" class="img-fluid" alt="BOLYDOOM Toalhas Umedecidas Pet 50 Unidades Com Tampa Flip Top Feelclean">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>BOLYDOOM Toalhas Umedecidas Pet 50 Unidades Com Tampa Flip Top Feelclean</i>
         </p> 
      </a>`, 
      
      
   ];

   var opcao_padrao =  
      `<a href="https://amzn.to/3PD9dhd">
         <img src="/images/publicidade/amazon/pape_sulfite_a4.png" class="img-fluid" alt="Chamex - Papel Sulfite, A4, 75g, 500 folhas">
         <p class="font_1 text-center m-0 p-0" >                      
            <i>Chamex - Papel Sulfite, A4, 75g, 500 folhas</i>
         </p> 
      </a>`;  

   var segundoAtual = new Date().getSeconds();
   var indice = segundoAtual % opcoes.length;   
   var resultado = opcoes[indice] || opcao_padrao;   
   return resultado;
} // obterPublicidade_amazon_4