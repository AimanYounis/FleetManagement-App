import Home from './components/Home.vue'
import Vehicles from './components/Vehicle/Vehicles.vue'
import VehicleTypes from './components/Vehicle/VehicleTypes.vue'
import VehicleCompanies from './components/Vehicle/VehicleCompanies.vue'
import EditVehicle from './components/Vehicle/EditVehicle.vue'

export const routes =[
    
    {path : '/' , component : Home},
    {path : '/vehicles' , component : Vehicles},
    {path : '/vehicletypes', component : VehicleTypes},
    {path : '/vehiclecompanies' , component :VehicleCompanies },
    {path : '/editVehicle' , component: EditVehicle}


];