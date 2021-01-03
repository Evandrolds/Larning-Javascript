/*
var nome = "Evandro Lima";
var idade = 34;
alert("Nome: "+ nome+ ", Idade:"+ idade ); // cocatenando Strings e exibindo no navegador
console.log(nome); //exibindo no navegador um popup
console.log(idade);
var frase = "Uruguai é o melhor pais para se viver";
console.log(frase.replace("Uruguai","United States")); // trocando a string Urugrai por outra, o metodo (replace)

var nomes = ["Evandro","Samuel","Ney"]; // trabalhando com Arrays

console.log(nomes[1]); // exibindo o index do array

alert(nomes[0]); // exibindo o index do array

nomes.push("Galego"); // add mais um elemento no array

console.log(nomes); // exibindo a lista
 
console.log(nomes.pop());// remove o ultimo elemento do array

console.log (nomes.reverse()); // invertendo a posição dos elemntos do array
console.log(nomes.toString().toUpperCase()); // convertendo uma arrey para string e deixando em Maiúsculo
console.log(nomes.sort().toString()); // ordenando uma arrey e deixando em maiúscula
console.log(nomes.toString()[2]); // percorrendo uma string e exibindo a posição do index recortado

console.log(nomes.join(" - ")); // converte para string,mas não separa com virgula,mas com sua preferencia

var fruta = {nome:"Pera",Cor:"Verde"}; // dicionario de dados
console.log(fruta.nome);
console.log(fruta.Cor);

var frutas = [{nome:"Uva",Cor:"Verde"},{nome:"Melão",Cor:"Amarelo"}]; // Lista de dicionario de dados
console.log(frutas[0].nome);
console.log(frutas[0].Cor);

/*
var NOME  = prompt("Qual é sua idade? "); // interagindo com o usuário utilizando a função (PROMPT(" "))
if(NOME >= 18){
    alert("Maior de Idade.")
}else{
    alert("Menor de Idade...");
}
 
 var number = 0;
 while(number <= 10){  // laços de repetição
     console.log(number);
     number++;
 }
*/

 /*
var number;
for(number = 5; number >= 0;number--){ // contador ou laço de repetição
    console.log(number);

}
*/
/*
var date = new Date(); // utilizando data 
console.log(date); // pegando a data completa
console.log(date.getFullYear());
console.log(date.getMonth()+1); // pegando a data do mês
console.log(date.getDay()); // pegando o numero referente ao dia da semana
console.log(date.getHours()); // pegando a hora atual
console.log(date.getMinutes()); // pegando  os minutos atuais
console.log(date.getSeconds()); // pegando  os segundos atuais

function somar(a, b){ // função que retorna a soma dos dois valores do parametro
    
    return a+b;
}
console.log(somar(6,4));
*/

/*
function botao(){
    alert("Welcome to Javascript...!");
}
*/

function returnOnClick(){
     // pegando um id da pagina html na tag <h3> e enviando uma msg ao usuário
    document.getElementById("id").innerHTML =  "<u><i>Click here  if you want to see My github </i></u>"; // ingetando um texto como html
   
}
/*
function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(setReplace("Vai Japao","Japao","Brazil"));
*/
function redirecionar(){
    window.open("https://github.com/Evandrolds");// abrir em outra janela
    // window.location.href ="https://github.com/Evandrolds"; // abrir na mesma janela
    
}
function moveMouse(){
    document.getElementById("id2").innerText ="Thank you for hovering over here";
}
function comeBack(){
    document.getElementById("id2").innerHTML ="mouse over here";
}
function load(){
    alert("Pagina carregada");
}
function functionChange(elemento) {
    console.log(elemento.value);
}