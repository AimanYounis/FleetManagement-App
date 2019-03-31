<template>
<div class="container" style="margin: 20px auto;">
  <div class="form-group pull-left">
    <input type="text" class="search form-control" placeholder="What you looking for?" v-model="search">
</div>
<div class="form-group pull-right">
 <router-link to="/editVehicle" ><button class="btn btn-primary">Add/Update Vehicle </button></router-link>
</div>
	   <table class="table" bordered>
  <thead class="thead-dark">
    <tr >
      <th>Company</th>
      <th>Vehicle Type</th>
      <th>Model</th>
      <th>License Plate</th>
      <th>Activation Month</th>
      <th>Purchase Month</th>
      <th>Battery Expiry Date</th>
      <th>Remarks</th>


    </tr>
  </thead>
  <tbody>
    <tr v-for="veh in filteredData" :key="veh.VehicleID" v-bind:class="veh.displayedColor">
      <td>{{veh.CompanyName}}</td>
      <td>{{veh.IsElectronic}}</td>
      <td>{{veh.Model}}</td>
      <td>{{veh.LicensePlate}}</td>
      <td>{{veh.ActivationMonth}}</td>
      <td>{{veh.PurchaseMonth}}</td>
      <td>{{veh.BatteryExpiryDate}}</td>
      <td>{{veh.Remarks}}</td>
    </tr>


  </tbody>
</table>



        </div><!--container-->

</template>

<script>
export default {
    data(){
        return{
          search:''
        }
    },
   computed:{
      filteredData(){
        return this.$store.getters.getData.filter((p)=>{
              return p.Model.toLowerCase().includes(this.search.toLowerCase()) || p.LicensePlate.toLowerCase().includes(this.search.toLowerCase()) 
              || p.ActivationMonth.toLowerCase().includes(this.search.toLowerCase()) 
              || p.PurchaseMonth.toLowerCase().includes(this.search.toLowerCase()) || p.BatteryExpiryDate.toLowerCase().includes(this.search.toLowerCase())
              || p.Remarks.toLowerCase().includes(this.search.toLowerCase()) || p.IsElectronic.toLowerCase().includes(this.search.toLowerCase()) 
              || p.CompanyName.toLowerCase().includes(this.search.toLowerCase());
            });
      },
   },
   created(){
   }
}
</script>

<style scoped>

    .red{
      background-color: rgb(233, 49, 49)!important;
      text-align: center;
    }
    .yellow{
      background-color: #FFFF00!important;
     text-align: center;
    }
    .pink{
      background-color: #FFC0CB!important;
     text-align: center;
    }
    .blue{
      background-color: #0000FF!important;
      text-align: center;
    }
    .white{
      background-color: white!important;
     text-align: center;
    }

  
</style>
