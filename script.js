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
                  done : true
                },
        
                {
                  text : 'passare aspirapolvere',
                  done : false
                },
            ],


        }
    },


    methods: {
        addTask(){
            let cleanedTask = this.newTask.trim()
            if(cleanedTask.length >= 4){
                let newObj = {
                    text : cleanedTask,
                    done : false
                }
            this.tasks.unshift(newObj);
            this.newTask = '';
            this.error = false;
        }  else {
            this.error = true;
        }

    },

    removeTask(index){
        this.tasks.splice(index,1);
    },

    // addTextLine(i){
    //         this.tasks[i].done = !this.tasks[i].done
    //         // text.addClass('text-decoration-line-through');
}})


app.mount('#app');