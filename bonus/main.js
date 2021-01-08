let app = new Vue({
  el: '#app',
  data: {
    numbers: [],
  },
  methods: {
    getCellsNumber: function(number) {
      for (var i = 0; i < number; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
          .then(resp => {
            console.log(resp.data.response);
            let color = ''
            if (resp.data.response <= 5) {
              color = 'yellow';
            }else{
              color = 'green'
            }
            app.numbers.push({
              value:resp.data.response,
              visible: false,
              color: color,
            });
          })
      }

    },
    show: function(index){
      console.log(index);
      app.numbers[index].visible=true;
    }
  },
  mounted() {
    const numberOfCell = 36;
    this.getCellsNumber(numberOfCell);

  },
});
