<template>
    <div class="form-group" style="margin-left:20px">  
        <div class="row" style="margin-bottom:15px">
        <label for="chooseAction" class="Column">Please Choose Action : </label>
       <!--  <label>
            <input type="radio" style="margin-left:20px" name="CompanyAction" class="Column" @click="validated=!validated" :disabled="validated"> Update Company
        </label>-->
         <label>
            <input type="radio" style="margin-left:20px" name="CompanyAction" class="Column" @click="validated=!validated"  :checked="!validated" :disabled="!validated"> Add Company
        </label>

        </div>
        <!--
    <div class="row" style="margin-bottom:15px">
    <label for="CompanyIDinput" class="Column">Company ID :</label>
    <input type="number" style="margin-left:30px;width:180px" class="Column" placeholder="Enter Company ID" min="0" v-model="StringID" :disabled="validated" v-if="!validated">
    <select style="width:180px;margin-left:30px" class="form-group Column" v-model="SelectedID" :disabled="!validated" @click="UpdateFields" v-if="validated">
                <option v-for="l in getCompaniesFromStore" :key="l.VehicleCompanyID">{{l.VehicleCompanyID}}</option>
            </select>   
      <p style="color:red">{{error}}</p>
   </div>-->
 <div class="row" style="margin-bottom:15px">
    <label for="CompanyNameID" class="Column">Company Name :</label>
    <input type="text" style="margin-left:5px;width:180px" class="Column" placeholder="Company Name" v-model="Company.CompanyName">
    <p style="color:red">{{errorCompanyName}}</p>
  </div>
  <button type="submit" @click="AddCompany()" class="btn btn-primary" v-if="(!validated)">Add Company</button>
  <button type="submit" @click="EditCompany()" class="btn btn-primary" v-if="validated">Update Company</button>
  <hr>
      <div class="alert alert-success" v-if="successAdd">
  <strong>Success!</strong> Vehicle type has been added!.
</div>
<div class="alert alert-success" v-if="successEdit">
  <strong>Success!</strong> Vehicle type has been updated!.
</div>
<hr>
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th>Company Name</th>
            </tr>
        </thead>    
        <tbody>
            <tr v-for="company in getCompaniesFromStore" :key="company.VehicleCompanyID">
                <td>{{company.CompanyName}}</td>
                <td><button @click="UpdateFields(company)">Edit</button></td>
            </tr>
        </tbody>
    </table>



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
        getCompaniesFromStore(){
            return this.$store.getters.GetVehicleCompanies;
        }
    },
    methods:{
        resetError(){
             this.error="";
        this.errorCompanyName = "";
        },
        EditCompany(){
            this.resetError();
            let tempV = {};
              tempV = Object.assign({},this.Company);
                    let uri = `https://fleetmanagment.herokuapp.com/updateCompany/${this.Company.VehicleCompanyID}`;
                this.axios.post(uri, {CompanyName : this.Company.CompanyName }).then((response) => {
                  console.log(`response from update company ! ${response.status}`);
                  if(response.status == 200){
                 this.$store.dispatch('EditVehicleCompany',tempV);
                this.StringID='';
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

                
            

        },
        UpdateFields(company){
            //UpdateData for display when id is choosen 
            if(!this.validated){
                this.validated=!this.validated;
            }
            this.Company.VehicleCompanyID = company.VehicleCompanyID;
            this.Company.CompanyName = company.CompanyName;
            //update for sending the data
        },
        AddCompany(){
            //Need to ADD connection to the database !!
            let tempcompany ={};
            let statusOfQuery='';
            this.resetError();
            if(this.Company.CompanyName != ''){
                //add to MySql database
                let uri = 'https://fleetmanagment.herokuapp.com/addCompany';
                this.axios.post(uri, {CompanyName : this.Company.CompanyName }).then((response) => {
                    console.log(`response from add company ! ${response.status}`);
                     if(response.status == 200){
                          tempcompany = Object.assign({},this.Company);
                    this.$store.dispatch('addVehicleCompany');
                 this.Company.CompanyName='';
                  this.error="";
                  this.errorCompanyName = "";
                   this.successAdd=true;
                      setTimeout(()=>{
                      this.successAdd=false;
                      },3000);
                }else{
                    console.log('Error in Adding new Company !');
                }

                });
               
            }else{
                    this.errorCompanyName = "Please fill the Company name field!"
            }
        },
    
},
created(){
    }
}
</script>

   