<template>
  <div class="container">


    <div class="text">
      <h3>Meal kits, Ready made for you</h3>
      <h1>Eat Healthy</h1>
      <h1>Live Healthy</h1>
      <h1>Today</h1>


      <div class="buttons">
        <button class="get-started-btn">Get Started</button>
        <button class="meal-kits-btn">Meal Kits</button>
      </div>
    </div>

    <div class="img">
      <img class="food1" src="https://i.imgur.com/fidHou9.png" alt="">
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
  padding-top: 50px;
}

.text {
  text-align: left;
  margin-left: 20px;
  margin-top: -80px; /* Adjust the margin-top to move the text higher */
}

h3 {
  color: #4FB860;
  font-size: 22px;
  font-weight: 400;
  padding-bottom: 20px;
}

h1 {
  color: black;
  font-weight: 700;
  font-size: 50px;
}

.buttons {
  display: flex;
  margin-top: 50px;
}

button {
  margin-right: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

.get-started-btn {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: 500;
}

.meal-kits-btn {
  background-color: #EAF476;
  color: black;
  border: none;
  border-radius: 50px;
  font-weight: 500;
}

.food1 {
  height: 520px;
  width: 520px;
}

.img {
  margin-left: 300px;
  padding-top: 20px;
}
</style>
