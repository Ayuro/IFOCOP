const { createApp } = Vue;

createApp({
    setup() {
        const message = "Voici un petit message avec VueJS.";
        const listeInformation = {
            un: "Soleil",
            deux: "Fruit"
        }

        return {
            message, listeInformation
        }
    }
}).mount('#app')