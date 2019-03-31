<template>
    <div class="form-group" style="margin-left:20px">

            <div class="row" style="margin-bottom:15px">
        <label for="chooseAction" class="Column">Please Choose Action : </label>

         <label>
            <input type="radio" style="margin-left:20px" name="VehicleAction" class="Column" @click="updateStatus=!updateStatus" :checked="!updateStatus" :disabled="!updateStatus"> Add Vehicle
        </label>

        </div>

    <div class="row">
  <label class="Column">Vehicle Type:</label>
   <select class="Column" style="margin-left:27px;width:180px"  v-model="SelectedTypeID" @change="UpdateIsElectric()">
                <option v-for="li in getVehicleTypes" :key="li.VehicleTypeID" :value="li.VehicleTypeID">{{li.Model}}</option>
    </select>
    <div class=row>
        <p class="Column"> Engine type : <span v-if="IsEle == 0">Petrol</span>  <span v-if="IsEle == 1">Electic</span></p>
    </div>  
   <p style="color:red"> {{errorSelectedType}} </p>
  </div>

     <div class="row">
    <label class="Column">License Plate :</label>
    <input type="text" class="Column" style="margin-left:40px;width:180px" placeholder="Format : 000-00-000" v-model="Vehicle.LicensePlate">
    <p style="color:red">{{errorLicensePlate}}</p>
   </div>

    <div class="row">
    <label  class="Column">Activation Month :</label>
    <input type="month" class="Column" style="width:180px;margin-left:16px" max="2019-03" min="2015-03" v-model="Vehicle.ActivationMonth">
    <p style="color:red" >{{errorActivationMonth}}</p>
    
   </div>

    <div class="row">
    <label class="Column">Purchase Month :</label>
    <input type="month" style="width:180px;margin-left:20px" class="Column" placeholder="Enter Purchase Month , format mm/yyyy" v-model="Vehicle.PurchaseMonth">
    <p style="color:red">{{errorPurchaseMonth}}</p>
   </div>

    <div class="row">
    <label for="BatteryExpiryDateInput" class="Column">Battery Expiry Date :</label>
    <input type="date" style="width:180px" class="Column" placeholder="Enter Battery Expiry Date , format mm/yyyy" v-model="Vehicle.BatteryExpiryDate" :disabled="!IsEle">
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
<table class="table table-hover">
    <thead  class="thead-dark"> 
  <tr>
    <th>Vehicle Type and company</th>
    <th>License Plate</th> 
    <th>Activation Month</th>
    <th>Purchase Month</th>
    <th>Battery Expiry Date</th>
    <th>Remarks</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="vehicle in getVehicles" :key="vehicle.VehicleID">
    <td>{{getVehicleCompanyNameAndModel(vehicle)}}</td>
    <td>{{vehicle.LicensePlate}}</td>
    <td>{{vehicle.ActivationMonth}}</td> 
    <td>{{vehicle.PurchaseMonth}}</td>
    <td>{{vehicle.BatteryExpiryDate}}</td>
    <td>{{vehicle.Remarks}}</td>
    <td><button @click="UpdateFields(vehicle)">Edit</button></td>
  </tr>
    </tbody>
</table>

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
                     BatteryExpiryDate:null,
                     Remarks:'',
                     displayedColor:'white'
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
             }

        },
        methods:{
            displayColorSelector(){
                let currentDate = new Date();
                let month = currentDate.getUTCMonth() + 1;
                let year = currentDate.getUTCFullYear();

                let ActivationDate = this.Vehicle.ActivationMonth.split("-");
                //check if it is displayed as RED
            // if((parseInt(year - ActivationDate[0])) > 5 ){
            //   return 'red';
            // }else if(year -(parseInt(ActivationDate[0])) == 5 && (((parseInt(ActivationDate[1]))-month) <= 0)){
            //       return 'red';
            // }else{
                //Check if it displayed as YELLOW
                 let PurchaseDate = this.Vehicle.PurchaseMonth.split("-");
                if(year - (parseInt(PurchaseDate[0])) > 3){
                    return 'yellow';
                }else if((year - parseInt(PurchaseDate[0]) == 3)&&((parseInt(PurchaseDate[1])-month) <= 0)){
                    return 'yellow'
                }else{
                    if(this.IsEle){
                         console.log("i'm inside here !!");
                        //Check if it is Displayed as PINK
                        let ExpiryDay = this.Vehicle.BatteryExpiryDate.charAt(8)+""+this.Vehicle.BatteryExpiryDate.charAt(9);
                        let ExpiryDate = this.Vehicle.BatteryExpiryDate.split("-");  
                         if(((parseInt(ExpiryDate[0]) - year) < 0)){
                             return 'pink';
                         }else if(((parseInt(ExpiryDate[0]) - year) == 0) && (parseInt(ExpiryDate[1]) - month) == 0 ){
                             if( ((parseInt(ExpiryDay) - parseInt(ExpiryDate[2])) < 0)){
                                
                                 return 'pink';
                             }else{
                                return 'blue';
                             }               
                         }else{
                            return 'white';
                         }

                    }else{
                        return 'white';
                    }
                }
          
         
            },
           getVehicleCompanyNameAndModel(vehicleObj){
                 let str ='';
                 this.getVehicleTypes.forEach(element => {
                     if(element.VehicleTypeID == vehicleObj.VehicleTypeID){
                         this.getVehicleCompanies.forEach(p =>{
                             if(element.CarCompanyID == p.VehicleCompanyID){
                                 str += ` ${p.CompanyName} ,${element.Model}`;
                                 return str;
                             }
                         });
                     }
                 });
                 return str;
             },
            dateValidation(){
                let currentDate = new Date();
                let month = currentDate.getUTCMonth() + 1;
                let year = currentDate.getUTCFullYear();

                let yearFromInput = this.Vehicle.ActivationMonth.split("-");

                if(year - parseInt(yearFromInput[0]) > 4){
                    return false;
                }else if((year - parseInt(yearFromInput[0])) == 4){ 
                     if(parseInt(yearFromInput[1])+1 - month >= 0){
                            return true;
                        }else{
                            return false;
                        }
                }else if((year - parseInt(yearFromInput[0])) == 0){
                        if(parseInt(yearFromInput[1])+1 - month <= 0){
                            return true;
                        }else{
                            return false;
                        }
                }else if((year - parseInt(yearFromInput[0])) < 0){
                    return false;
                }else{
                    return true;
                }
            },
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
            UpdateFields(vehicle){
                        if(!this.updateStatus){
                             this.updateStatus=!this.updateStatus;
                        }
                        this.Vehicle.VehicleID = vehicle.VehicleID;
                        this.SelectedTypeID = vehicle.VehicleTypeID;
                        this.Vehicle.LicensePlate = vehicle.LicensePlate;
                        this.Vehicle.ActivationMonth = vehicle.ActivationMonth;
                        this.Vehicle.PurchaseMonth = vehicle.PurchaseMonth;
                        if(vehicle.BatteryExpiryDate != null){
                                this.Vehicle.BatteryExpiryDate = vehicle.BatteryExpiryDate.substring(0,10);
                        }
                        this.Vehicle.BatteryExpiryDate = vehicle.BatteryExpiryDate;
                        this.Vehicle.Remarks=vehicle.Remarks;

                        this.UpdateIsElectric();
                   
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
               if(this.SelectedTypeID === -1){
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
                }*/else if(this.dateValidation() == false){
                    this.errorActivationMonth="The Activation Month should be between 2019/3 - 2015/3";
                }else{
                    if(this.IsEle == false){
                        this.Vehicle.BatteryExpiryDate =null;
                    }
                    this.Vehicle.VehicleID = parseInt(this.Vehicle.VehicleID);
                    this.Vehicle.VehicleTypeID = parseInt(this.SelectedTypeID);
                    this.Vehicle.displayedColor=this.displayColorSelector();

         
        
                    let uri = 'https://fleetmanagment.herokuapp.com/addVehicle';
                    
                    this.axios.post(uri, {
                            VehicleTypeID :  this.Vehicle.VehicleTypeID,
                            LicensePlate : this.Vehicle.LicensePlate,
                            ActivationMonth : this.Vehicle.ActivationMonth,
                            PurchaseMonth : this.Vehicle.PurchaseMonth,
                            BatteryExpiryDate : this.Vehicle.BatteryExpiryDate,
                            Remarks : this.Vehicle.Remarks,
                            displayedColor : this.Vehicle.displayedColor    
                    }).then((response)=>{
                         console.log(`response from add vehicle ! ${response.status}`);
                        if(response.status == 200){
                            console.log(`The color is : ${this.Vehicle.displayedColor}`);
                        this.$store.dispatch('addVehicle');
                        tempVehicle = Object.assign({},this.Vehicle);
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
                            if(element.IsElectronic){
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
                if(this.SelectedTypeID === -1){
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
                }else if(this.checkActivationYear() == false){
                    this.errorActivationMonth="Cannot edit car that was activated for more than 4 years !";
                }else{
                      this.Vehicle.VehicleTypeID = parseInt(this.SelectedTypeID);
                         this.Vehicle.displayedColor=this.displayColorSelector();

                        let uri = `https://fleetmanagment.herokuapp.com/updateVehicle/${this.Vehicle.VehicleID}`;
                        this.axios.post(uri,{
                            VehicleTypeID : this.Vehicle.VehicleTypeID,
                            LicensePlate : this.Vehicle.LicensePlate,
                            ActivationMonth : this.Vehicle.ActivationMonth,
                            PurchaseMonth : this.Vehicle.PurchaseMonth,
                            BatteryExpiryDate : this.Vehicle.BatteryExpiryDate,
                            Remarks: this.Vehicle.Remarks,
                            displayedColor : this.Vehicle.displayedColor
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