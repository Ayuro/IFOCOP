const { createApp, ref, computed } = Vue;

const app = createApp({

    setup() {
        const textInput = ref('');

        const displayText = computed(() => {
            if (textInput.value) return `La saisie est: ${ textInput.value }`
            return '';
        })

        return {
            textInput,
            displayText
        }
    },

    data() {
        return {
            title: '05 - VuesJS - Première utilisation de ref',
        }
    }
});

app.mount('#app')
