<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <a class="navbar-brand" href="../views/HomeView.vue">
        <span class="logo">Kittleys</span>
      </a>
  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="../views/HomeView.vue">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../views/AboutView.vue">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../views/ProductsView.vue">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../views/AdminView.vue">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../views/ContactView.vue">Contact</a>
          </li>
        </ul>
  
        <!-- CONTACT US button  -->
        <button class="btn btn-primary ml-auto">Contact Us</button>
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
  }
  .btn-primary:hover{
    background-color: #6bad75;
    color: rgb(0, 0, 0);
  }
  
  
  </style>
  