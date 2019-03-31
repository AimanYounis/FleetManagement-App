import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        VehicleCompanies : [],
        VehicleTypes : [],
        Vehicles : [],
        allData:[],
        tempVehicleInfo : {}
    },
    getters: {
        GetVehicleCompanies:state=>{
            return state.VehicleCompanies;
        },
        getVehicleTypes:state=>{
            return state.VehicleTypes;
        },
        getVehicles:state=>{
            return state.Vehicles;
        },
        getData:state=>{
            state.Vehicles.forEach( element =>{
                const index = state.allData.findIndex((p) => p.VehicleID == element.VehicleID);
                if(index == -1){
                    state.tempVehicleInfo.VehicleID = element.VehicleID;
                    state.tempVehicleInfo.PurchaseMonth = element.PurchaseMonth;
                    state.tempVehicleInfo.LicensePlate = element.LicensePlate;
                    state.tempVehicleInfo.ActivationMonth = element.ActivationMonth;
                    if(element.BatteryExpiryDate == null){
                        state.tempVehicleInfo.BatteryExpiryDate = '------';
                    }else{
                      let batteryDate = element.BatteryExpiryDate.substring(0,10);
                        state.tempVehicleInfo.BatteryExpiryDate = batteryDate;
                    }
                    state.tempVehicleInfo.Remarks = element.Remarks;
                    state.tempVehicleInfo.displayedColor = element.displayedColor;
                    state.VehicleTypes.forEach(TypeElement =>{
                        if(element.VehicleTypeID == TypeElement.VehicleTypeID){
                        state.tempVehicleInfo.Model = TypeElement.Model;
                        if(TypeElement.IsElectronic == 0){
                            state.tempVehicleInfo.IsElectronic = 'Petrol';
                             state.tempVehicleInfo.BatteryExpiryDate = '------';
                          }else{
                              state.tempVehicleInfo.IsElectronic = 'Electric';
                          }
                          state.VehicleCompanies.forEach((companyElement) => {
                            if(companyElement.VehicleCompanyID == TypeElement.CarCompanyID){
                              state.tempVehicleInfo.CompanyName = companyElement.CompanyName;
                              state.allData.push(Object.assign({},state.tempVehicleInfo));
                            }
                          });
                        }
                        });    
                }
                
            });
            return state.allData;
        }
    },
    mutations:{
        addVehicleCompany:(state)=>{
            let uri = 'https://fleetmanagment.herokuapp.com/getCompanies';
            axios.get(uri).then(response => {
                response.data.forEach(e =>{
                 const index = state.VehicleCompanies.findIndex(p => p.VehicleCompanyID === e.VehicleCompanyID);
                 if(index == -1){
                     state.VehicleCompanies.push(e);
                 }
                });
            });
        },
        editVehicleCompany:(state,VehicleCompanyObject)=>{
            const index = state.VehicleCompanies.findIndex(p => p.VehicleCompanyID === VehicleCompanyObject.VehicleCompanyID);
            if(index === -1){
                console.log(`type of the sent object id is : ${typeof(VehicleCompanyObject.VehicleCompanyID)}`);
                console.log('Error at edit vehicle company - should find the object and replace it');
            }else{
                state.VehicleCompanies[index]=VehicleCompanyObject;
            }
        },
        addVehicleType:(state,VehcileTypeObject)=>{
            let uri = 'https://fleetmanagment.herokuapp.com/getVehicleTypes';
            axios.get(uri).then(response => {
                response.data.forEach(e =>{
                 const index = state.VehicleTypes.findIndex(p => p.VehicleTypeID === e.VehicleTypeID);
                 if(index == -1){
                     state.VehicleTypes.push(e);
                 }
                });
            });
        },
        editVehicleType:(state,VehicleTypeObject)=>{
            const index = state.VehicleTypes.findIndex(p => p.VehicleTypeID === VehicleTypeObject.VehicleTypeID);
            if(index === -1){
                console.log('Error at edit vehicle type - should find the object and replace it');
            }else{
                state.VehicleTypes[index] = VehicleTypeObject;
            }
        },
        addVehicle:(state)=>{
           let uri = 'https://fleetmanagment.herokuapp.com/getVehicles';
           axios.get(uri).then(response => {
               response.data.forEach(e =>{
                const index = state.Vehicles.findIndex(p => p.VehicleID === e.VehicleID);
                if(index == -1){
                    state.Vehicles.push(e);
                }
               });
           });
        },
        editVehicle:(state,VehicleObject)=>{
            const index = state.Vehicles.findIndex(p => p.VehicleID === VehicleObject.VehicleID);
            if(index === -1){
                console.log('Error at edit vehicle - should find the object and replace it');
            }else{
                state.Vehicles[index] = VehicleObject;
            }
        },

    },
    actions:{
        addVehicleCompany:(context)=>{
            context.commit('addVehicleCompany');
        },
        EditVehicleCompany:(context,VehicleCompanyObject) =>{
            context.commit('editVehicleCompany',VehicleCompanyObject);
        },
        addVehicleType:(context,VehicleTypeObject)=>{
            context.commit('addVehicleType',VehicleTypeObject);
        },
        EditVehicleType:(context,VehicleTypeObject)=>{
            context.commit('editVehicleType',VehicleTypeObject);
        },
        addVehicle:(context)=>{
            context.commit('addVehicle');
        },
        editVehicle:(context,VehicleObject)=>{
            context.commit('editVehicle',VehicleObject);
        },

        
    }







});