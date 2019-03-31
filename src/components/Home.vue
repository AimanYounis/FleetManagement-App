<template>
    <div>
        <h1>Fleet Management Application</h1>
        <hr>
        <p>Fleet Management application is small application for manging vehicles,vehicles types and vehicle companies.</p>
        <p>This website was developed using Node.js,Express,MySQL and Vue.js</p>
        <center>
            <div style="margin-top:50px">
             <router-link to="/vehicles" active-class="active" ><button class="btn btn-primary" style="margin:30px">View Vehicles</button></router-link>
              <router-link to="/vehicletypes" active-class="active" ><button class="btn btn-primary" style="margin:30px">Add/Update Vehicle Types</button></router-link>
             <router-link to="/vehiclecompanies"  active-class="active" > <button class="btn btn-primary" style="margin:30px">Add/Update Vehicle Companies</button></router-link>
           
        </div>
        </center>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex';
export default {
    data(){
        return {

        }
    },
    computed:{
     /* counter(){
         return this.$store.getters.DoubleCounter;
      },
      clicks(){
          return this.$store.getters.stringCounter;
      },*/
      ...mapGetters([
          'DoubleCounter',
          'stringCounter',
          'GetVehicleCompanies',
          'getVehicleTypes',
          'getVehicles'
      ])
    
    },

}
</script>
