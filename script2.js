const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page[cite: 1]

    const taskText = input.value;
    if (taskText.trim() === "") return;

    // Créer l'élément de liste (li)[cite: 1]
    const li = document.createElement('li');
    li.textContent = taskText;

    // Bouton pour marquer comme accomplie[cite: 1]
    const doneBtn = document.createElement('button');
    doneBtn.textContent = "Terminer";
    doneBtn.onclick = function() {
        li.classList.toggle('completed'); // Bascule la classe CSS[cite: 1]
    };

    // Bouton pour supprimer[cite: 1]
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Supprimer";
    deleteBtn.onclick = function() {
        list.removeChild(li); // Supprime l'élément du DOM[cite: 1]
    };

    // Ajouter les boutons au li, puis le li à la liste[cite: 1]
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Réinitialiser le champ de texte
    input.value = "";
});
