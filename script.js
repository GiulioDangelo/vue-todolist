const app = Vue.createApp({

    data() {
        return {
            newTask : 
                {
                  text : '',
                  done : false
                },

            error : false,

            tasks : [
                {
                  text : 'fare la spesa',
                  done : false
                },
        
                {
                  text : "lavare i piatti",
                  done : true
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
            let cleanedTask = this.newTask.text.trim()
            if(cleanedTask.length >= 4){
            this.tasks.unshift(this.newTask.text);
            this.newTask.text = '';
            this.error = false;
        }  else {
            this.error = true;
        }
    },

    removeTask(index){
        this.tasks.splice(index,1);
    },

    addTextLine(){
        if (this.done == true) {
            this.tasks[i].done = !this.tasks[i].done
            // text.addClass('text-decoration-line-through');
        }
    },
    

}})


app.mount('#app');