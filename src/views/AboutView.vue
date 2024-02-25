<template>


  <div class="container">

    <div class="content">

      <div class="about">

        <h3 class="Ab">About Kittleys</h3>

        <h3 class="head">Care About Nutrition For your Health</h3>

        <p class="texty">
          At Kittleys, we're dedicated to making healthy eating easy and accessible for all. We offer customizable food kits with fresh, 
          high-quality ingredients to suit various dietary needs and preferences. 
        </p>
        <p class="texty2">
          Our team is passionate about food and community, and we partner with 
          local organizations to promote wellness and sustainability. 
        </p>
        <p class="texty2">
          Join us in our mission to make healthy eating delicious and fun!
        </p>

      </div>

    </div>

    <div class="food-image">
      <img src="https://i.imgur.com/LniFTIm.png" alt="">
    </div>

  </div>

</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  margin-left: 150px;
}

.Ab{
  color: #4FB860;
  font-size: 25px;
  font-weight: 400;
  padding-bottom: 40px;
}

.head{
  color: black;
  font-weight: 500;
  font-size: 30px;
  padding-bottom: 40px;
}
.content {
  text-align: left;
  margin-right: 100px; 
  margin-top: -60px;
}

.texty{
  color: black;
  font-size: 18px;
  font-weight: 500;
}
.texty2{
  color: black;
  font-size: 18px;
  font-weight: 500;
}

.about {
  max-width: 700px; 
}

/* .food-image {
  flex-shrink: 0; 
} */

img {
  max-width: 70%;
  height: auto;
}
</style>
