function ordenar(conjunto){
  conjunto.sort(function(a,b){ if(a.nome > b.nome){
    return 1;
  } if(a.nome < b.nome){
    return -1;
  } return 0;
  })
  return conjunto}

ordenar(animes)

for (var i = 0; i < animes.length; i++) {
  lista.innerHTML += "<div><img src=" + animes[i].img + ">" + "<p>" + animes[i].nome + "</p></div>";
}

function addOpen(){
  popUp.style.display = "block";
}

const busca = document.getElementById('searchBar')
busca.addEventListener('keyup', (e) => {
  const buscando = e.target.value.toLowerCase()
  let busca = animes.filter(((buscar) =>  buscar.nome.toLowerCase().includes(buscando)))
  exibirElementos(busca)
})

function exibirElementos(conjunto){
let t = conjunto.map((elemento) => {
  return `<div><img src="${elemento.img}"><p>${elemento.nome}</p></div>`
}).join("");
lista.innerHTML = t
}

function adicionar() {
  link = document.getElementById("urlAdd").value;
  nome = document.getElementById("nome").value;
  x = animes.indexOf(animes.filter(((anime) =>  anime.img == link))[0]);
  if (x < 0 && link != "") {
    animes.push({nome: nome, img: link});
    nomeAnimes.push(nome);
    for (i; i < animes.length; i++) {
      lista.innerHTML += "<div><img src=" + animes[i].img + ">" + "<p>" + animes[i].nome + "</p></div>";
      document.getElementById("repetido").innerHTML = "";
    }
  } else {
    document.getElementById("repetido").innerHTML = "Titulo Ja Adicionado";
  }
  document.getElementById("searchBar").value = "";
  document.getElementById("urlAdd").value = "";
  document.getElementById("nome").value = "";
}

function remover() {
  link = document.getElementById("searchBar").value;
  x = animes.indexOf(animes.filter(((anime) =>  anime.nome == link))[0]);
  console.log(x)
  if (x < 0 || link == "") {
    document.getElementById("repetido").innerHTML = "Titulo Não Encontrado!";
  } else {
    document.getElementById("repetido").innerHTML = "Titulo Removido!";
    lista.removeChild(lista.childNodes[0]);
    animes.splice(x, 1);
    nomeAnimes.splice(x, 1)
    exibirElementos(animes)
    i--
  }
  document.getElementById("searchBar").value = "";
  document.getElementById("urlAdd").value = "";
  document.getElementById("nome").value = "";
}

window.onclick = function (event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
    document.getElementById("urlAdd").value = "";
    document.getElementById("nome").value = "";
  }
}
addContentCloser.onclick = function () {
  popUp.style.display = "none";
  document.getElementById("urlAdd").value = "";
  document.getElementById("nome").value = "";
}