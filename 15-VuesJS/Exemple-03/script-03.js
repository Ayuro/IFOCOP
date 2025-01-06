const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            information: "Voici une petite liste",
            code: ['html','css','javascript','angular','nodejs'],
        }
    }
});

app.mount('#app')
