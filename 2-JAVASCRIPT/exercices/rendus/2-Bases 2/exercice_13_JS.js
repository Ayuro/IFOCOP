function ft_sure() {
    confirm('Ceci est un choix');
};

// confirm return true si on clique sur OK et false si on clique sur Annuler
function ft_rSure() {
    var sure = confirm('Ceci est un choix');
    alert(sure);
};

function ft_loadingSure () {
    if (confirm('Voulez-vous continuer?') === true) {
        alert('Vous avez cliqué sur OK')
    }
};