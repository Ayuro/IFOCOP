window.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('monBouton');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    resultat();
  });

  function resultat() {
    const xhttp = new XMLHttpRequest();
    const identifiant = document.getElementById("identifiant").value;
    const motDePasse = document.getElementById("password").value;

    if (identifiant && motDePasse) {
      const body = JSON.stringify({ identifiant, motDePasse });
      xhttp.open("GET", `/exercice-02/connexion?identifiant=${identifiant}&motDePasse=${motDePasse}`, true);
      xhttp.setRequestHeader("Accept", "application/json");
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          affiche(this.responseText);
        }
      }
      xhttp.send(body);
    }
  }

  function affiche(valeur) {
    const texteElement = document.querySelector(".attack-feedback");
    texteElement.style.display = "block";
    texteElement.textContent = valeur;
  }
});
