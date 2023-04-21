const { createApp } = Vue

createApp({
    data() {
        return {
           arrayEmail:[],
        }
    },
    mounted(){

    },
    methods: {
        attivaApi(){
          for(let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=> {
                this.email = result.data.response;
                this.arrayEmail.push(this.email);
                console.log(this.arrayEmail)
            })
          }
          if(this.arrayEmail == 10){

          }
        }
    
    }
}).mount('#app')



