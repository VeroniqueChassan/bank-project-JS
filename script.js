//HAMBURGER MENU
const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

//GERER LE COMPTE
const compteBtn = document.querySelector("#compte-btn");
const informationsClient = document.querySelector(".informations-client");

//CONSTANT INFORMATIONS CLIENT
const validerBtn = document.querySelector(".valider-btn");
const prenomNomInput = document.querySelector("#prenom-nom-input");
const identifiantInput = document.querySelector("#identifiant-input");

//CONSTANT COMPTE CLIENT ET OPERATIONS
const comptesClient = document.querySelector(".comptes-client");
let soldeClient = document.querySelector("#solde");
let nouveauSoldeClient = document.querySelector("#nouveau-solde");
const retirerArgentBtn = document.querySelector(".retirer-argent-btn");
const ajouterArgentBtn = document.querySelector(".ajouter-argent-btn");

//CONSTANT OPERATION
const compteOperations = document.querySelector(".operations");
let debitCredit = document.querySelector("#debit-credit");
const soldeBtn = document.querySelector(".solde-btn");
let date = new Date();
let today =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
let todayOuput = document.querySelector("#today-output");

//GERER VOTRE COMPTE BTN
compteBtn.addEventListener("click", () => {
  informationsClient.classList.add("show-information-client");
});

//INFORMATIONS CLIENT
validerBtn.addEventListener("click", () => {
  comptesClient.classList.add("show-compte-client");

  document.querySelector("#prenom-nom-output").value = prenomNomInput.value;

  document.querySelector("#identifiant-output1").value = identifiantInput.value;

  document.querySelector("#solde").innerHTML = soldeClient.value = 5000;
});

let operationChoisie;
//COMPTE CLIENT & OPERATIONS - DEBIT
retirerArgentBtn.addEventListener("click", () => {
  operationChoisie = 0;
  compteOperations.classList.add("show-operation");

  document.querySelector("#identifiant-output2").value = identifiantInput.value;

  debitCredit.innerHTML = "débiter (-)";

  todayOuput.innerHTML = today;
});

//COMPTE CLIENT & OPERATIONS - CREDIT
ajouterArgentBtn.addEventListener("click", () => {
  operationChoisie = 1;
  compteOperations.classList.add("show-operation");

  document.querySelector("#identifiant-output2").value = identifiantInput.value;

  debitCredit.innerHTML = "créditer (+)";

  todayOuput.innerHTML = today;
});

//OPERATION DEBIT
soldeBtn.addEventListener("click", () => {
  if (operationChoisie === 0) {
    nouveauSoldeClient.value = soldeClient.value - montant.value;
    soldeClient.innerHTML = nouveauSoldeClient.value;
    nouveauSoldeClient.innerHTML = nouveauSoldeClient.value;

    montant.value = "";
    soldeClient.value = nouveauSoldeClient.value;
  } else if (operationChoisie === 1) {
    nouveauSoldeClient.value =
      parseInt(soldeClient.value) + parseInt(montant.value);
    soldeClient.innerHTML = nouveauSoldeClient.value;
    nouveauSoldeClient.innerHTML = parseInt(nouveauSoldeClient.value);

    montant.value = "";
    soldeClient.value = nouveauSoldeClient.value;
  }
});
