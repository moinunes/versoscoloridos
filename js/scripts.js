
function carregar_rodape() {
   $("#div_rodape").load("/rodape.html", function(response, status, xhr) {
      if (status == "error") {
         console.log("Erro ao carregar o rodapé:", xhr.statusText);
      }
   });
}

function carregar_cabecalho() {
   $("#div_cabecalho").load("/header.html", function(response, status, xhr) {
      if (status == "error") {
            console.log("Erro ao carregar o header.html:", xhr.statusText);
      }
   });
}

/*
* Adiciona um ouvinte de eventos de clique aos links, para abrir os poemas 
*
*/
$(".list-group-item a").click(function(e) {
   if (!$(this).hasClass('ignore-click')) {
      // Evita o comportamento padrão de clicar em um link
      e.preventDefault();
      
      // Obtém o ID da div do poema associado ao link
      var poemaDivID = $(this).data("poema-div");
      
      // Esconde todas as divs de poemas
      $(".poema-div").hide();
      
      // Mostra apenas a div do poema associada ao link clicado
      $("#" + poemaDivID).show();
      
      // Move a tela para o topo da div do poema selecionado, ajustando para 10 pixels acima do topo
      var targetDiv = $("#" + poemaDivID);
      var targetPosition = targetDiv.offset().top - 40;

      $('html, body').animate({
         scrollTop: targetPosition
      }, 700);
   }
});

function compartilharWhatsApp(id) {
   var elemento = document.getElementById(id);

   // Verificar se o elemento com o ID fornecido existe
   if (elemento) {
      var mensagem = encodeURIComponent(elemento.innerText.trim());
      var url = encodeURIComponent(window.location.href);

      // Criar o link de compartilhamento do WhatsApp para texto
      var linkDeCompartilhamento = "https://api.whatsapp.com/send?text=" + mensagem + "%0A" + url;

      // Abrir a janela de compartilhamento do WhatsApp
      window.open(linkDeCompartilhamento, '_blank');
   } else {
      console.error("Elemento não encontrado com o ID: " + id);
   }
}

