// Exibindo o nome do usuário logado
var idUsuarioLogado;

document.addEventListener('DOMContentLoaded', function() {
  let userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado) {
    idUsuarioLogado = userLogado.id;
    document.getElementById("nomeTitulo").textContent = userLogado.nome;
  }
});

// Função para cadastrar o restaurante
function cadastrar() {
  // Obtendo os elementos do formulário
  const nome = document.getElementById('nome_restaurante');
  const imagem = document.getElementById('imagem_restaurante');
  const descricao = document.getElementById('descricao');
  const endereco = document.getElementById('endereco');
  const anoFundacao = document.getElementById('ano_fundacao');
  const tipoCozinha = document.getElementById('tipo_cozinha');
  const faixaPreco = document.getElementById('faixa_preco');
  const proprietario = document.getElementById('proprietario');
  const contato = document.getElementById('contato');
  const horarioFuncionamento = document.getElementById('horario_funcionamento');

  // Validação dos campos do formulário
  if (!nome.value || nome.value.length < 2) {
    alert("Preencha o nome do restaurante corretamente!");
    nome.focus();
    return false;
  }
  if (!imagem.value || imagem.value.length < 6) {
    alert("Preencha o link da imagem corretamente!");
    imagem.focus();
    return false;
  }
  if (!descricao.value || descricao.value.length < 10) {
    alert("Preencha a descrição corretamente!");
    descricao.focus();
    return false;
  }
  if (!endereco.value || endereco.value.length < 10) {
    alert("Preencha o endereço corretamente!");
    endereco.focus();
    return false;
  }
  if (!anoFundacao.value || anoFundacao.value.length != 4) {
    alert("Preencha o ano de fundação corretamente!");
    anoFundacao.focus();
    return false;
  }
  if (tipoCozinha.value == "null") {
    alert("Selecione o tipo de cozinha!");
    tipoCozinha.focus();
    return false;
  }
  if (faixaPreco.value == "null") {
    alert("Selecione a faixa de preço!");
    faixaPreco.focus();
    return false;
  }
  if (!proprietario.value || proprietario.value.length < 2) {
    alert("Preencha o nome do proprietário corretamente!");
    proprietario.focus();
    return false;
  }
  if (!contato.value || contato.value.length < 6) {
    alert("Preencha o contato corretamente!");
    contato.focus();
    return false;
  }
  if (!horarioFuncionamento.value) {
    alert("Preencha o horário de funcionamento!");
    horarioFuncionamento.focus();
    return false;
  }

  // Carregando a lista de restaurantes do localStorage
  let listaRestaurantes = JSON.parse(localStorage.getItem('listaRestaurantes')) || { dados: [ 
    {
    nomeDoRestaurante: 'Restaurante da Praça',
    imagem: 'https://fastly.4sqi.net/img/general/width960/81330880_eVa1ws4pJxR5-CZH_ITs_NQHkGIQBa2Qzl3uj3EHsWg.jpg',
    descricao: 'Restaurante da Praça é um lugar aconchegante, conhecido por sua comida deliciosa e atendimento excepcional. Situado no coração da cidade, oferece uma experiência gastronômica única com pratos tradicionais e contemporâneos. É o local ideal para um almoço de negócios, um jantar romântico ou uma celebração em família.',
    endereco: 'Rua das Flores, 123, Centro, Cidade Exemplo, Estado Exemplo, CEP 12345-678',
    anoDeFundacao: '2005',
    tipoDeCozinha: 'Brasileira',
    faixaDePreco: 'Média',
    nomeDoProprietario: 'Ana Maria Silva',
    contato: 'contato@restaurantedapraca.com.br',
    horarioDeFuncionamento: '10:00 - 22:00',
    idUsuarioCriacao: '1'
}
] };

  // Adicionando o novo restaurante à lista
  listaRestaurantes.dados.push({
    nomeDoRestaurante: nome.value,
    imagem: imagem.value,
    descricao: descricao.value,
    endereco: endereco.value,
    anoFundacao: anoFundacao.value,
    tipoDeCozinha: tipoCozinha.value,
    faixaDePreco: faixaPreco.value,
    proprietario: proprietario.value,
    contato: contato.value,
    horarioFuncionamento: horarioFuncionamento.value,
    idUsuarioCriacao: idUsuarioLogado
  });

  // Salvando a lista atualizada no localStorage
  localStorage.setItem('listaRestaurantes', JSON.stringify(listaRestaurantes));

  // Mensagem de sucesso e redirecionamento
  alert("Restaurante cadastrado com sucesso!");
  window.location.href = "../PaginaRestaurantes/paginaRestaurantes.html";
  return false;
}