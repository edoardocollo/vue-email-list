let app = new Vue({
  el: '#app',
  data: {
    numbers: [],
    saluto:'',
  },
  methods: {
    createCell: function(number) {
      for (var i = 0; i < number; i++) {
        this.numbers.push({
          value:'',
          color:'',
        });
      }

    },
    getNumber: function(index){
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then(resp => {
          const number = resp.data.response;
          console.log(number);
          this.numbers[index].value = number;
          if (number<= 5) {
            this.numbers[index].color = 'yellow';
          }else{
            this.numbers[index].color = 'green';
          }
        })

    },
  },
  mounted() {
    const numberOfCell = 36;
    this.createCell(numberOfCell);

  },
});
