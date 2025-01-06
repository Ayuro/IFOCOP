content.callbacks = { title: 'Fonctions de retour (callbacks)',
values: [
    {
      h3:`Ajout et gestion`
    },
    {
      description: `Ajoute une ou plusieurs fonctions de retour à la liste des fonctions de retour`,
      method: `callbacks.add()`,
      code: `callbacks.add(fonction);`
    },
    {
      description: `Lance toutes les fonctions de retour avec les arguments fournis`,
      method: `callbacks.fire()`,
      code: `callbacks.fire('bonjour');`
    },
    {
      description: `Appelle toutes les fonctions de retour avec leur contexte d'appel et les arguments fournis`,
      method: `callbacks.fireWith()`,
      code: `callbacks.fireWith(window, ['bidule','chose'] );`
    },
    {
      h3:`Vérification`
    },
    {
      description: `Vérifie si les fonctions de retour ont été appelées au moins une fois`,
      method: `callbacks.fired()`,
      code: `callbacks.fired();`
    },
    {
      description: `Déterminer si la liste de fonctions de retour n'est pas vide. Dans le cas où une fonction est fourni comme argument, callback.has vérifie si cette fonction fait partie de la liste.`,
      method: `callbacks.has()`,
      code: `callback.has(fonctionAVerifier);`
    },
    {
      description: `Vérifie si la liste de fonctions de retour est bloquée`,
      method: `callbacks.locked()`,
      code: `callbacks.locked();`
    },
    {
      description: `Vérifie si la liste de fonctions de retour est désactivée`,
      method: `callbacks.disabled()`,
      code: `callbacks.disabled();`
    },
    {
      h3:`Modification et suppression`
    },
    {
      description: `Supprime une ou plusieurs fonctions de retour d'une liste de fonctions de retour.`,
      method: `callbacks.remove()`,
      code: `callbacks.remove(fonctionAEnlever);`
    },
    {
      description: `Bloque la liste de fonctions de retour dans son état actuel`,
      method: `callbacks.lock()`,
      code: `callback.lock();`
    },
    {
      description: `Désactive la liste de fonctions de retour`,
      method: `callbacks.disable()`,
      code: `callbacks.disable();`
    },
        {
      description: `Supprime toutes les fonctions de retour de la liste`,
      method: `callbacks.empty()`,
      code: `callbacks.empty();`
    },
]};

