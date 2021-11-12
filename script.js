function ordenar(conjunto){
  conjunto.sort(function(a,b){ if(a.nome.toLowerCase() > b.nome.toLowerCase()){
    return 1;
  } if(a.nome.toLowerCase() < b.nome.toLowerCase()){
    return -1;
  } return 0;
  })
  return conjunto}

ordenar(animes)
exibirElementos(animes)

function addOpen(){
  popUp.style.display = "block";
  addBox.style.display = "block";
}

function showInfoBox(item){
  x = animes.indexOf(animes.filter(((anime) =>  anime.nome == item))[0])
  document.getElementById("infoImg").src = animes[x].img;
  document.getElementById("titulo").innerHTML = animes[x].nome;
  popUp.style.display = "block";
  infoBox.style.display = "flex";
  addBox.style.display = "none";
}

const busca = document.getElementById('searchBar')
busca.addEventListener('keyup', (e) => {
  const buscando = e.target.value.toLowerCase()
  let busca = animes.filter(((buscar) =>  buscar.nome.toLowerCase().includes(buscando)))
  exibirElementos(busca)
})

function exibirElementos(conjunto){
let elementos = conjunto.map((elemento) => {
  return `<div><img src="${elemento.img}" onClick="showInfoBox('${elemento.nome}')"><p>${elemento.nome}</p></div>`
}).join("");
lista.innerHTML = elementos
}

function adicionar() {
  link = document.getElementById("urlAdd").value;
  nome = document.getElementById("nome").value;
  x = animes.indexOf(animes.filter(((anime) =>  anime.img == link))[0]);
  if (x < 0 && link != "") {
    animes.push({nome: nome, img: link});
    ordenar(animes)
    x = animes.indexOf(animes.filter(((anime) =>  anime.img == link))[0]);
    let novoElemento = document.createElement("div")
    novoElemento.innerHTML = `<img src="${animes[x].img}" onClick="showInfoBox('${animes[x].nome}')"><p>${animes[x].nome}</p>`
    lista.insertBefore(novoElemento, lista.childNodes[x])
    document.getElementById("repetido").innerHTML = "";
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
    exibirElementos(animes)
  }
  document.getElementById("searchBar").value = "";
  document.getElementById("urlAdd").value = "";
  document.getElementById("nome").value = "";
}

window.onclick = function (event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
    infoBox.style.display = "none";
    document.getElementById("urlAdd").value = "";
    document.getElementById("nome").value = "";
  }
}

function fecharPopUp() {
  popUp.style.display = "none";
  infoBox.style.display = "none";
  document.getElementById("urlAdd").value = "";
  document.getElementById("nome").value = "";
}