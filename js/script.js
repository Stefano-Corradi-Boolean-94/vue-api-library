const {createApp} = Vue;


createApp({

  data(){

    return{
      apiUrl: 'https://openlibrary.org/search.json?author=',
      docs:[],
      loading:true,
      autoreDaCercare:'eco'
    } 

  },

  methods: {
    getApi(){
      
      this.loading = true;

      axios.get(this.apiUrl + this.autoreDaCercare)
        .then( res => {
          this.docs = res.data.docs
          // qui dopo che arriva la response dell'API
          console.log('ARRIVATO!!!!');
          this.loading = false
        });

      // questo messaggio viene letto subito
      console.log('Ho FATTO LA CHIAMATa AXIOS')


    }
  },

  mounted(){
    this.getApi()

  }

}).mount('#app')