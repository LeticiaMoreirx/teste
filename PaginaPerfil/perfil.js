let userLogado = JSON.parse(localStorage.getItem("userLogado"));
document.getElementById("nome").innerHTML = userLogado.nome;
document.getElementById("nomeTitulo").innerHTML = userLogado.nome;
document.getElementById("email").innerHTML = userLogado.email;
document.getElementById("telefone").innerHTML = userLogado.telefone;
document.getElementById("categoria").innerHTML = userLogado.opcoes;
document.getElementById("endereco").innerHTML = userLogado.endereco;

if (localStorage.getItem("token") == null) {
    window.location.href = "../pagina-login/login.html"
}

if (userLogado.opcoes == "consumidor") {
    document.getElementById("liCadastroRestaurantes").style.display = "none";
    document.getElementById("liMeusRestaurantes").style.display = "none";
}


function sair() {

    localStorage.removeItem("token")
    localStorage.removeItem("userLogado")

    window.location.href = "../pagina-login/login.html"

}