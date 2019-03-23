<template>
<div class="form-group" style="margin-left:20px">


      <div class="row" style="margin-bottom:15px">
           <label for="chooseAction" class="Column">Please Choose Action : </label>

             <label>
            <input type="radio" style="margin-left:20px" name="TypeAction" class="Column" @click="updateStatus=!updateStatus" :disabled="updateStatus"> Update Type
        </label>
         <label>
            <input type="radio" style="margin-left:20px" name="TypeAction" class="Column" @click="updateStatus=!updateStatus" checked :disabled="!updateStatus"> Add Type
        </label>
      </div>

    <div class="row">
      <label class="Column" for="CompanyIDinput">Type ID : </label>
      <input type="number" style="margin-left:38px;width:180px" class="Column" placeholder="Enter Type ID" min="1" max="5000" v-model="VehicleType.VehicleTypeID" :disabled="updateStatus"  v-if="!updateStatus">
      <select class="Column" style="width:180px;margin-left:38px" v-model="SelectedTypeID" :disabled="(!updateStatus)" @click="UpdateFields"  v-if="updateStatus">
                <option v-for="l in getVehicleTypes" :key="l.VehicleTypeID">{{l.VehicleTypeID}}</option>
       </select>   
      <p style="color:red">  {{errorCheckboxID}}  </p>
       <p style="color:red">{{errorID}}</p>
  </div>

  <!-- <div class="form-group">
    <label for="CompanyIDinput">Type ID </label>
    <input type="number" class="form-control" placeholder="Enter Type ID" min="1" max="5000" v-model="VehicleType.VehicleTypeID" :disabled="updateStatus">
    <p style="color:red">{{errorID}}</p>
   </div>-->
 <div class="row" style="margin-bottom:15px">
   <label for="SelectedCompanyInput" class="Column">Company ID :</label>
   <select class="Column" style="margin-top:10px;margin-left:5px;width:180px" v-model="SelectedCompanyID">
                <option v-for="li in getVehicleCompanies" :key="li.VehicleCompanyID">{{li.VehicleCompanyID}}</option>
    </select>  
      <p v-if="getVehicleCompanyName !== ''" class="Column"> Company Name : {{getVehicleCompanyName}} </p>
    <p style="color:red"> {{errorSelectedCompany}} </p>
  
  </div>

  <div class="row">
    <label for="CompanyNameID" class="Column">Model : </label>
    <input type="text" class="Column" style="margin-left:45px;width:180px" placeholder="Model" v-model="VehicleType.Model">
    <p style="color:red">{{errorModel}}</p>
  </div>
  <div class="row" style="margin-top:15px;margin-bottom:15px">
    <label for="electric">Engine Type : </label>
      <label for="Electronic">
        <input type="radio" class="Column" style="margin-left:10px" name="radioElectric" @click="VehicleType.IsElectronic=1" :checked="VehicleType.IsElectronic == 1">
        Electric
      </label>
      <label for="Petrol">
        <input type="radio" class="Column" style="margin-left:10px" name="radioElectric" @click="VehicleType.IsElectronic=0" :checked="VehicleType.IsElectronic==0">
        Petrol
      </label>
     </div> 
  <button type="submit" @click="AddVehicleType" class="btn btn-primary" v-if="(!updateStatus)">Add Type</button>
  <button type="submit" @click="EditVehicleType" class="btn btn-primary" v-if="updateStatus">Update Type</button>
  <hr>
  <div class="alert alert-success" v-if="successAdd">
  <strong>Success!</strong> Vehicle type has been added!.
</div>
<div class="alert alert-success" v-if="successEdit">
  <strong>Success!</strong> Vehicle type has been updated!.
</div>
</div>
</template>
<script>
  export default {
    data(){
      return{
          //Status
          updateStatus:false,
          SelectedTypeID:-1,
          SelectedCompanyID:-1,
          errorID:'',
          errorModel:'',
          errorCheckboxID:'',
          errorSelectedCompany:'',
          successAdd:false,
          successEdit:false,
          //Vehicle Type Object
          VehicleType:{
              VehicleTypeID:0,
              CarCompanyID:0,
              Model:'',
              IsElectronic:0
         }
         
      }
    },
    computed:{
      getVehicleCompanies(){
        return this.$store.getters.GetVehicleCompanies;
      },
      getVehicleTypes(){
        return this.$store.getters.getVehicleTypes;
      },
      getVehicleCompanyName(){
        let str ='';
        this.getVehicleCompanies.forEach(element => {
            if(element.VehicleCompanyID == this.SelectedCompanyID){
            str += ''+element.CompanyName;
            }
        });
        return str;
      }
    },
    methods:{
      UpdateFields(){
          this.getVehicleTypes.forEach(element =>{
            if(element.VehicleTypeID == this.SelectedTypeID){
              this.VehicleType.VehicleTypeID = this.SelectedTypeID;
              this.SelectedCompanyID = element.CarCompanyID;
              this.VehicleType.Model = element.Model;
              this.VehicleType.IsElectronic = element.IsElectronic;
            }
          });
      },
      EditVehicleType(){

          let tempTypeEdit ={};
          if(this.SelectedTypeID === -1){
            this.errorCheckboxID = 'Please choose Vehicle Type ID';
          }else if(this.SelectedCompanyID === -1){
            this.errorSelectedCompany = 'Please choose Company ID';
          }else if(this.VehicleType.Model === ''){
                this.errorModel="Please fill the Model";
          }else{
            this.VehicleType.VehicleTypeID = parseInt(this.SelectedTypeID);
            this.VehicleType.CarCompanyID = parseInt(this.SelectedCompanyID);
            tempTypeEdit = Object.assign({},this.VehicleType);

             let uri = `https://fleetmanagment.herokuapp.com/updateVehicleType/${this.VehicleType.VehicleTypeID}`;
                this.axios.post(uri, {CarCompanyID : this.VehicleType.CarCompanyID,
                 Model :this.VehicleType.Model, IsElectronic : this.VehicleType.IsElectronic}).then((response) => {
                  console.log(`response from update company ! ${response.status}`);
                  if(response.status == 200){
                this.$store.dispatch('EditVehicleType',tempTypeEdit);
                this. SelectedTypeID=-1;
                this.errorID='';
                this.errorModel='';
                this.errorCheckboxID = '';
                this.errorSelectedCompany = '';
                this.successEdit=true;
                setTimeout(()=>{
                this.successEdit=false;
                },3000);
                  }else{
                    console.log('Error in updating Vehicle type Data !');
                }
                  });
                console.log('Successfully updated Vehicl type !');
                }

          
    

      },
      AddVehicleType(){
        let tempType={};
        //Connect to the Database first then add to local store
        
        //Need to add Validations !!!
      const index =  this.getVehicleTypes.findIndex(p => p.VehicleTypeID === parseInt(this.VehicleType.VehicleTypeID));
        if(index !== -1){
            this.errorID="This ID already been taken! , Please choose another one";
        }else if(this.VehicleType.Model === ''){
            this.errorModel="Please fill the Model";
        }else if(this.SelectedCompanyID === -1){
            this.errorSelectedCompany = 'Please choose Company ID';
        }else{
           this.VehicleType.VehicleTypeID = parseInt(this.VehicleType.VehicleTypeID);
           this.VehicleType.CarCompanyID = parseInt(this.SelectedCompanyID);
           tempType=Object.assign({},this.VehicleType);

             let uri = `https://fleetmanagment.herokuapp.com/addVehicleType`;
                this.axios.post(uri, {VehicleTypeID : this.VehicleType.VehicleTypeID,CarCompanyID : this.VehicleType.CarCompanyID,
                 Model :this.VehicleType.Model, IsElectronic : this.VehicleType.IsElectronic}).then((response)=>{
                    if(response.status == 200){
                       this.$store.dispatch('addVehicleType',tempType);
                       this.SelectedCompanyID=-1,
                       this.errorID='';
                       this.errorModel='';
                       this.errorSelectedCompany = '';
                       this.successAdd=true;
                      setTimeout(()=>{
                      this.successAdd=false;
                      },3000);
                    }else{
                      console.log('Error in adding new Type !');
                    }




                 });

        }
        }
      }

      }
    
    
  
</script>
