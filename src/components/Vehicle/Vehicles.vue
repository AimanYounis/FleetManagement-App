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
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Company</th>
      <th scope="col">Vehicle Type</th>
      <th scope="col">Model</th>
      <th scope="col">License Plate</th>
      <th scope="col">Activation Month</th>
      <th scope="col">Purchase Month</th>
      <th scope="col">Battery Expiry Date</th>
      <th scope="col">Remarks</th>


    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #F23838;text-align:center" v-for="veh in globalFilter('red')" :key="veh.VehicleID">
      <th scope="row">{{veh.VehicleID}}</th>
      <td>{{veh.CompanyName}}</td>
      <td>{{veh.IsElectronic}}</td>
      <td>{{veh.Model}}</td>
      <td>{{veh.LicensePlate}}</td>
      <td>{{veh.ActivationMonth}}</td>
      <td>{{veh.PurchaseMonth}}</td>
      <td>{{veh.BatteryExpiryDate}}</td>
      <td>{{veh.Remarks}}</td>
      <p>{{veh.BatteryExpiryDate.charAt(8)}}</p>
      <p> {{veh.BatteryExpiryDate.charAt(9)}}</p>
    </tr>

     <tr style="background-color: #F9F956;text-align:center" v-for="veh in globalFilter('yellow')" :key="veh.VehicleID">
      <th scope="row">{{veh.VehicleID}}</th>
      <td>{{veh.CompanyName}}</td>
      <td>{{veh.IsElectronic}}</td>
      <td>{{veh.Model}}</td>
      <td>{{veh.LicensePlate}}</td>
      <td>{{veh.ActivationMonth}}</td>
      <td>{{veh.PurchaseMonth}}</td>
      <td>{{veh.BatteryExpiryDate}}</td>
      <td>{{veh.Remarks}}</td>
      
    </tr>

    <tr style="background-color: pink;text-align:center" v-for="veh in globalFilter('pink')" :key="veh.VehicleID">
      <th scope="row">{{veh.VehicleID}}</th>
      <td>{{veh.CompanyName}}</td>
      <td>{{veh.IsElectronic}}</td>
      <td>{{veh.Model}}</td>
      <td>{{veh.LicensePlate}}</td>
      <td>{{veh.ActivationMonth}}</td>
      <td>{{veh.PurchaseMonth}}</td>
      <td>{{veh.BatteryExpiryDate}}</td>
      <td>{{veh.Remarks}}</td>
      
    </tr>

    <tr style="background-color: #52B4F6;text-align:center" v-for="veh in globalFilter('blue')" :key="veh.VehicleID">
      <th scope="row">{{veh.VehicleID}}</th>
      <td>{{veh.CompanyName}}</td>
      <td>{{veh.IsElectronic}}</td>
      <td>{{veh.Model}}</td>
      <td>{{veh.LicensePlate}}</td>
      <td>{{veh.ActivationMonth}}</td>
      <td>{{veh.PurchaseMonth}}</td>
      <td>{{veh.BatteryExpiryDate}}</td>
      <td>{{veh.Remarks}}</td>
      
    </tr>


      <tr style="text-align:center" v-for="veh in globalFilter('rest')" :key="veh.VehicleID">
      <th scope="row">{{veh.VehicleID}}</th>
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
          search:'',
            allVeh:[],
            VehicleInfo:{
                     VehicleID:'',
                     LicensePlate:'',
                     ActivationMonth:'',
                     PurchaseMonth:'',
                     BatteryExpiryDate:null,
                     Remarks:'',
                     Model:'',
                     IsElectronic:'',
                     CompanyName:''
            }
        }
    },
   computed:{
        filtererdRedList(){
            return this.getRedVehicles().filter((p)=>{
              return p.Model.toLowerCase().includes(this.search.toLowerCase()) || p.LicensePlate.toLowerCase().includes(this.search.toLowerCase()) 
              || p.ActivationMonth.toLowerCase().includes(this.search.toLowerCase()) || p.VehicleID.toLowerCase().includes(this.search.toLowerCase()) 
              || p.PurchaseMonth.toLowerCase().includes(this.search.toLowerCase()) || p.BatteryExpiryDate.toLowerCase().includes(this.search.toLowerCase())
              || p.Remarks.toLowerCase().includes(this.search.toLowerCase()) || p.IsElectronic.toLowerCase().includes(this.search.toLowerCase()) 
              || p.CompanyName.toLowerCase().includes(this.search.toLowerCase());
            });
        },
        getAllrequiredData(){
          this.getVehicles.forEach(element => {
             let tempVehicleInfo ={};
                this.VehicleInfo.VehicleID = element.VehicleID;
                this.VehicleInfo.PurchaseMonth = element.PurchaseMonth;
                this.VehicleInfo.LicensePlate = element.LicensePlate;
                this.VehicleInfo.ActivationMonth = element.ActivationMonth;
                if(element.BatteryExpiryDate == null){
                    this.VehicleInfo.BatteryExpiryDate = '------';
                }else{
                  let batteryDate = element.BatteryExpiryDate.substring(0,10);
                    this.VehicleInfo.BatteryExpiryDate = batteryDate;
                }
                this.VehicleInfo.Remarks = element.Remarks;
                this. getVehicleTypes.forEach((TypeElement) =>{
                  if(element.VehicleTypeID == TypeElement.VehicleTypeID){
                      this.VehicleInfo.Model = TypeElement.Model;
                      if(TypeElement.IsElectronic == 0){
                        this.VehicleInfo.IsElectronic = 'Petrol';
                         this.VehicleInfo.BatteryExpiryDate = '------';
                      }else{
                          this.VehicleInfo.IsElectronic = 'Electric';
                
                      }
                      this.getVehicleCompanies.forEach((companyElement) => {
                        if(companyElement.VehicleCompanyID == TypeElement.CarCompanyID){
                          this.VehicleInfo.CompanyName = companyElement.CompanyName;
                          tempVehicleInfo = Object.assign({},this.VehicleInfo);
                          this.allVeh.push(tempVehicleInfo);
                        }
                      });
                  }
                });
          });

        },
       getVehicles(){
           return this.$store.getters.getVehicles;
       },
       getVehicleCompanies(){
           return this.$store.getters.GetVehicleCompanies;
        },
        getVehicleTypes(){
           return this.$store.getters.getVehicleTypes;
       },
   },
   methods:{
         getRestOfVehicles(){
           return this.allVeh.filter((p)=>{
             const indexYellow = this.getYellowVehicles().findIndex(pe => pe.VehicleID == p.VehicleID);
              const indexRed = this.getRedVehicles().findIndex(pe=>pe.VehicleID == p.VehicleID);
              const indexPink = this.getPinkVehicles().findIndex(pe=>pe.VehicleID == p.VehicleID);
              const indexBlue = this.getBlueVehicles().findIndex(pe => pe.VehicleID == p.VehicleID);
              if(indexYellow != -1 || indexRed != -1 || indexPink != -1 || indexBlue !=-1 ){
                return false;
              }else{
                return true;
              }
           });
        },
        getBlueVehicles(){
          let currentDate = new Date();
          let day = currentDate.getDate();
         let month = currentDate.getUTCMonth() + 1;
         let year = currentDate.getUTCFullYear();

          return this.allVeh.filter((p)=>{
            if(p.IsElectronic != 0){
               const indexYellow = this.getYellowVehicles().findIndex(pe => pe.VehicleID == p.VehicleID);
              const indexRed = this.getRedVehicles().findIndex(pe=>pe.VehicleID == p.VehicleID);
              const indexPink = this.getPinkVehicles().findIndex(pe=>pe.VehicleID == p.VehicleID);
              if(indexYellow != -1 || indexRed != -1 || indexPink != -1){
                return false;
              }else{
              let ExpiryDay = p.BatteryExpiryDate.charAt(8)+""+p.BatteryExpiryDate.charAt(9);
              if(day === 0){
                day = 30;
              }else{
                day = day -1;
              }
              let ExpiryDate = p.BatteryExpiryDate.split("-");          

              if((parseInt(ExpiryDate[0]) - year ) == 0){
                  if( ((parseInt(ExpiryDate[1]) - month) == 0)&&(((parseInt(ExpiryDay) - day) > 0 )) ){
                      return true;
                  }else{
                    return false;
                  }

              }else{
                return false;
              }

              }
            }else{
              return false;
            }
          });
        },
        getPinkVehicles(){
          let currentDate = new Date();
          let day = currentDate.getDate();
         let month = currentDate.getUTCMonth() + 1;
         let year = currentDate.getUTCFullYear();
          return this.allVeh.filter((p)=>{
              if(p.IsElectronic == 'Electric'){
            const indexYellow = this.getYellowVehicles().findIndex(pe => pe.VehicleID == p.VehicleID);
              const indexRed = this.getRedVehicles().findIndex(pe=>pe.VehicleID == p.VehicleID);
              if(indexYellow != -1 || indexRed != -1){
                return false;
              }
              let ExpiryDay = p.BatteryExpiryDate.charAt(8)+""+p.BatteryExpiryDate.charAt(9);
              if(day === 0){  
                day = 30;
              }else{
                day = day -1;
              }
              let ExpiryDate = p.BatteryExpiryDate.split("-");          
              if(((parseInt(ExpiryDate[0]) - year) > 0)){
                  return false;
              }else if(((parseInt(ExpiryDate[0]) - year) == 0)){
                if((parseInt(ExpiryDate[1]) - month) > 0){
                    return false;
                }else if((parseInt(ExpiryDate[1]) - month) == 0){
                    if(((parseInt(ExpiryDay) - day) > 0 )){
                      return false;
                    }else{
                      return true;
                    }
                }else{
                  return true;
                }
              }else{
                return true;
              }
              }else{
                return false;
              }
             
          });


        },
      getYellowVehicles(){
        let currentDate = new Date();
         let month = currentDate.getUTCMonth() + 1;
         let year = currentDate.getUTCFullYear();

          return this.allVeh.filter((p)=>{
              const index = this.getRedVehicles().findIndex(pe => pe.VehicleID == p.VehicleID);
                if(index != -1){
                  return false;
                }
             let PurchaseDate = p.PurchaseMonth.split("-");
              if(year - (parseInt(PurchaseDate[0])) < 3){
                    return false;
              }else if(year - parseInt(PurchaseDate[0]) == 3){
                if((parseInt(PurchaseDate[1])-month) > 0){
                  return false;
                }else{
                  return true;
                }
              }else{
                return true;
              }
          });


      },
     getRedVehicles(){
          let currentDate = new Date();
          let month = currentDate.getUTCMonth() + 1;
          let year = currentDate.getUTCFullYear();

         return this.allVeh.filter((p)=>{
            let ActivationDate = p.ActivationMonth.split("-");
            if((parseInt(year - ActivationDate[0])) < 5 ){
              return false;
            }else if(year -(parseInt(ActivationDate[0])) == 5){
                if(((parseInt(ActivationDate[1]))-month) > 0){  
                  return false;
                }else{
                  return true;
                }
            }else{
              return true;
            }
         });
        },

      globalFilter(arrColor){
            let currentArray = [];
            if(arrColor == 'red'){
              currentArray = this.getRedVehicles();
            }else if(arrColor == 'yellow'){
              currentArray = this.getYellowVehicles();
            }else if(arrColor == 'pink'){
              currentArray= this.getPinkVehicles();
            }else if(arrColor== 'blue'){
              currentArray=this.getBlueVehicles();
            }else if(arrColor== 'rest'){
              currentArray = this.getRestOfVehicles();
            }
          return currentArray.filter((p)=>{
              return p.Model.toLowerCase().includes(this.search.toLowerCase()) || p.LicensePlate.toLowerCase().includes(this.search.toLowerCase()) 
              || p.ActivationMonth.toLowerCase().includes(this.search.toLowerCase()) || p.VehicleID.toString().toLowerCase().includes(this.search.toLowerCase()) 
              || p.PurchaseMonth.toLowerCase().includes(this.search.toLowerCase()) || p.BatteryExpiryDate.toLowerCase().includes(this.search.toLowerCase())
              || p.Remarks.toLowerCase().includes(this.search.toLowerCase()) || p.IsElectronic.toLowerCase().includes(this.search.toLowerCase()) 
              || p.CompanyName.toLowerCase().includes(this.search.toLowerCase());
          });
        },
    removeVeh(){
    console.log("clicked");
    this.allVeh.pop();
    console.log("Size of all veh is : "+this.allVeh);
    }
   },
   created(){
       this.getAllrequiredData;
   }
}
</script>

<style scoped>

    .typeA{
      background-color: rgb(233, 49, 49)!important;
      color: #FFF!important;
      font-size: 13px!important;
       font-family: 'Roboto', sans-serif;
      font-weight: 500!important;
    }
    .typeB{
      background-color: #FFFF00!important;
      color: #FFF!important;
      font-size: 13px!important;
       font-family: 'Roboto', sans-serif;
      font-weight: 500!important;
    }
    .typeC{
      background-color: #FFC0CB!important;
      color: #FFF!important;
      font-size: 13px!important;
       font-family: 'Roboto', sans-serif;
      font-weight: 500!important;
    }
    .typeD{
      background-color: #0000FF!important;
      color: #FFF!important;
      font-size: 13px!important;
       font-family: 'Roboto', sans-serif;
      font-weight: 500!important;
    }
    .typeE{
      background-color: #0000FF!important;
      color: #FFF!important;
      font-size: 13px!important;
       font-family: 'Roboto', sans-serif;
      font-weight: 500!important;
    }

  
</style>
