import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        VehicleCompanies : [],
        VehicleTypes : [],
        Vehicles : []
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
    },
    mutations:{
        addVehicleCompany:(state,VehicleCompanyObject)=>{
            state.VehicleCompanies.push(VehicleCompanyObject);
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
            state.VehicleTypes.push(VehcileTypeObject);
        },
        editVehicleType:(state,VehicleTypeObject)=>{
            const index = state.VehicleTypes.findIndex(p => p.VehicleTypeID === VehicleTypeObject.VehicleTypeID);
            if(index === -1){
                console.log('Error at edit vehicle type - should find the object and replace it');
            }else{
                state.VehicleTypes[index] = VehicleTypeObject;
            }
        },
        addVehicle:(state,VehicleObject)=>{
            state.Vehicles.push(VehicleObject);
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
        addVehicleCompany:(context,VehicleCompanyObject)=>{
            context.commit('addVehicleCompany',VehicleCompanyObject);
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
        addVehicle:(context,VehicleObject)=>{
            context.commit('addVehicle',VehicleObject);
        },
        editVehicle:(context,VehicleObject)=>{
            context.commit('editVehicle',VehicleObject);
        },

        
    }







});