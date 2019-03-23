<template>
    <div class="form-group" style="margin-left:20px">

            <div class="row" style="margin-bottom:15px">
        <label for="chooseAction" class="Column">Please Choose Action : </label>
         <label>
            <input type="radio" style="margin-left:20px" name="VehicleAction" class="Column" @click="updateStatus=!updateStatus" :disabled="updateStatus"> Update Vehicle
        </label>
         <label>
            <input type="radio" style="margin-left:20px" name="VehicleAction" class="Column" @click="updateStatus=!updateStatus" checked :disabled="!updateStatus"> Add Vehicle
        </label>

        </div>
    <!--
        <label>
            <input type="checkbox" @click="updateStatus=(!updateStatus)"> Update Vehicle
          </label>
     <div class="form-group">
    <label for="VehicleIDinput">Vehicle ID </label>
    <input type="number" class="form-control" placeholder="Enter Vehicle ID" min="1" max="5000" v-model="Vehicle.VehicleID" :disabled="updateStatus">
    
   </div>
    -->

     <div class="row">
        
      <label for="VehicleIDinput" class="Column">Vehicle ID :</label>
      <select style="width:180px;margin-left:63px" class="Column" v-model="SelectedVehicleID" :disabled="(!updateStatus)" @click="UpdateFields" v-if="updateStatus">
                <option v-for="l in getVehicles" :key="l.VehicleID">{{l.VehicleID}}</option>
       </select>    
        <input type="number" class="row" style="margin-left:63px;width:180px" placeholder="Enter Vehicle ID" min="1" max="5000" v-model="Vehicle.VehicleID" :disabled="updateStatus" v-if="!updateStatus">
    

      <p style="color:red">  {{errorCheckboxID}}  </p>
       <p style="color:red">{{errorID}}</p>
  </div>
  

   

    <div class="row">
  <label for="VehicleTypeIdInput" class="Column">Vehicle Type ID :</label>
   <select class="Column" style="margin-left:27px;width:180px" v-model="SelectedTypeID" @click="UpdateIsElectric">
                <option v-for="li in getVehicleTypes" :key="li.VehicleTypeID">{{li.VehicleTypeID}}</option>
    </select>  
    <p v-if="getVehicleCompanyNameAndModel !== ''">{{getVehicleCompanyNameAndModel}} </p>
   <p style="color:red"> {{errorSelectedType}} </p>
  </div>

     <div class="row">
    <label for="LicensePlateInput" class="Column">License Plate :</label>
    <input type="text" class="Column" style="margin-left:40px;width:180px" placeholder="Enter License Plate" v-model="Vehicle.LicensePlate">
    <p style="color:red">{{errorLicensePlate}}</p>
   </div>

    <div class="row">
    <label for="ActivationMonthInput" class="Column">Activation Month :</label>
    <input type="month" class="Column" style="width:180px;margin-left:16px" max="2019-03" min="2015-03" v-model="Vehicle.ActivationMonth">
    <label style="margin-left:10px" class="Column">e.g, April 2018</label>
    <p style="color:red" >{{errorActivationMonth}}</p>
    
   </div>

    <div class="row">
    <label for="PurchaseMonthInput" class="Column">Purchase Month :</label>
    <input type="month" style="width:180px;margin-left:20px" class="Column" placeholder="Enter Purchase Month , format mm/yyyy" v-model="Vehicle.PurchaseMonth">
    <p style="color:red">{{errorPurchaseMonth}}</p>
   </div>

    <div class="row">
    <label for="BatteryExpiryDateInput" class="Column">Battery Expiry Date :</label>
    <input type="date" style="width:180px" class="Column" placeholder="Enter Battery Expiry Date , format mm/yyyy" v-model="Vehicle.BatteryExpiryDate" :disabled="IsEle">
    <p style="color:red">{{errorBatteryExpiryDate}}</p>
   </div>

    <div class="row">
    <label for="RemarksInput" class="Column">Remarks :</label>
    <input type="text" style="width:50%;margin-left:69px" class="Column" placeholder="Enter Remarks" v-model="Vehicle.Remarks" >
    <p style="color:red">{{errorRemarks}}</p>
   </div>

<button type="submit" @click="addVehicle" class="btn btn-primary" v-if="(!updateStatus)">Add Vehicle</button>
  <button type="submit"  @click="editVehicle" class="btn btn-primary" v-if="updateStatus">Update Vehicle</button>
  <div class="alert alert-success" v-if="successAdd">
  <strong>Success!</strong> Vehicle has been added!.
</div>
<div class="alert alert-success" v-if="successEdit">
  <strong>Success!</strong> Vehicle has been updated!.
</div>
<hr>
    </div>
</template>

<script>
export default {
        data(){
            return{
                IsEle:false,
                updateStatus:false,
                SelectedVehicleID:-1,
                SelectedTypeID:-1,
                successAdd:false,
                successEdit:false,

                //Show errors!
                errorID:'',
                errorCheckboxID:'',
                errorSelectedType:'',
                errorLicensePlate:'',
                errorActivationMonth:'',
                errorPurchaseMonth:'',
                errorRemarks:'',
                errorBatteryExpiryDate:'',

                // Vehile Object to create
                Vehicle:{
                     VehicleID:0,
                     VehicleTypeID:0,
                     LicensePlate:'',
                     ActivationMonth:'',
                     PurchaseMonth:'',
                     BatteryExpiryDate:'',
                     Remarks:''
                },
               



                // Array of all Vehicles
          
            }
        },
        computed:{
            getVehicleCompanies(){
                 return this.$store.getters.GetVehicleCompanies;
             },
            getVehicleTypes(){
                 return this.$store.getters.getVehicleTypes;
             },
             getVehicles(){
                 return this.$store.getters.getVehicles;
             },
             getVehicleCompanyNameAndModel(){
                 let str ='';
                 this.getVehicleTypes.forEach(element => {
                     if(element.VehicleTypeID == this.SelectedTypeID){
                         this.getVehicleCompanies.forEach(p =>{
                             if(element.CarCompanyID == p.VehicleCompanyID){
                                 str += `Model : ${element.Model}, Company : ${p.CompanyName}`
                                 return str;
                             }
                         });
                     }
                 });
                 return str;
             }



        },
        methods:{
            checkActivationYear(){
                let currentDate = new Date();
                let month = currentDate.getUTCMonth() + 1;
                let year = currentDate.getUTCFullYear();
                let ActivationDateSplited = this.Vehicle.ActivationMonth.split("-");
                if((year - parseInt(ActivationDateSplited[0])) > 4){
                    return false;
                }else if((year - parseInt(ActivationDateSplited[0])) == 4){
                        if((parseInt(ActivationDateSplited[1] - month) >= 0)){
                            return true;
                        }else{
                            return false;
                        }
                }else{
                    return true;
                }
            

            },
            CheckIfActivationAfterPurchase(){
                let PurchaseDates = this.Vehicle.PurchaseMonth.split("-");
                let ActivationDates = this.Vehicle.ActivationMonth.split("-");
                if(parseInt(PurchaseDates[0]) > parseInt(ActivationDates[0])){
                    return false;
                }else if(parseInt(PurchaseDates[0]) === parseInt(ActivationDates[0]) ){
                    if(parseInt(ActivationDates[1]) <  parseInt(PurchaseDates[1])){
                      
                        return false;
                    }else{
                         
                        return true;
                    }
                }
                return true;
            },
            CheckRegex(str){
                let FormatForLicensePlate = new RegExp('^[0-9]{3,3}-[0-9]{2,2}-[0-9]{3,3}$');
                return FormatForLicensePlate.test(str);
            },
            UpdateFields(){
                if(this.SelectedVehicleID != -1){
             this.getVehicles.forEach(p=>{
                    if(this.SelectedVehicleID == p.VehicleID){
                        this.Vehicle.VehicleID = this.SelectedVehicleID;
                        this.SelectedTypeID = p.VehicleTypeID;
                        this.Vehicle.LicensePlate = p.LicensePlate;
                        this.Vehicle.ActivationMonth = p.ActivationMonth;
                        this.Vehicle.PurchaseMonth = p.PurchaseMonth;
                        this.Vehicle.BatteryExpiryDate = p.BatteryExpiryDate;
                        this.Vehicle.Remarks=p.Remarks;
                    }
                });
                }
               
            },
            errorSetup(){
                    this.errorID="";
                    this.errorCheckboxID="";
                    this.errorSelectedType ="";
                    this.errorLicensePlate ="";
                    this.errorActivationMonth = "";
                    this.errorBatteryExpiryDate ="";
                    this.errorPurchaseMonth="";
            },
            addVehicle(){

                let tempVehicle={};
                //Connect tot the database first then add to local store !
                this.errorSetup();
                //Need to add more validations !! + REGEX must be added !!
                let index = this.getVehicles.findIndex(p => p.VehicleID == parseInt(this.Vehicle.VehicleID));
                console.log(`the index is : ${index}`);
                console.log(`the status is : ${index != -1}`);
                if(index != -1){
                    this.errorID="This ID already been taken! , Please choose another one";
                }else if(this.SelectedTypeID === -1){
                    this.errorSelectedType = "Please choose type ID !";
                }else if(!this.CheckRegex(this.Vehicle.LicensePlate)){
                     this.errorLicensePlate = "The format should be 000-00-000";
                }else if(this.Vehicle.LicensePlate === ''){
                    this.errorLicensePlate = "Please fill the license plate field";
                }else if(this.Vehicle.ActivationMonth === ''){
                    this.errorActivationMonth = "Please fill the Activation Month field";
                }else if(this.IsEle == true && this.BatteryExpiryDate === ''){
                    this.errorBatteryExpiryDate ="Please fill the battery expiry date field";
                }else if(this.PurchaseMonth === ''){
                    this.errorPurchaseMonth="Please fill the Purchase month field";
                }/*else if(this.CheckIfActivationAfterPurchase() == false){
                    this.errorActivationMonth="Cannot activate before purchase !!";
                }*/else if(this.checkActivationYear() == false){
                    this.errorActivationMonth="Cannot Add car that was activated for more than 4 years !";
                }else{
                    this.Vehicle.VehicleID = parseInt(this.Vehicle.VehicleID);
                    this.Vehicle.VehicleTypeID = parseInt(this.SelectedTypeID);
                    tempVehicle = Object.assign({},this.Vehicle);

                    let uri = 'https://fleetmanagment.herokuapp.com/addVehicle';
                    this.axios.post(uri, {
                            VehicleID :   this.Vehicle.VehicleID,
                            VehicleTypeID :  this.Vehicle.VehicleTypeID,
                            LicensePlate : this.Vehicle.LicensePlate,
                            ActivationMonth : this.Vehicle.ActivationMonth,
                            PurchaseMonth : this.Vehicle.PurchaseMonth,
                            BatteryExpiryDate : this.Vehicle.BatteryExpiryDate,
                            Remarks : this.Vehicle.Remarks
                    }).then((response)=>{
                         console.log(`response from add vehicle ! ${response.status}`);
                        if(response.status == 200){
                        this.$store.dispatch('addVehicle',tempVehicle);
                         this.SelectedTypeID = -1;
                            this.errorSetup();

                    this.successAdd=true;
                      setTimeout(()=>{
                      this.successAdd=false;
                     },3000);
                        }else{
                            console.log(`Error in adding new Vehicle !`);
                        }


                    });

                }
            },
            UpdateIsElectric(){
                if(this.SelectedTypeID !== -1){
                    this.getVehicleTypes.forEach(element=>{
                        if(element.VehicleTypeID == this.SelectedTypeID){
                            if(!element.IsElectronic){
                                this.IsEle=true;
                                 this.Vehicle.BatteryExpiryDate='';
                            }else{
                                  this.IsEle=false;
                                 
                            }
                        }
                    })
                }
            },
            editVehicle(){
                let tempVehicleEdit ={};
                this.errorSetup();
                if(this.SelectedVehicleID === -1){
                    this.errorCheckboxID="Please choose Vehicle ID !";
                }else if(this.SelectedTypeID === -1){
                    this.errorSelectedType = "Please choose type ID !";
                }else if(!this.CheckRegex(this.Vehicle.LicensePlate)){
                     this.errorLicensePlate = "The format should be 000-00-000";
                }else if(this.Vehicle.LicensePlate === ''){
                    this.errorLicensePlate = "Please fill the license plate field";
                }else if(this.Vehicle.ActivationMonth === ''){
                    this.errorActivationMonth = "Please fill the Activation Month field";
                }else if(this.IsEle == true && this.BatteryExpiryDate === ''){
                    this.errorBatteryExpiryDate ="Please fill the battery expiry date field";
                }else if(this.PurchaseMonth === ''){
                    this.errorPurchaseMonth="Please fill the Purchase month field";
                }/*else if(this.CheckIfActivationAfterPurchase() == false){
                    this.errorActivationMonth="Cannot activate before purchase !!";
                }*/else if(this.checkActivationYear() == false){
                    this.errorActivationMonth="Cannot edit car that was activated for more than 4 years !";
                }else{
                      this.Vehicle.VehicleID = parseInt(this.SelectedVehicleID);
                      this.Vehicle.VehicleTypeID = parseInt(this.SelectedTypeID);
                        tempVehicleEdit = Object.assign({},this.Vehicle);

                        let uri = `https://fleetmanagment.herokuapp.com/updateVehicle/${this.Vehicle.VehicleID}`;
                        this.axios.post(uri,{
                            VehicleTypeID : this.Vehicle.VehicleTypeID,
                            LicensePlate : this.Vehicle.LicensePlate,
                            ActivationMonth : this.Vehicle.ActivationMonth,
                            PurchaseMonth : this.Vehicle.PurchaseMonth,
                            BatteryExpiryDate : this.Vehicle.BatteryExpiryDate,
                            Remarks: this.Vehicle.Remarks
                        }).then((response)=>{
                                  console.log(`response from update vehicle ! ${response.status}`);
                                  if(response.status == 200){
                                      this.$store.dispatch('editVehicle',tempVehicleEdit);
                        this.SelectedVehicleID = -1;
                        this.SelectedTypeID = -1;
                        this.errorSetup();
                        this.successEdit=true;
                        setTimeout(()=>{
                        this.successEdit=false;
                          },3000);


                                  }else{
                                      console.log('Error in editing Vehicle');
                                  }
                        });



                      
                }
            },


        }
}
</script>


=