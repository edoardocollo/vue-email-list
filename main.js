let app = new Vue({
  el: '#app',
  data:{
    mails:[],
  },
  methods:{
    getMails: function(number){
      for (var i = 0; i < number; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
          console.log(resp.data.response);
          app.mails.push(resp.data.response);
        })
      }

    },
  },
  mounted(){
    const mailNumber = 10;
    this.getMails(mailNumber);



  }
});
