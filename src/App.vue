<template>
    <div class="container">
                <app-header></app-header>
              
      <router-view></router-view>
 
           
    </div>
</template>

<script>
  import Header from './components/Header.vue'
    export default {
      name:'app',
      components:{
        appHeader:Header
      },
      methods:{
       getCompanies(){
           let uri = 'https://fleetmanagment.herokuapp.com/getCompanies';
         this.axios.get(uri).then(response => {
            response.data.forEach(e =>{
               this.$store.dispatch('addVehicleCompany',e);
            });
        });

      },
      getVehiclesTypes(){
          let uri = 'https://fleetmanagment.herokuapp.com/getVehicleTypes';
         this.axios.get(uri).then(response => {
            response.data.forEach(e =>{
               this.$store.dispatch('addVehicleType',e);
            });
        });


      },
      getVehicles(){

        let uri = 'https://fleetmanagment.herokuapp.com/getVehicles';
         this.axios.get(uri).then(response => {
            response.data.forEach(e =>{
               this.$store.dispatch('addVehicle',e);
            });
        });


      }
     
    },
     created(){
         this.getCompanies();
          this.getVehiclesTypes();
          this.getVehicles();
      }
      
    }
    
    /**
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
     * 
     */
</script>
