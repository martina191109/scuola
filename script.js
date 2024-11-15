for (const elemento of elementi) {


let contenitore = document.createElement('div');

contenitore.style.borderStyle = 'solid';
contenitore.style.width = '70px';
contenitore.style.height = '70px';
contenitore.style.borderStyle = 'solid'
contenitore.style.position = "absolute"

contenitore.style.left = 70*elemento.xpos + 'px';
contenitore.style.top = 70* elemento.ypos + 'px'; 
contenitore.style.boxSizing = "border-box"


let numeroAtomico = document.createElement('span');
numeroAtomico.innerText = elemento.number;
numeroAtomico.style.display = "block"

let simbolo = document.createElement('a');
simbolo.innerText = elemento.symbol;
simbolo.style.fontSize = '25px';
simbolo.href = elemento.source;
simbolo.style.display = "block"

let nomeElemento = document.createElement('span');
nomeElemento.innerText = elemento.name;
nomeElemento.style.display ="block"
nomeElemento.style.fontSize = "11px"

contenitore.appendChild(numeroAtomico);
contenitore.appendChild(simbolo);
contenitore.appendChild(nomeElemento);



let contenutoPrincipale = document.getElementById('contenuto-principale');

contenutoPrincipale.appendChild(contenitore);


    
} 