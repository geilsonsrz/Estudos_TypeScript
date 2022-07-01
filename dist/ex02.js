"use strict";
/*
    EXERCÍCIO 2 - CRIANDO NOVOS TIPOS
*/
//Criação do Array de Planetas - Simulador do DB
//Uma array que recebe valores do tipo Planet.
const planets = [];
//Função para adicionar um planeta
function addPlanet(name, coordinates, situation) {
    //Recebe os parâmetros e cria um objeto e adiciona em planetas.
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi adicionado.`);
}
;
//Função para procurar um planeta.
function findPlanet(name) {
    //Localizando planeta
    const planet = planets.find(planeta => planeta.name == name);
    //?? serve para agregar um valor padrão.
    //Retorna um planeta, caso contrário, retorna falso.
    return planet ?? false;
}
;
//Função para atualizar uma situação.
function situationPlanet(situation, planet) {
    //Atualizando a situação conforme o parâmetro recebido.
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}.`);
}
;
//Adicionar satélites ao planeta
function addSatellite(satellite, planet) {
    //Adicionando o satélite conforme parâmetro
    planet.satellites.push(satellite);
    alert(`O satélite ${satellite} foi adicionado ao planeta ${planet.name}.`);
}
;
//Remover satélite do planeta
//Utilizando um método de filtro, em vez de remover por id
//O filter retorna uma array, no caso, retorna todos os nomes diferentes do parâmetro.
function removeSatellite(satellite, planet) {
    planet.satellites = planet.satellites.filter(satelite => satelite !== satellite);
    alert(`O satélite ${satellite} foi removido do planeta ${planet.name}.`);
}
;
//Função para validar situação do planeta
function validSituation() {
    //Opções das situações
    let situation;
    //Controle do loop
    let valid = true;
    while (valid) {
        let situationInput = prompt(`
        Qual a situação do planete:
        1 - Habitado
        2 - Habitável
        3 - Inabitável
        4 - Inexplorado
        `);
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                valid = false;
                break;
            case "2":
                situation = "Habitável";
                valid = false;
                break;
            case "3":
                situation = "Inabitável";
                valid = false;
                break;
            case "4":
                situation = "Inexplorado";
                valid = false;
                break;
            default:
                alert("Digite o numero de uma situação válida.");
                break;
        }
    }
    //Acusa erro mas tudo indica ser um bug da IDE
    return situation;
}
;
//Função para validação do planeta
function validPlanet(callbackfn) {
    const planetName = String(prompt("Nome do planeta: "));
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("Planeta não localizado!");
    }
}
;
//Primeira função - Registrar um novo planeta
function primeiraF() {
    let nome = String(prompt("Nome do planeta:"));
    let coordenadaA = Number(prompt("Coordenada A:"));
    let coordenadaB = Number(prompt("Coordenada B:"));
    let coordenadaC = Number(prompt("Coordenada C:"));
    let coordenadaD = Number(prompt("Coordenada D:"));
    let situacao = validSituation();
    addPlanet(nome, [coordenadaA, coordenadaB, coordenadaC, coordenadaD], situacao);
}
;
//Segunda função - Atualizar situação do planeta
function segundaF() {
    validPlanet(planeta => {
        let situacao = validSituation();
        situationPlanet(situacao, planeta);
    });
}
;
//Terceira função - Adicionar um satélite ao planeta
function terceiraF() {
    validPlanet(planeta => {
        let satelite = String(prompt("Nome do satélite:"));
        addSatellite(satelite, planeta);
    });
}
;
//Quarta função - Remover um satélite do planeta
function quartaF() {
    validPlanet(planeta => {
        let satelite = String(prompt("Nome do satélite:"));
        removeSatellite(satelite, planeta);
    });
}
;
//Quinta função - Lista todos os planetas
function quintaF() {
    let list = "Planetas:\n";
    //Agregando cada planeta ao texto.
    planets.forEach(planeta => {
        //Desestruturação de elemento para as coordenadas
        let [a, b, c, d] = planeta.coordinates;
        list += (`
        Nome: ${planeta.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planeta.situation}
        Satélites: ${planeta.satellites.length}`);
        //Agregando os satélites
        planeta.satellites.forEach(satelite => {
            list += (`\n            - ${satelite}`);
        });
    });
    //Exibir texto
    alert(list);
}
;
//Menu
let perg = true;
while (perg) {
    let option = Number(prompt(`
    MENU
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
    `));
    switch (option) {
        case 1:
            primeiraF();
            break;
        case 2:
            segundaF();
            break;
        case 3:
            terceiraF();
            break;
        case 4:
            quartaF();
            break;
        case 5:
            quintaF();
            break;
        case 6:
            perg = false;
            break;
        default:
            alert("Digite uma opção válida.");
            break;
    }
}
;
