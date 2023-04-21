const { createApp } = Vue

createApp({
    data() {
        return {
           arrayEmail:[],
        }
    },
    methods: {
        attivaApi(){
          for(let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=> {
                this.email = result.data.response;
                console.log(result.data.response)
                this.arrayEmail.push(this.email);
                console.log(arrayEmail)
            })
          }
        }
    
    }
}).mount('#app')



