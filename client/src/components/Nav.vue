<template>

         
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">RecipeDB</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
         <router-link to="/" class="nav-link bg-light ">DB Items</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" class="nav-link bg-light ">Create Item</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="nav-link bg-light ">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link bg-light disabled">Kitchen</router-link>
      </li>
       <li class="nav-item">
        <router-link to="/" class="nav-link bg-light disabled">Recipes</router-link>
      </li>
       <li class="nav-item">
        <router-link to="/" class="nav-link bg-light disabled">About</router-link>
      </li>
    </ul>
    <div class="navbar-nav">
      <router-link to="/SignUp" class="nav-link bg-light ">Create Account</router-link>
      <router-link to="/Login" class="nav-link bg-light ">Login</router-link>
      <router-link to="/Profile" class="nav-link bg-light ">My Account</router-link>
      <router-link to="" class="nav-link bg-light ">Logout</router-link>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
      data() {
        return {
        }
      },
    }
</script>