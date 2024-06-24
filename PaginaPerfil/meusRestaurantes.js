// Exibindo o nome do usuário logado
let idUsuarioLogado = JSON.parse(localStorage.getItem("userLogado")).id;
document.addEventListener('DOMContentLoaded', function() {
  let userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado) {
    idUsuarioLogado = userLogado.id;
    document.getElementById("nomeTitulo").textContent = userLogado.nome;
  }
});

var itemsPerPage = 3; // Defina o número de itens por página
var currentPage = 1;

function showPage(page) {
    var items = $("#listaRestaurantes .restaurant");
    var totalPages = Math.ceil(items.length / itemsPerPage);
    currentPage = page;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    items.hide();
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).show();

    $(".pagination button").removeClass("active");
    $(`.pagination button[data-page="${currentPage}"]`).addClass("active");
}

function updatePagination() {
    var items = $("#listaRestaurantes .restaurant:visible");
    var totalPages = Math.ceil(items.length / itemsPerPage);
    $(".pagination").html('');
    $("<button>").text("Anterior").attr("id", "prev").appendTo(".pagination");
    for (var i = 1; i <= totalPages; i++) {
        $("<button>").text(i).data("page", i).appendTo(".pagination");
    }
    $("<button>").text("Próximo").attr("id", "next").appendTo(".pagination");
    showPage(currentPage);
}

// $(".pagination").on("click", "button", function () {
//     var page = $(this).data("page");
//     if (page) {
//         showPage(page);
//     }
// });

// $(".pagination").on("click", "#prev", function () {
//     showPage(currentPage - 1);
// });

// $(".pagination").on("click", "#next", function () {
//     showPage(currentPage + 1);
// });


let listaTeste = JSON.parse(localStorage.getItem("listaRestaurantes"));
if (listaTeste == null) {
    localStorage.setItem('listaRestaurantes', JSON.stringify(db));
}

let lista = JSON.parse(localStorage.getItem("listaRestaurantes")).dados.filter(x => x.idUsuarioCriacao == idUsuarioLogado);

var restaurantes = '';
for (i = 0; i < lista.length; i++) {
    // restaurantesAntigo += `<p class="restaurante-item"> Nome do Restaurante: ${ lista.dados[i].nomeDoRestaurante } <br> <img src="${ lista.dados[i].imagem }"> <br> Descrição: ${ lista.dados[i].descricao } <br> Endereço: ${ lista.dados[i].endereco } <br> Ano de Fundação: ${ lista.dados[i].anoDeFundacao } <br> Tipo de Cozinha: ${ lista.dados[i].tipoDeCozinha } <br> Faixa de Preço: ${ lista.dados[i].faixaDePreco } <br> Nome do(a) Proprietário(a): ${ lista.dados[i].nomeDoProprietario } <br> Contato: ${ lista.dados[i].contato } <br> Horário de Funcionamento: ${ lista.dados[i].horarioDeFuncionamento }</p>`;
    restaurantes += `
            <div class="restaurant">
                <img src="${lista[i].imagem}" alt="Restaurante ${lista[i].nomeDoRestaurante}">
                <div class="info">
                    <h2>${lista[i].nomeDoRestaurante}</h2>
                    <div class="rating">4,6 ★★★★★ (15 mil) - ${lista[i].faixaDePreco} - ${lista[i].tipoDeCozinha}</div>
                    <div class="details">${lista[i].endereco}</div>
                    <div class="details">${lista[i].horarioFuncionamento}</div>
                </div>
            </div>`
}

document.getElementById('listaRestaurantes').innerHTML = restaurantes;
updatePagination(); 