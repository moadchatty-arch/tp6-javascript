
let div = document.createElement("div");
document.body.appendChild(div);
let p = document.createElement("p");
p.textContent = "Ceci est un paragraphe";
div.appendChild(p);
p.textContent = "Le texte a été modifié";
p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";
div.addEventListener("click", function() {
    p.textContent = "Un clic a été détecté";
});
