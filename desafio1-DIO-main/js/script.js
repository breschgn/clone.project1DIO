function calcularNivel() {
    let nome = document.getElementById("nome").value;
    let xp = parseInt(document.getElementById("xp").value);
    let resultado = "";

    if (xp < 1000) {
        resultado = "O herói de nome " + nome + " está no nível Bronze.";
    } 
    else if (xp >= 1000 && xp < 2000) {
        resultado = "O herói de nome " + nome + " está no nível Prata.";
    } 
    else if (xp >= 2000 && xp < 6000) {
        resultado = "O herói de nome " + nome + " está no nível Ouro.";
    } 
    else if (xp >= 6000 && xp < 7000) {
        resultado = "O herói de nome " + nome + " está no nível Platina.";
    } 
    else if (xp >= 7000 && xp < 9000) {
        resultado = "O herói de nome " + nome + " está no nível Ascendente.";
    } 
    else if (xp >= 9000) {
        resultado = "O herói de nome " + nome + " está no nível Imortal.";
    }

    document.getElementById("resultado").innerText = resultado;
}
