var animes = [ { 
    nome: "Genjitsu Shugi Yuusha no Oukoku Saikenki",
    img: "https://cdn.myanimelist.net/images/anime/1297/118764.jpg"
}, 
{ 
    nome: "Kobayashi-san Chi no Maid Dragon S",
    img: "https://cdn.myanimelist.net/images/anime/1252/115539.jpg"
},
{
    nome: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    img: "https://cdn.myanimelist.net/images/anime/1741/117622.jpg"
},
{
    nome: "Vanitas no Karte",
    img:"https://cdn.myanimelist.net/images/anime/1811/115541.jpg" 
},
{
    nome: "Kanojo mo Kanojo",
    img: "https://cdn.myanimelist.net/images/anime/1713/117119.jpg"
},
{
    nome: "Seirei Gensouki", 
    img: "https://cdn.myanimelist.net/images/anime/1453/116276.jpg"
},
{
    nome: "Jahy-sama wa Kujikenai!", 
    img: "https://cdn.myanimelist.net/images/anime/1154/115599.jpg"
},
{
    nome: "Tantei wa Mou, Shindeiru.", 
    img: "https://cdn.myanimelist.net/images/anime/1843/115815.jpg"
},
{
    nome: "Deatte 5-byou de Battle", 
    img: "https://cdn.myanimelist.net/images/anime/1145/115565.jpg"
}
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
var lista = document.getElementById("listaAnimes");
var nome = document.getElementById("nome").value;
var link = document.getElementById("urlAdd").value;
var x = animes.indexOf(link);
var popUp = document.getElementById("addContent");
var addContentCloser = document.getElementsByClassName("close")[0];