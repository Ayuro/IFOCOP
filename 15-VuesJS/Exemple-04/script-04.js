const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            listOfObjects: [
                {name:'html', color:'blue'},
                {name:'css', color:'orange'},
                {name:'javascript', color:'gold'},
                {name:'angular', color:'crimson'},
                {name:'nodejs', color:'green'},
            ]
        }
    }
});

app.mount('#app')
