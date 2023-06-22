// Criação de uma String "fName" que ficaria dedicada para o primeiro nome do usuario
let fName = "";
// Criação de uma String "lName" que fica dedicada para o ultimo nome do usuario
let lName = "";
// Crição de uma String que fica dedicada para o campo de estudos do usuario
let studyCamp = "";
// Criação de uma String que fica dedicada para a data de aniversario do usuario
let birthday = "";

//Criação da interação com usuario
// Aqui o usuario coloca as informações que foram pedidas
// Elas serão guardadas nas variaveis que foram criadas anteriormente
fName = window.prompt("Digite o seu primeiro nome:");
lName = window.prompt("Digite o seu sobrenome:");
studyCamp = window.prompt("Digite o seu campo de estudo:");
birthday = window.prompt("Digite a sua data de nascimento:");
//Aqui temos apenas a impressão dos resultados dentro do console do navegador
console.log(fName);
console.log(lName);
console.log(studyCamp);
console.log(birthday);
