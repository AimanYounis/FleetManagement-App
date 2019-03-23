<template>
    <div class="form-group" style="margin-left:20px">  
        <div class="row" style="margin-bottom:15px">
        <label for="chooseAction" class="Column">Please Choose Action : </label>
         <label>
            <input type="radio" style="margin-left:20px" name="CompanyAction" class="Column" @click="validated=!validated" :disabled="validated"> Update Company
        </label>
         <label>
            <input type="radio" style="margin-left:20px" name="CompanyAction" class="Column" @click="validated=!validated" checked :disabled="!validated"> Add Company
        </label>

        </div>
    <div class="row" style="margin-bottom:15px">
    <label for="CompanyIDinput" class="Column">Company ID :</label>
    <input type="number" style="margin-left:30px;width:180px" class="Column" placeholder="Enter Company ID" min="0" v-model="StringID" :disabled="validated" v-if="!validated">
    <select style="width:180px;margin-left:30px" class="form-group Column" v-model="SelectedID" :disabled="!validated" @click="UpdateFields" v-if="validated">
                <option v-for="l in getCompaniesFromStore" :key="l.VehicleCompanyID">{{l.VehicleCompanyID}}</option>
            </select>   
      <p style="color:red">{{error}}</p>
   </div>
 <div class="row" style="margin-bottom:15px">
    <label for="CompanyNameID" class="Column">Company Name :</label>
    <input type="text" style="margin-left:5px;width:180px" class="Column" placeholder="Company Name" v-model="Company.CompanyName">
    <p style="color:red">{{errorCompanyName}}</p>
  </div>
  <button type="submit" @click="AddCompany" class="btn btn-primary" v-if="(!validated)">Add Company</button>
  <button type="submit" @click="EditCompany" class="btn btn-primary" v-if="validated">Update Company</button>
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
import { mapMutations } from 'vuex';
import { mapActions} from 'vuex';
export default{
    data(){
        return{
            successAdd:false,
          successEdit:false,
            validated:false,
            SelectedID:-1,
            ListOfId:[],
            AllCompanies:[],
            StringID :'',
            Company:{
                VehicleCompanyID:0,
                CompanyName:''
            },
            error:'',
            errorCompanyName:''
        }
    },
    computed:{
        getCompanies(){
            this.$store.getters.GetVehicleCompanies.forEach(element => {
                const  index = this.AllCompanies.findIndex( p => p.VehicleCompanyID === element.VehicleCompanyID);
                    if(index === -1){
                         this.AllCompanies.push(element);
                    }
            });
            this.UpdateListOfIndexes();
           //  alert(`the length of list of id : ${this.ListOfId.length}`);
          //   alert(`the size is : ${this.AllCompanies.length}`);

        },
        getCompaniesFromStore(){
            return this.$store.getters.GetVehicleCompanies;
        }
    },
    methods:{
        ...mapActions([
            'increment',
            'decrement'
        ]),
        increment(by){
            this.$store.dispatch('increment',by);
        },
        holy(){
            this.increment(10);
        },
        EditCompany(){
            let tempV = {};
            let companyN ='';
            if(this.SelectedID === -1){
                this.error=' Please Choose ID for the company !';
            }else{
                this.AllCompanies.forEach(p=>{
                    if(p.VehicleCompanyID == this.SelectedID){
                        companyN = p.CompanyName;
                    }
                });
                if(companyN == this.Company.CompanyName){
                   
                    this.errorCompanyName = 'it is the same company name !' ;
                }else{
                    this.Company.VehicleCompanyID = parseInt(this.SelectedID);
                     tempV = Object.assign({},this.Company);

                    let uri = `https://fleetmanagment.herokuapp.com/updateCompany/${this.Company.VehicleCompanyID}`;
                this.axios.post(uri, {CompanyName : this.Company.CompanyName }).then((response) => {
                  console.log(`response from update company ! ${response.status}`);
                  if(response.status == 200){
                 this.$store.dispatch('EditVehicleCompany',tempV);
                this.StringID='';
                this.Company.VehicleCompanyID =0;
                 this.Company.CompanyName='';
                 this.successEdit=true;
                setTimeout(()=>{
                this.successEdit=false;
                },3000);
                console.log('Successfully updated company !');
                }else{
                    console.log('Error in updating company Data !');
                }

                });

                }
            

            }
        },
        UpdateFields(){
            //Update Data for display when id is choosen 
            this.AllCompanies.forEach(p=> { 
                if(p.VehicleCompanyID == this.SelectedID){
                    this.Company.CompanyName = p.CompanyName;
                }
            });
            this.StringID = ''+this.SelectedID;
            //update for sending the data
        },
        AddCompany(){
            //Need to ADD connection to the database !!
            let tempcompany ={};
            let statusOfQuery='';
            const index = this.AllCompanies.findIndex(p => p.VehicleCompanyID === parseInt(this.StringID));
            if(index === -1 && this.Company.CompanyName !== ''){
                this.Company.VehicleCompanyID = parseInt(this.StringID);
                tempcompany = Object.assign({},this.Company);
                //add to MySql database
                let uri = 'https://fleetmanagment.herokuapp.com/addCompany';
                this.axios.post(uri, { VehicleCompanyID : this.Company.VehicleCompanyID ,
                CompanyName : this.Company.CompanyName }).then((response) => {
                    console.log(`response from add company ! ${response.status}`);
                     if(response.status == 200){
                    this.$store.dispatch('addVehicleCompany',tempcompany);
                this.StringID='';
                this.Company.VehicleCompanyID =0;
                 this.Company.CompanyName='';
                  this.error="";
                  this.errorCompanyName = "";
                  this.UpdateListOfIndexes();
                   this.successAdd=true;
                      setTimeout(()=>{
                      this.successAdd=false;
                      },3000);
                }else{
                    console.log('Error in Adding new Company !');
                }

                });
               
            }else{
                if(index != -1){
                     this.error="ID already exists!";
                }
                if(this.Company.CompanyName == ''){
                    this.errorCompanyName = "Please fill the Company name field!"
                }
            }
        },
        UpdateListOfIndexes(){
                 this.AllCompanies.forEach(element =>{
                const index = this.ListOfId.findIndex(p => p === element.VehicleCompanyID);
                if(index === -1){
                    this.ListOfId.push(element.VehicleCompanyID);
                }
            });
           
        }

    },
    created(){
        this.getCompanies;
    }
}
</script>

        /*...mapMutations([
                'increment',
                'decrement'
        ])*/
     /*   increment(){
            //one way to do it
            this.$store.commit('increment');
              <button class="btn btn-primary" @click="holy"> Increment </button>
        <button class="btn btn-primary" @click="decrement"> Decrement </button>
        <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
        },
        decrement(){
            this.$store.commit('decrement');
        }*/