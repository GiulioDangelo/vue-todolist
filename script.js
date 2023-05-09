const app = Vue.createApp({

    data() {
        return {
            newTask : '',

            error : false,

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
                  done : true
                },
            ],


        }
    },


    methods: {
        addTask(){
            let cleanedTask = this.newTask.trim()
            if(cleanedTask.length >= 4){
            this.tasks.unshift(this.newTask);
            this.newTask = '';
            this.error = false;
        }  else {
            this.error = true;
        }
    },

    removeTask(index){
        this.tasks.splice(index,1);
    },

}})


app.mount('#app');