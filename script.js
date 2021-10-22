var lista = document.getElementById("listaAnimes");
var nome = document.getElementById("nome").value;
var link = document.getElementById("urlAdd").value;
var animes = [ { nome: "Genjitsu Shugi Yuusha no Oukoku Saikenki",
    img: "https://cdn.myanimelist.net/images/anime/1297/118764.jpg"}, 
    { nome: "Kobayashi-san Chi no Maid Dragon S",
    img: "https://cdn.myanimelist.net/images/anime/1252/115539.jpg"},
    {nome: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    img: "https://cdn.myanimelist.net/images/anime/1741/117622.jpg"},
    {nome: "Vanitas no Karte",
    img:"https://cdn.myanimelist.net/images/anime/1811/115541.jpg" },
    {nome: "Kanojo mo Kanojo",
    img: "https://cdn.myanimelist.net/images/anime/1713/117119.jpg"},
    {nome: "Seirei Gensouki", 
    img: "https://cdn.myanimelist.net/images/anime/1453/116276.jpg"},
    {nome: "Jahy-sama wa Kujikenai!", 
    img: "https://cdn.myanimelist.net/images/anime/1154/115599.jpg"},
    {nome: "Tantei wa Mou, Shindeiru.", 
    img: "https://cdn.myanimelist.net/images/anime/1843/115815.jpg"},
    {nome: "Deatte 5-byou de Battle", 
    img: "https://cdn.myanimelist.net/images/anime/1145/115565.jpg"}
];
var nomeAnimes = [
  "Genjitsu Shugi Yuusha no Oukoku Saikenki",
  "Kobayashi-san Chi no Maid Dragon S",
  "Tensei shitara Slime Datta Ken 2nd Season Part 2",
  "Vanitas no Karte", "Kanojo mo Kanojo",
  "Seirei Gensouki", "Jahy-sama wa Kujikenai!",
  "Tantei wa Mou, Shindeiru.",
  "Deatte 5-byou de Battle"
];
var x = animes.indexOf(link);
var popUp = document.getElementById("addContent");
var addContentCloser = document.getElementsByClassName("close")[0];

for (var i = 0; i < animes.length; i++) {
  lista.innerHTML += "<div><img src=" + animes[i].img + ">" + "<p>" + animes[i].nome + "</p></div>";
}

function addOpen(){
  popUp.style.display = "block";
}

const busca = document.getElementById('searchBar')
busca.addEventListener('keyup', (e) => {
  console.log(e.target.value)
  console.log(animes.map((test) => {
    return `t ${test.nome} e ${test.img}`
  }))
})

function buscaElemento(elemento){
lista.innerHTML = elemento
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
  x = animes.indexOf(animes.filter(((anime) =>  anime.img == link))[0]);
  console.log(x)
  if (x < 0 || link == "") {
    document.getElementById("repetido").innerHTML = "Titulo Não Encontrado!";
  } else {
    document.getElementById("repetido").innerHTML = "Titulo Removido!";
    lista.removeChild(lista.childNodes[x]);
    animes.splice(x, 1);
    nomeAnimes.splice(x, 1)
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