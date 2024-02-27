<template>

<h1>Admin</h1>


  <div class="admin">
    <!-- Edit inputs -->
    <div class="inputM">

        <input class="info" v-model="prodID" type="text" placeholder="Product ID:"/>
        <input class="info" v-model="prodName" type="text" placeholder="Product Name:"/>
        <input class="info" v-model="prodQuantity" type="text" placeholder="Product Quantity:"/>
        <input class="info" v-model="prodAmount" type="text" placeholder="Product Amount:"/>
        <input class="info" v-model="prodImg" type="text" placeholder="Product Image URL:"/>

        <p class="cat">Category:</p>
        <select v-model="prodCategory">
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegan">Non-Vegan</option>
        </select>
        <br>
      <button type="button" class="btn btn-primary" @click="registerProduct">Add Product</button>

    </div>
        
    <!-- Product Table -->
    <table class="table table-bordered">
      <thead >
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getProducts" :key="item.prodID">
          <td>{{ item.prodID }}</td>
          <td><img :src="item.prodImg" alt="Product Image" ></td>
          <td>{{ item.prodName }}</td>
          <td>{{ item.prodCategory }}</td>
          <td>{{ item.prodQuantity }}</td>
          <td>{{ item.prodAmount }}</td>
          <td>
            <button class="btn1" @click="deleteProduct(item.prodID)">Delete</button>
            <button class="btn2" @click="updateProduct(item.prodID)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
     prodID: '',
     prodName: '',
     prodImg: '',
     prodCategory: '',
     prodQuantity: '',
     prodAmount: ''
    };
  },
  computed: {
    getProducts() {
    return this.$store.state.products;
  },
    registerProduct(){
      this.$store.dispatch('registerProduct', this.$data)
    },
    
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
  methods: {
    deleteProduct(prodID){
      this.$store.dispatch('deleteProduct', prodID)
    }
}
};
</script>

<style scoped>
h1{
  text-align: center;
  padding-bottom: 50px;
  padding-top: 50px;
  color: black;
}
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cat{
  font-size: 20px;
  margin-bottom: 5px;
  color: black;
}
.table {
  background: transparent !important;
  width: 85%;
  margin-bottom: 50px;
}
th{
  font-size: 18px;
  /* font-family: 'Poppins', sans-serif; */
  padding: 10px;
}

img {
  height: 80px;
  width: 100px;
}

input {
  width: 30%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 2px solid black;
  margin: 15px;
  background-color: transparent;
  transition: 0.5s;
}
input:hover{
  background-color: white;
  transform: scale(1.05);
  transition: 0.5s;
}
::placeholder{
  color: black;
}
select{
  width: 30%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  border: 2px solid black;
  background-color: transparent;
}
select:hover{
  background-color: white;
  transition: 0.5s;
  transform: scale(1.05);
}
.btn-primary {
  background-color: #87EF97;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 15px 15px;
  cursor: pointer;
  margin: 15px;
  /* margin-top: 150px; */
  font-size: 20px;
  margin-bottom: 50px;
  transition: 0.5s;
}
.btn-primary:hover{
  transition: 0.5s;
  transform: scale(1.1);
  /* border: 2px solid black ; */
  color: black;
  background-color: #87EF97;
}
.btn1{
  border: none;
  background-color: red;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  padding: 8px;
  margin: 8px;
}
.btn2{
  border: none;
  background-color: rgb(20, 74, 211);
  color: white;
  font-size: 18px;
  border-radius: 10px;
  padding: 8px;
  margin: 8px;
}
</style>
