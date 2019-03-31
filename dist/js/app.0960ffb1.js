(function(e){function t(t){for(var a,n,c=t[0],r=t[1],l=t[2],p=0,d=[];p<c.length;p++)n=c[p],s[n]&&d.push(s[n][0]),s[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],a=!0,c=1;c<i.length;c++){var r=i[c];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=i[0]))}return e}var a={},s={app:0},o=[];function n(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=a,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var h=r;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),s=i("8c4f"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("app-header"),i("router-view")],1)},n=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar navbar-default"},[i("div",{staticClass:"container-fluid"},[e._m(0),i("ul",{staticClass:"nav navbar-nav"},[i("router-link",{attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[i("a",[e._v("Home")])]),i("router-link",{attrs:{to:"/vehicles",tag:"li","active-class":"active"}},[i("a",[e._v("Vehicles")])]),i("router-link",{attrs:{to:"/vehiclecompanies",tag:"li","active-class":"active"}},[i("a",[e._v("Vehicle Companies")])]),i("router-link",{attrs:{to:"/vehicletypes",tag:"li","active-class":"active"}},[i("a",[e._v("Vehicle Types")])])],1)])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"navbar-header"},[i("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Fleet Managment")])])}],l=i("2877"),h={},p=Object(l["a"])(h,c,r,!1,null,null,null),d=p.exports,u={name:"app",components:{appHeader:d},methods:{getCompanies:function(){var e=this,t="https://fleetmanagment.herokuapp.com/getCompanies";this.axios.get(t).then(function(t){t.data.forEach(function(t){e.$store.dispatch("addVehicleCompany",t)})})},getVehiclesTypes:function(){var e=this,t="https://fleetmanagment.herokuapp.com/getVehicleTypes";this.axios.get(t).then(function(t){t.data.forEach(function(t){e.$store.dispatch("addVehicleType",t)})})},getVehicles:function(){var e=this,t="https://fleetmanagment.herokuapp.com/getVehicles";this.axios.get(t).then(function(t){t.data.forEach(function(t){e.$store.dispatch("addVehicle",t)})})}},created:function(){this.getCompanies(),this.getVehiclesTypes(),this.getVehicles()}},m=u,y=Object(l["a"])(m,o,n,!1,null,null,null),f=y.exports,v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Fleet Management Application")]),i("hr"),i("p",[e._v("Fleet Management application is small application for manging vehicles,vehicles types and vehicle companies.")]),i("p",[e._v("This website was developed using Node.js,Express,MySQL and Vue.js")]),i("center",[i("div",{staticStyle:{"margin-top":"50px"}},[i("router-link",{attrs:{to:"/vehicles","active-class":"active"}},[i("button",{staticClass:"btn btn-primary",staticStyle:{margin:"30px"}},[e._v("View Vehicles")])]),i("router-link",{attrs:{to:"/vehicletypes","active-class":"active"}},[i("button",{staticClass:"btn btn-primary",staticStyle:{margin:"30px"}},[e._v("Add/Update Vehicle Types")])]),i("router-link",{attrs:{to:"/vehiclecompanies","active-class":"active"}},[i("button",{staticClass:"btn btn-primary",staticStyle:{margin:"30px"}},[e._v("Add/Update Vehicle Companies")])])],1)])],1)},C=[],V=i("cebc"),g=i("2f62"),_={data:function(){return{}},computed:Object(V["a"])({},Object(g["b"])(["DoubleCounter","stringCounter","GetVehicleCompanies","getVehicleTypes","getVehicles"]))},I=_,D=Object(l["a"])(I,v,C,!1,null,null,null),b=D.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container",staticStyle:{margin:"20px auto"}},[i("div",{staticClass:"form-group pull-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search form-control",attrs:{type:"text",placeholder:"What you looking for?"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),i("div",{staticClass:"form-group pull-right"},[i("router-link",{attrs:{to:"/editVehicle"}},[i("button",{staticClass:"btn btn-primary"},[e._v("Add/Update Vehicle ")])])],1),i("table",{staticClass:"table",attrs:{bordered:""}},[e._m(0),i("tbody",e._l(e.filteredData,function(t){return i("tr",{key:t.VehicleID,class:t.displayedColor},[i("td",[e._v(e._s(t.CompanyName))]),i("td",[e._v(e._s(t.IsElectronic))]),i("td",[e._v(e._s(t.Model))]),i("td",[e._v(e._s(t.LicensePlate))]),i("td",[e._v(e._s(t.ActivationMonth))]),i("td",[e._v(e._s(t.PurchaseMonth))]),i("td",[e._v(e._s(t.BatteryExpiryDate))]),i("td",[e._v(e._s(t.Remarks))])])}),0)])])},T=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",{staticClass:"thead-dark"},[i("tr",[i("th",[e._v("Company")]),i("th",[e._v("Vehicle Type")]),i("th",[e._v("Model")]),i("th",[e._v("License Plate")]),i("th",[e._v("Activation Month")]),i("th",[e._v("Purchase Month")]),i("th",[e._v("Battery Expiry Date")]),i("th",[e._v("Remarks")])])])}],x=(i("386d"),i("6762"),i("2fdb"),{data:function(){return{search:""}},computed:{filteredData:function(){var e=this;return this.$store.getters.getData.filter(function(t){return t.Model.toLowerCase().includes(e.search.toLowerCase())||t.LicensePlate.toLowerCase().includes(e.search.toLowerCase())||t.ActivationMonth.toLowerCase().includes(e.search.toLowerCase())||t.PurchaseMonth.toLowerCase().includes(e.search.toLowerCase())||t.BatteryExpiryDate.toLowerCase().includes(e.search.toLowerCase())||t.Remarks.toLowerCase().includes(e.search.toLowerCase())||t.IsElectronic.toLowerCase().includes(e.search.toLowerCase())||t.CompanyName.toLowerCase().includes(e.search.toLowerCase())})}},created:function(){}}),S=x,M=(i("5e0d"),Object(l["a"])(S,E,T,!1,null,"facaad9c",null)),P=M.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-group",staticStyle:{"margin-left":"20px"}},[i("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[i("label",{staticClass:"Column",attrs:{for:"chooseAction"}},[e._v("Please Choose Action : ")]),i("label",[i("input",{staticClass:"Column",staticStyle:{"margin-left":"20px"},attrs:{type:"radio",name:"TypeAction",disabled:!e.updateStatus},domProps:{checked:!e.updateStatus},on:{click:function(t){e.updateStatus=!e.updateStatus}}}),e._v(" Add Type\r\n        ")])]),i("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[i("label",{staticClass:"Column",attrs:{for:"SelectedCompanyInput"}},[e._v("Company :")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.SelectedCompanyID,expression:"SelectedCompanyID"}],staticClass:"Column",staticStyle:{"margin-top":"10px","margin-left":"5px",width:"180px"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.SelectedCompanyID=t.target.multiple?i:i[0]}}},e._l(e.getVehicleCompanies,function(t){return i("option",{key:t.VehicleCompanyID,domProps:{value:t.VehicleCompanyID}},[e._v(e._s(t.CompanyName))])}),0),i("p",{staticStyle:{color:"red"}},[e._v(" "+e._s(e.errorSelectedCompany)+" ")])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column",attrs:{for:"CompanyNameID"}},[e._v("Model : ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.VehicleType.Model,expression:"VehicleType.Model"}],staticClass:"Column",staticStyle:{"margin-left":"45px",width:"180px"},attrs:{type:"text",placeholder:"Model"},domProps:{value:e.VehicleType.Model},on:{input:function(t){t.target.composing||e.$set(e.VehicleType,"Model",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorModel))])]),i("div",{staticClass:"row",staticStyle:{"margin-top":"15px","margin-bottom":"15px"}},[i("label",{attrs:{for:"electric"}},[e._v("Engine Type : ")]),i("label",{attrs:{for:"Electronic"}},[i("input",{staticClass:"Column",staticStyle:{"margin-left":"10px"},attrs:{type:"radio",name:"radioElectric"},domProps:{checked:1==e.VehicleType.IsElectronic},on:{click:function(t){e.VehicleType.IsElectronic=1}}}),e._v("\r\n        Electric\r\n      ")]),i("label",{attrs:{for:"Petrol"}},[i("input",{staticClass:"Column",staticStyle:{"margin-left":"10px"},attrs:{type:"radio",name:"radioElectric"},domProps:{checked:0==e.VehicleType.IsElectronic},on:{click:function(t){e.VehicleType.IsElectronic=0}}}),e._v("\r\n        Petrol\r\n      ")])]),e.updateStatus?e._e():i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.AddVehicleType}},[e._v("Add Type")]),e.updateStatus?i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.EditVehicleType}},[e._v("Update Type")]):e._e(),i("hr"),e.successAdd?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle type has been added!.\r\n")]):e._e(),e.successEdit?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle type has been updated!.\r\n")]):e._e(),i("hr"),i("table",{staticClass:"table table-hover"},[e._m(0),i("tbody",e._l(e.getVehicleTypes,function(t){return i("tr",{key:t.VehicleTypeID},[i("td",[e._v(e._s(e.getCompanyName(t)))]),i("td",[e._v(e._s(t.Model))]),0==t.IsElectronic?i("td",[e._v("Petrol")]):e._e(),0!=t.IsElectronic?i("td",[e._v("Electric")]):e._e(),i("td",[i("button",{on:{click:function(i){return e.UpdateFields(t)}}},[e._v("Edit")])])])}),0)])])},A=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",{staticClass:"thead-dark"},[i("tr",[i("th",[e._v("Company")]),i("th",[e._v("Model")]),i("th",[e._v("Engine Type")])])])}],w=i("5176"),N=i.n(w),L=i("e814"),B=i.n(L),$={data:function(){return{updateStatus:!1,SelectedTypeID:-1,SelectedCompanyID:-1,errorID:"",errorModel:"",errorCheckboxID:"",errorSelectedCompany:"",successAdd:!1,successEdit:!1,VehicleType:{VehicleTypeID:0,CarCompanyID:0,Model:"",IsElectronic:0}}},computed:{getVehicleCompanies:function(){return this.$store.getters.GetVehicleCompanies},getVehicleTypes:function(){return this.$store.getters.getVehicleTypes},getVehicleCompanyName:function(){var e=this,t="";return this.getVehicleCompanies.forEach(function(i){i.VehicleCompanyID==e.SelectedCompanyID&&(t+=""+i.CompanyName)}),t}},methods:{getCompanyName:function(e){var t="";return this.getVehicleCompanies.forEach(function(i){i.VehicleCompanyID==e.CarCompanyID&&(t+=""+i.CompanyName)}),t},UpdateFields:function(e){this.updateStatus||(this.updateStatus=!this.updateStatus),this.VehicleType.VehicleTypeID=e.VehicleTypeID,this.VehicleType.CarCompanyID=e.CarCompanyID,this.SelectedCompanyID=e.CarCompanyID,this.VehicleType.Model=e.Model,this.VehicleType.IsElectronic=e.IsElectronic},EditVehicleType:function(){var e=this,t={};if(-1===this.SelectedCompanyID)this.errorSelectedCompany="Please choose Company ID";else if(""===this.VehicleType.Model)this.errorModel="Please fill the Model";else{this.VehicleType.CarCompanyID=B()(this.SelectedCompanyID),t=N()({},this.VehicleType);var i="https://fleetmanagment.herokuapp.com/updateVehicleType/".concat(this.VehicleType.VehicleTypeID);this.axios.post(i,{CarCompanyID:this.VehicleType.CarCompanyID,Model:this.VehicleType.Model,IsElectronic:this.VehicleType.IsElectronic}).then(function(i){console.log("response from update company ! ".concat(i.status)),200==i.status?(e.$store.dispatch("EditVehicleType",t),e.SelectedTypeID=-1,e.errorID="",e.errorModel="",e.errorCheckboxID="",e.errorSelectedCompany="",e.successEdit=!0,setTimeout(function(){e.successEdit=!1},3e3)):console.log("Error in updating Vehicle type Data !")}),console.log("Successfully updated Vehicl type !")}},AddVehicleType:function(){var e=this;if(""===this.VehicleType.Model)this.errorModel="Please fill the Model";else if(-1===this.SelectedCompanyID)this.errorSelectedCompany="Please choose Company ID";else{this.VehicleType.CarCompanyID=B()(this.SelectedCompanyID);var t="https://fleetmanagment.herokuapp.com/addVehicleType";this.axios.post(t,{CarCompanyID:this.VehicleType.CarCompanyID,Model:this.VehicleType.Model,IsElectronic:this.VehicleType.IsElectronic}).then(function(t){200==t.status?(N()({},e.VehicleType),e.$store.dispatch("addVehicleType"),e.SelectedCompanyID=-1,e.errorID="",e.errorModel="",e.errorSelectedCompany="",e.successAdd=!0,setTimeout(function(){e.successAdd=!1},3e3)):console.log("Error in adding new Type !")})}}}},R=$,j=Object(l["a"])(R,k,A,!1,null,null,null),U=j.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-group",staticStyle:{"margin-left":"20px"}},[i("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[i("label",{staticClass:"Column",attrs:{for:"chooseAction"}},[e._v("Please Choose Action : ")]),i("label",[i("input",{staticClass:"Column",staticStyle:{"margin-left":"20px"},attrs:{type:"radio",name:"CompanyAction",disabled:!e.validated},domProps:{checked:!e.validated},on:{click:function(t){e.validated=!e.validated}}}),e._v(" Add Company\n        ")])]),i("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[i("label",{staticClass:"Column",attrs:{for:"CompanyNameID"}},[e._v("Company Name :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Company.CompanyName,expression:"Company.CompanyName"}],staticClass:"Column",staticStyle:{"margin-left":"5px",width:"180px"},attrs:{type:"text",placeholder:"Company Name"},domProps:{value:e.Company.CompanyName},on:{input:function(t){t.target.composing||e.$set(e.Company,"CompanyName",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorCompanyName))])]),e.validated?e._e():i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.AddCompany()}}},[e._v("Add Company")]),e.validated?i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){return e.EditCompany()}}},[e._v("Update Company")]):e._e(),i("hr"),e.successAdd?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle type has been added!.\n")]):e._e(),e.successEdit?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle type has been updated!.\n")]):e._e(),i("hr"),i("table",{staticClass:"table table-hover"},[e._m(0),i("tbody",e._l(e.getCompaniesFromStore,function(t){return i("tr",{key:t.VehicleCompanyID},[i("td",[e._v(e._s(t.CompanyName))]),i("td",[i("button",{on:{click:function(i){return e.UpdateFields(t)}}},[e._v("Edit")])])])}),0)])])},F=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",{staticClass:"thead-dark"},[i("tr",[i("th",[e._v("Company Name")])])])}],G={data:function(){return{successAdd:!1,successEdit:!1,validated:!1,SelectedID:-1,ListOfId:[],AllCompanies:[],StringID:"",Company:{VehicleCompanyID:0,CompanyName:""},error:"",errorCompanyName:""}},computed:{getCompaniesFromStore:function(){return this.$store.getters.GetVehicleCompanies}},methods:{resetError:function(){this.error="",this.errorCompanyName=""},EditCompany:function(){var e=this;this.resetError();var t={};t=N()({},this.Company);var i="https://fleetmanagment.herokuapp.com/updateCompany/".concat(this.Company.VehicleCompanyID);this.axios.post(i,{CompanyName:this.Company.CompanyName}).then(function(i){console.log("response from update company ! ".concat(i.status)),200==i.status?(e.$store.dispatch("EditVehicleCompany",t),e.StringID="",e.Company.CompanyName="",e.successEdit=!0,setTimeout(function(){e.successEdit=!1},3e3),console.log("Successfully updated company !")):console.log("Error in updating company Data !")})},UpdateFields:function(e){this.validated||(this.validated=!this.validated),this.Company.VehicleCompanyID=e.VehicleCompanyID,this.Company.CompanyName=e.CompanyName},AddCompany:function(){var e=this;if(this.resetError(),""!=this.Company.CompanyName){var t="https://fleetmanagment.herokuapp.com/addCompany";this.axios.post(t,{CompanyName:this.Company.CompanyName}).then(function(t){console.log("response from add company ! ".concat(t.status)),200==t.status?(N()({},e.Company),e.$store.dispatch("addVehicleCompany"),e.Company.CompanyName="",e.error="",e.errorCompanyName="",e.successAdd=!0,setTimeout(function(){e.successAdd=!1},3e3)):console.log("Error in Adding new Company !")})}else this.errorCompanyName="Please fill the Company name field!"}},created:function(){}},Y=G,H=Object(l["a"])(Y,O,F,!1,null,null,null),J=H.exports,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-group",staticStyle:{"margin-left":"20px"}},[i("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px"}},[i("label",{staticClass:"Column",attrs:{for:"chooseAction"}},[e._v("Please Choose Action : ")]),i("label",[i("input",{staticClass:"Column",staticStyle:{"margin-left":"20px"},attrs:{type:"radio",name:"VehicleAction",disabled:!e.updateStatus},domProps:{checked:!e.updateStatus},on:{click:function(t){e.updateStatus=!e.updateStatus}}}),e._v(" Add Vehicle\n        ")])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column"},[e._v("Vehicle Type:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.SelectedTypeID,expression:"SelectedTypeID"}],staticClass:"Column",staticStyle:{"margin-left":"27px",width:"180px"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.SelectedTypeID=t.target.multiple?i:i[0]},function(t){return e.UpdateIsElectric()}]}},e._l(e.getVehicleTypes,function(t){return i("option",{key:t.VehicleTypeID,domProps:{value:t.VehicleTypeID}},[e._v(e._s(t.Model))])}),0),i("p",[e._v("Electic is : "+e._s(e.IsEle))]),i("p",{staticStyle:{color:"red"}},[e._v(" "+e._s(e.errorSelectedType)+" ")])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column"},[e._v("License Plate :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Vehicle.LicensePlate,expression:"Vehicle.LicensePlate"}],staticClass:"Column",staticStyle:{"margin-left":"40px",width:"180px"},attrs:{type:"text",placeholder:"Format : 000-00-000"},domProps:{value:e.Vehicle.LicensePlate},on:{input:function(t){t.target.composing||e.$set(e.Vehicle,"LicensePlate",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorLicensePlate))])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column"},[e._v("Activation Month :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Vehicle.ActivationMonth,expression:"Vehicle.ActivationMonth"}],staticClass:"Column",staticStyle:{width:"180px","margin-left":"16px"},attrs:{type:"month",max:"2019-03",min:"2015-03"},domProps:{value:e.Vehicle.ActivationMonth},on:{input:function(t){t.target.composing||e.$set(e.Vehicle,"ActivationMonth",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorActivationMonth))])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column"},[e._v("Purchase Month :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Vehicle.PurchaseMonth,expression:"Vehicle.PurchaseMonth"}],staticClass:"Column",staticStyle:{width:"180px","margin-left":"20px"},attrs:{type:"month",placeholder:"Enter Purchase Month , format mm/yyyy"},domProps:{value:e.Vehicle.PurchaseMonth},on:{input:function(t){t.target.composing||e.$set(e.Vehicle,"PurchaseMonth",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorPurchaseMonth))])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column",attrs:{for:"BatteryExpiryDateInput"}},[e._v("Battery Expiry Date :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Vehicle.BatteryExpiryDate,expression:"Vehicle.BatteryExpiryDate"}],staticClass:"Column",staticStyle:{width:"180px"},attrs:{type:"date",placeholder:"Enter Battery Expiry Date , format mm/yyyy",disabled:!e.IsEle},domProps:{value:e.Vehicle.BatteryExpiryDate},on:{input:function(t){t.target.composing||e.$set(e.Vehicle,"BatteryExpiryDate",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorBatteryExpiryDate))])]),i("div",{staticClass:"row"},[i("label",{staticClass:"Column",attrs:{for:"RemarksInput"}},[e._v("Remarks :")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.Vehicle.Remarks,expression:"Vehicle.Remarks"}],staticClass:"Column",staticStyle:{width:"50%","margin-left":"69px"},attrs:{type:"text",placeholder:"Enter Remarks"},domProps:{value:e.Vehicle.Remarks},on:{input:function(t){t.target.composing||e.$set(e.Vehicle,"Remarks",t.target.value)}}}),i("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorRemarks))])]),e.updateStatus?e._e():i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.addVehicle}},[e._v("Add Vehicle")]),e.updateStatus?i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.editVehicle}},[e._v("Update Vehicle")]):e._e(),e.successAdd?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle has been added!.\n")]):e._e(),e.successEdit?i("div",{staticClass:"alert alert-success"},[i("strong",[e._v("Success!")]),e._v(" Vehicle has been updated!.\n")]):e._e(),i("hr"),i("table",{staticClass:"table table-hover"},[e._m(0),i("tbody",e._l(e.getVehicles,function(t){return i("tr",{key:t.VehicleID},[i("td",[e._v(e._s(e.getVehicleCompanyNameAndModel(t)))]),i("td",[e._v(e._s(t.LicensePlate))]),i("td",[e._v(e._s(t.ActivationMonth))]),i("td",[e._v(e._s(t.PurchaseMonth))]),i("td",[e._v(e._s(t.BatteryExpiryDate))]),i("td",[e._v(e._s(t.Remarks))]),i("td",[i("button",{on:{click:function(i){return e.UpdateFields(t)}}},[e._v("Edit")])])])}),0)])])},W=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",{staticClass:"thead-dark"},[i("tr",[i("th",[e._v("Vehicle Type and company")]),i("th",[e._v("License Plate")]),i("th",[e._v("Activation Month")]),i("th",[e._v("Purchase Month")]),i("th",[e._v("Battery Expiry Date")]),i("th",[e._v("Remarks")])])])}],q=(i("3b2b"),i("28a5"),{data:function(){return{IsEle:!1,updateStatus:!1,SelectedVehicleID:-1,SelectedTypeID:-1,successAdd:!1,successEdit:!1,errorID:"",errorCheckboxID:"",errorSelectedType:"",errorLicensePlate:"",errorActivationMonth:"",errorPurchaseMonth:"",errorRemarks:"",errorBatteryExpiryDate:"",Vehicle:{VehicleID:0,VehicleTypeID:0,LicensePlate:"",ActivationMonth:"",PurchaseMonth:"",BatteryExpiryDate:null,Remarks:"",displayedColor:"white"}}},computed:{getVehicleCompanies:function(){return this.$store.getters.GetVehicleCompanies},getVehicleTypes:function(){return this.$store.getters.getVehicleTypes},getVehicles:function(){return this.$store.getters.getVehicles}},methods:{displayColorSelector:function(){var e=new Date,t=e.getUTCMonth()+1,i=e.getUTCFullYear(),a=(this.Vehicle.ActivationMonth.split("-"),this.Vehicle.PurchaseMonth.split("-"));if(i-B()(a[0])>3)return"yellow";if(i-B()(a[0])==3&&B()(a[1])-t<=0)return"yellow";if(this.IsEle){var s=this.Vehicle.BatteryExpiryDate.charAt(8)+""+this.Vehicle.BatteryExpiryDate.charAt(9),o=this.Vehicle.BatteryExpiryDate.split("-");return B()(o[0])-i<0?"pink":B()(o[0])-i==0&&B()(o[1])-t==0?B()(s)-B()(o[2])<0?"pink":"blue":"white"}return"white"},editButton:function(){this.updateStatus=!this.updateStatus},getVehicleCompanyNameAndModel:function(e){var t=this,i="";return this.getVehicleTypes.forEach(function(a){a.VehicleTypeID==e.VehicleTypeID&&t.getVehicleCompanies.forEach(function(e){if(a.CarCompanyID==e.VehicleCompanyID)return i+=" ".concat(e.CompanyName," ,").concat(a.Model),i})}),i},dateValidation:function(){var e=new Date,t=e.getUTCMonth()+1,i=e.getUTCFullYear(),a=this.Vehicle.ActivationMonth.split("-");return!(i-B()(a[0])>4)&&(i-B()(a[0])==4?B()(a[1])+1-t>=0:i-B()(a[0])==0?B()(a[1])+1-t<=0:!(i-B()(a[0])<0))},checkActivationYear:function(){var e=new Date,t=e.getUTCMonth()+1,i=e.getUTCFullYear(),a=this.Vehicle.ActivationMonth.split("-");return!(i-B()(a[0])>4)&&(i-B()(a[0])!=4||B()(a[1]-t)>=0)},CheckIfActivationAfterPurchase:function(){var e=this.Vehicle.PurchaseMonth.split("-"),t=this.Vehicle.ActivationMonth.split("-");return!(B()(e[0])>B()(t[0]))&&(B()(e[0])!==B()(t[0])||!(B()(t[1])<B()(e[1])))},CheckRegex:function(e){var t=new RegExp("^[0-9]{3,3}-[0-9]{2,2}-[0-9]{3,3}$");return t.test(e)},UpdateFields:function(e){this.updateStatus||(this.updateStatus=!this.updateStatus),this.Vehicle.VehicleID=e.VehicleID,this.SelectedTypeID=e.VehicleTypeID,this.Vehicle.LicensePlate=e.LicensePlate,this.Vehicle.ActivationMonth=e.ActivationMonth,this.Vehicle.PurchaseMonth=e.PurchaseMonth,null!=e.BatteryExpiryDate&&(this.Vehicle.BatteryExpiryDate=e.BatteryExpiryDate.substring(0,10)),this.Vehicle.BatteryExpiryDate=e.BatteryExpiryDate,this.Vehicle.Remarks=e.Remarks,this.UpdateIsElectric()},errorSetup:function(){this.errorID="",this.errorCheckboxID="",this.errorSelectedType="",this.errorLicensePlate="",this.errorActivationMonth="",this.errorBatteryExpiryDate="",this.errorPurchaseMonth=""},addVehicle:function(){var e=this;if(this.errorSetup(),-1===this.SelectedTypeID)this.errorSelectedType="Please choose type ID !";else if(this.CheckRegex(this.Vehicle.LicensePlate))if(""===this.Vehicle.LicensePlate)this.errorLicensePlate="Please fill the license plate field";else if(""===this.Vehicle.ActivationMonth)this.errorActivationMonth="Please fill the Activation Month field";else if(1==this.IsEle&&""===this.BatteryExpiryDate)this.errorBatteryExpiryDate="Please fill the battery expiry date field";else if(""===this.PurchaseMonth)this.errorPurchaseMonth="Please fill the Purchase month field";else if(0==this.dateValidation())this.errorActivationMonth="The Activation Month should be between 2019/3 - 2015/3";else{0==this.IsEle&&(this.Vehicle.BatteryExpiryDate=null),this.Vehicle.VehicleID=B()(this.Vehicle.VehicleID),this.Vehicle.VehicleTypeID=B()(this.SelectedTypeID),this.Vehicle.displayedColor=this.displayColorSelector();var t="https://fleetmanagment.herokuapp.com/addVehicle";this.axios.post(t,{VehicleTypeID:this.Vehicle.VehicleTypeID,LicensePlate:this.Vehicle.LicensePlate,ActivationMonth:this.Vehicle.ActivationMonth,PurchaseMonth:this.Vehicle.PurchaseMonth,BatteryExpiryDate:this.Vehicle.BatteryExpiryDate,Remarks:this.Vehicle.Remarks,displayedColor:this.Vehicle.displayedColor}).then(function(t){console.log("response from add vehicle ! ".concat(t.status)),200==t.status?(console.log("The color is : ".concat(e.Vehicle.displayedColor)),e.$store.dispatch("addVehicle"),N()({},e.Vehicle),e.SelectedTypeID=-1,e.errorSetup(),e.successAdd=!0,setTimeout(function(){e.successAdd=!1},3e3)):console.log("Error in adding new Vehicle !")})}else this.errorLicensePlate="The format should be 000-00-000"},UpdateIsElectric:function(){var e=this;-1!==this.SelectedTypeID&&this.getVehicleTypes.forEach(function(t){t.VehicleTypeID==e.SelectedTypeID&&(t.IsElectronic?(e.IsEle=!0,e.Vehicle.BatteryExpiryDate=""):e.IsEle=!1)})},editVehicle:function(){var e=this,t={};if(this.errorSetup(),-1===this.SelectedTypeID)this.errorSelectedType="Please choose type ID !";else if(this.CheckRegex(this.Vehicle.LicensePlate))if(""===this.Vehicle.LicensePlate)this.errorLicensePlate="Please fill the license plate field";else if(""===this.Vehicle.ActivationMonth)this.errorActivationMonth="Please fill the Activation Month field";else if(1==this.IsEle&&""===this.BatteryExpiryDate)this.errorBatteryExpiryDate="Please fill the battery expiry date field";else if(""===this.PurchaseMonth)this.errorPurchaseMonth="Please fill the Purchase month field";else if(0==this.checkActivationYear())this.errorActivationMonth="Cannot edit car that was activated for more than 4 years !";else{this.Vehicle.VehicleTypeID=B()(this.SelectedTypeID),t=N()({},this.Vehicle),this.Vehicle.displayedColor=this.displayColorSelector();var i="https://fleetmanagment.herokuapp.com/updateVehicle/".concat(this.Vehicle.VehicleID);this.axios.post(i,{VehicleTypeID:this.Vehicle.VehicleTypeID,LicensePlate:this.Vehicle.LicensePlate,ActivationMonth:this.Vehicle.ActivationMonth,PurchaseMonth:this.Vehicle.PurchaseMonth,BatteryExpiryDate:this.Vehicle.BatteryExpiryDate,Remarks:this.Vehicle.Remarks,displayedColor:this.Vehicle.displayedColor}).then(function(i){console.log("response from update vehicle ! ".concat(i.status)),200==i.status?(e.$store.dispatch("editVehicle",t),e.SelectedVehicleID=-1,e.SelectedTypeID=-1,e.errorSetup(),e.successEdit=!0,setTimeout(function(){e.successEdit=!1},3e3)):console.log("Error in editing Vehicle")})}else this.errorLicensePlate="The format should be 000-00-000"}}}),z=q,K=Object(l["a"])(z,Q,W,!1,null,null,null),X=K.exports,Z=[{path:"/",component:b},{path:"/vehicles",component:P},{path:"/vehicletypes",component:U},{path:"/vehiclecompanies",component:J},{path:"/editVehicle",component:X}],ee=i("7618"),te=(i("20d6"),i("bc3a")),ie=i.n(te);a["a"].use(g["a"]);var ae=new g["a"].Store({state:{VehicleCompanies:[],VehicleTypes:[],Vehicles:[],allData:[],tempVehicleInfo:{}},getters:{GetVehicleCompanies:function(e){return e.VehicleCompanies},getVehicleTypes:function(e){return e.VehicleTypes},getVehicles:function(e){return e.Vehicles},getData:function(e){return e.Vehicles.forEach(function(t){var i=e.allData.findIndex(function(e){return e.VehicleID==t.VehicleID});if(-1==i){if(e.tempVehicleInfo.VehicleID=t.VehicleID,e.tempVehicleInfo.PurchaseMonth=t.PurchaseMonth,e.tempVehicleInfo.LicensePlate=t.LicensePlate,e.tempVehicleInfo.ActivationMonth=t.ActivationMonth,null==t.BatteryExpiryDate)e.tempVehicleInfo.BatteryExpiryDate="------";else{var a=t.BatteryExpiryDate.substring(0,10);e.tempVehicleInfo.BatteryExpiryDate=a}e.tempVehicleInfo.Remarks=t.Remarks,e.tempVehicleInfo.displayedColor=t.displayedColor,e.VehicleTypes.forEach(function(i){t.VehicleTypeID==i.VehicleTypeID&&(e.tempVehicleInfo.Model=i.Model,0==i.IsElectronic?(e.tempVehicleInfo.IsElectronic="Petrol",e.tempVehicleInfo.BatteryExpiryDate="------"):e.tempVehicleInfo.IsElectronic="Electric",e.VehicleCompanies.forEach(function(t){t.VehicleCompanyID==i.CarCompanyID&&(e.tempVehicleInfo.CompanyName=t.CompanyName,e.allData.push(N()({},e.tempVehicleInfo)))}))})}}),e.allData}},mutations:{addVehicleCompany:function(e){var t="https://fleetmanagment.herokuapp.com/getCompanies";ie.a.get(t).then(function(t){t.data.forEach(function(t){var i=e.VehicleCompanies.findIndex(function(e){return e.VehicleCompanyID===t.VehicleCompanyID});-1==i&&e.VehicleCompanies.push(t)})})},editVehicleCompany:function(e,t){var i=e.VehicleCompanies.findIndex(function(e){return e.VehicleCompanyID===t.VehicleCompanyID});-1===i?(console.log("type of the sent object id is : ".concat(Object(ee["a"])(t.VehicleCompanyID))),console.log("Error at edit vehicle company - should find the object and replace it")):e.VehicleCompanies[i]=t},addVehicleType:function(e,t){var i="https://fleetmanagment.herokuapp.com/getVehicleTypes";ie.a.get(i).then(function(t){t.data.forEach(function(t){var i=e.VehicleTypes.findIndex(function(e){return e.VehicleTypeID===t.VehicleTypeID});-1==i&&e.VehicleTypes.push(t)})})},editVehicleType:function(e,t){var i=e.VehicleTypes.findIndex(function(e){return e.VehicleTypeID===t.VehicleTypeID});-1===i?console.log("Error at edit vehicle type - should find the object and replace it"):e.VehicleTypes[i]=t},addVehicle:function(e){var t="https://fleetmanagment.herokuapp.com/getVehicles";ie.a.get(t).then(function(t){t.data.forEach(function(t){var i=e.Vehicles.findIndex(function(e){return e.VehicleID===t.VehicleID});-1==i&&e.Vehicles.push(t)})})},editVehicle:function(e,t){var i=e.Vehicles.findIndex(function(e){return e.VehicleID===t.VehicleID});-1===i?console.log("Error at edit vehicle - should find the object and replace it"):e.Vehicles[i]=t}},actions:{addVehicleCompany:function(e){e.commit("addVehicleCompany")},EditVehicleCompany:function(e,t){e.commit("editVehicleCompany",t)},addVehicleType:function(e,t){e.commit("addVehicleType",t)},EditVehicleType:function(e,t){e.commit("editVehicleType",t)},addVehicle:function(e){e.commit("addVehicle")},editVehicle:function(e,t){e.commit("editVehicle",t)}}}),se=i("a7fe"),oe=i.n(se);a["a"].config.productionTip=!1,a["a"].use(oe.a,ie.a),a["a"].use(s["a"]);var ne=new s["a"]({routes:Z,mode:"history"});new a["a"]({store:ae,router:ne,render:function(e){return e(f)}}).$mount("#app")},"5e0d":function(e,t,i){"use strict";var a=i("7cb3"),s=i.n(a);s.a},"7cb3":function(e,t,i){}});
//# sourceMappingURL=app.0960ffb1.js.map