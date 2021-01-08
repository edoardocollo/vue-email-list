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
            app.numbers.push(resp.data.response);
          })
      }

    },

  },
  mounted() {
    const numberOfCell = 36;
    this.getCellsNumber(numberOfCell);

  },
});
