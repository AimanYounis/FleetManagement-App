<template>

    <nav class="navbar navbar-default" >
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Fleet Managment</a>
    </div>
    <ul class="nav navbar-nav">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/vehicles" tag="li" active-class="active" ><a>Vehicles</a></router-link>
    <router-link to="/vehiclecompanies" tag="li" active-class="active" ><a>Vehicle Companies</a></router-link>
    <router-link to="/vehicletypes" tag="li" active-class="active" ><a>Vehicle Types</a></router-link>
  
    </ul>
  </div>
</nav>

</template>
