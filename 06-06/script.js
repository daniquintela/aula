function desenharCartela(){

    var nome_jogador = prompt('Digite o nome do Jogador')

var div_cartelas = document.getElementById('cartelas')

    var div_cartelas = document.createElement('div');
    div_cartelas.className = 'cartela;'

    varh4 = document.createElement('h4');
    h4.innerText = 'Nome do Jogador';

    div_cartelas.appendChild(h4);

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var thB = document.createElement('th');
    thB.innerText = "B"
    var thB = document.createElement('th');
    thI.innerText = "I"
    var thB = document.createElement('th');
    thN.innerText = "N"
    var thB = document.createElement('th');
    thG.innerText = "G"
    var thB = document.createElement('th');
    thO.innerText = "O"

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

var tbody = document.createElement('tbody');
for(var i = 0 < 5; i++;) {
    var tr = document.createElement('tr');
    for(var j = 0; j < 5; j++){
        var td = document.createElement('td');
        td.innerText = 'X'
        tr.appendChild(td)
    }
    tbody.appendChild(tr)
}


table.appendChild(tbody)
div_cartela.appendChild('table');
table.appendChild(thead);
div_cartela.appendChild(div_cartelas);

}
