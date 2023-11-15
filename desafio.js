// Definindo as variáveis
let nome = "Joaquim";
let xpDoHeroi = 8500;

// Utilizando switch para determinar o nível com base na xpDoHeroi
let nivel;

switch (true) {
  case xpDoHeroi < 1000:
    nivel = "Ferro";
    break;
  case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    nivel = "Bronze";
    break;
  case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
    nivel = "Prata";
    break;
  case xpDoHeroi >= 6001 && xpDoHeroi <= 7000:
    nivel = "Ouro";
    break;
  case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
    nivel = "Platina";
    break;
  case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
    nivel = "Ascendente";
    break;
  case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
}
// Exibindo a mensagem final
console.log("O Herói de nome " + nome + " está no nível de " + nivel + "!");




