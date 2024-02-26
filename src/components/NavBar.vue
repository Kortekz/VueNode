<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
    <router-link to="/" class="navbar-brand">
      <span class="logo">
        Kittleys
        <i class="fa fa-circle" style="font-size:9px"></i>
      </span>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" active-class="active-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" active-class="active-link">Admin</router-link>
        </li>
        
      </ul>

      <!-- CONTACT US button  -->
      <router-link to="/contact" class="btn-primary" active-class="active-link">Contact Us</router-link>

    </div>
  </nav>
</template>

<script>
export default {
}
</script>
  
  <style scoped>


  /* Custom styling for the navbar */
  .navbar {
    background-color: transparent !important;
    padding-top: 20px;
  }
  
  .logo {
    margin-left: 50px;
    font-size: 30px !important;
  }
  
  .navbar-brand .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: black !important;
  }
  .fa{
    font-size: 50px;
    color: #05FF00;
    border-radius: 50px;
    margin-right: 25px;
  }
  
  .navbar-nav {
    text-align: center; /* Center the navigation links */
  }
  
  .navbar-nav .nav-item {
    margin-right: 15px; /* Adjust the spacing between navigation links */
  }
  
  .navbar-nav .nav-item .nav-link {
    color: black !important;
  }
  
  /* Style for the CONTACT US button */
  .btn-primary {
    background-color: #87EF97;
    padding: 13px;
    color: rgb(0, 0, 0);
    border: none;
    margin-right: 80px;
    border-radius: 15px;
    font-weight: 500;
    text-decoration: none;
    font-size: 18px;
  }
  .btn-primary:hover{
    background-color: #6bad75;
    color: rgb(0, 0, 0);
  }
  
  li{
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  }
  

  /* Hover effect for navbar links */
  .navbar-nav .nav-item .nav-link:hover {
    color: #42b983 !important;
    transform: scale(1.1);
  }

  /* Active styling for navbar links */
  .navbar-nav .nav-item .active-link {
    color: #42b983 !important;
    transform: scale(1.1);
  }

  .navbar-nav .nav-item .nav-link,
  .navbar-nav .nav-item .active-link {
    transition: color 0.3s, transform 0.3s;
  }

  </style>
  