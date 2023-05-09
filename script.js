const app = Vue.createApp({

    data() {
        return {
            tasks : [
                {
                  text : 'fare la spesa',
                  done : false
                },
        
                {
                  text : "lavare i piatti",
                  done : false
                },
        
                {
                  text : 'passare aspirapolvere',
                  done : false
                },
            ],


        }
    },


    methods: {
        
    },
})


app.mount('#app');