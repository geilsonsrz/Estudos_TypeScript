"use strict";
/*Exercício 01 de TypeScript - Declarando tipos*/
//Estação - SIMULAÇÃO DO DB
const estacao = [];
//Criação da nave
function novaNave(name, pilot, crewLimit) {
    const nave = { name, pilot, crewLimit, crew: [pilot], inMission: false };
    estacao.push(nave);
    alert(`Nave ${nave.name} foi registrada na Estação`);
}
;
//Localizar nave
function acharNave(name) {
    let nave;
    nave = estacao.find(nave => nave.name == name);
    return nave;
}
;
//Function Case 1
function primeiroCaso() {
    let nome = String(prompt("Nome da NAVE:")).toUpperCase();
    let piloto = String(prompt("Nome do PILOTO:"));
    let maxTripu = Number(prompt("Número máx de tripulantes:"));
    novaNave(`${nome}`, `${piloto}`, maxTripu);
}
;
//Function Case 2
function segundoCaso() {
    let nome = String(prompt("Nome da NAVE:")).toUpperCase();
    let nave = acharNave(nome);
    if (nave.crew.length < nave.crewLimit) {
        let novoTripulante = String(prompt("Novo tripulante:"));
        nave.crew.push(novoTripulante);
        alert(`Tripulante ${novoTripulante} embarcou.`);
    }
    else {
        alert(`Capacidade max atingida. Nao é possível embarcar.`);
    }
}
;
//Function Case 3
function terceiroCaso() {
    let nome = String(prompt("Nome da NAVE")).toUpperCase();
    let nave = acharNave(nome);
    if (nave.crew.length < Math.floor(nave.crewLimit / 3)) {
        alert("Saída negada! Baixo número de tripulantes.");
    }
    else if (nave.inMission) {
        alert("Nave ja esta em uma missao!");
    }
    else {
        nave.inMission = true;
        alert("Nave enviada para missao!");
    }
}
;
//Function Case 4
function quartoCaso() {
    let list = ("Listar todas as naves registradas\n");
    estacao.forEach(nave => {
        list += `
        Nave: ${nave.name}
        Piloto: ${nave.pilot}
        Limite: ${nave.crewLimit}
        Ocupação Atual: ${nave.crew.length}
        Em missão: ${nave.inMission}\n`;
    });
    alert(list);
}
;
//Gerenciamento da estação
let q = 0;
while (q == 0) {
    let p = Number(prompt(`
    Menu:
    1- Cadastrar nova nave;
    2- Alterar tripulação da nave;
    3- Enviar nave para uma missão;
    4- Listar todas as naves registradas;
    5- Sair.`));
    switch (p) {
        case 1:
            primeiroCaso();
            break;
        case 2:
            segundoCaso();
            break;
        case 3:
            terceiroCaso();
            break;
        case 4:
            quartoCaso();
            break;
        case 5:
            q = 1;
            break;
        default:
            alert("Valor inválido!");
            break;
    }
}
;
