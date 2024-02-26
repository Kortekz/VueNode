<!-- src/views/Admin.vue -->
<template>
    <div class="admin">
      <!-- Edit Form -->
      <form @submit.prevent="submitEditForm">
        <label>
          Product ID:
          <input v-model="editForm.prodID" type="text" required />
        </label>
        <label>
          Product Name:
          <input v-model="editForm.prodName" type="text" required />
        </label>
        <label>
          Product Quantity:
          <input v-model="editForm.prodQuantity" type="text" required />
        </label>
        <label>
          Product Amount:
          <input v-model="editForm.prodAmount" type="text" required />
        </label>
  
        <button type="submit" class="btn btn-primary" :disabled="!editForm.prodName || !editForm.prodQuantity || !editForm.prodAmount">Add Product</button>
  
        <button type="button" class="btn btn-primary" :disabled="!editForm.prodID" @click="updateProduct">Update Product</button>
      </form>
  
      <!-- Product Table -->
      <table class="table table-transparent">
        <thead>
          <tr>
            <th> ID </th>
            <th> Image </th>
            <th> Name </th>
            <th> Quantity </th>
            <th> Amount </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.state.products" :key="item.prodID">
            <td>{{ item.prodID }}</td>
            <td><img :src="item.prodImg" alt="Product Image" class="table-image"></td>
            <td>{{ item.prodName }}</td>
            <td>{{ item.prodQuantity }}</td>
            <td>{{ item.prodAmount }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteProduct(item.prodName)">Delete</button>
              <!-- <button class="btn btn-warning" @click="setEditForm(item)">Edit</button> -->
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
        editForm: {
          prodID: '',
          prodName: '',
          prodQuantity: '',
          prodAmount: '',
        },
      };
    },
    mounted() {
      this.$store.dispatch('getProducts');
    },
    methods: {
      submitEditForm() {
        if (this.editForm.prodID) {
          this.updateProduct();
        } else {
          this.$store.dispatch('registerProduct', this.editForm)
            .then(() => {
              this.editForm = {
                prodID: '',
                prodName: '',
                prodQuantity: '',
                prodAmount: '',
              };
            })
            .catch((error) => {
              console.error('Error adding Product:', error);
            });
        }
      },
      updateProduct() {
        this.$store.dispatch('registerProduct', this.editForm)
          .then(() => {
            this.editForm = {
              prodID: '',
              prodName: '',
              prodQuantity: '',
              prodAmount: '',
            };
          })
          .catch((error) => {
            console.error('Error updating Product:', error);
          });
      },
      setEditForm(item) {
        this.editForm = {
          prodID: item.prodID,
          prodName: item.prodName,
          prodQuantity: item.prodQuantity,
          prodAmount: item.prodAmount,
        };
      },
      deleteProduct(id) {
        this.$store.dispatch('deleteProduct', id);
      },
    },
  };
  </script>
  
  <style scoped>
  .admin {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  table {
    width: 60%;
  }
  .table-transparent {
    background: transparent !important;
    color: white;
    border: none;
    margin: 40px;
  }
  .table th,
  .table td {
    border: 2px solid black;
  }
  .table-image {
    max-width: 100px;
    max-height: 100px;
  }
  .btn-danger {
    background-color: #FF4D4D;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  .btn-warning {
    background-color: #FFD166;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  form {
    margin-bottom: 20px;
    margin-left: 40px;
  }
  form label {
    display: block;
    margin-bottom: 10px;
  }
  form input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  .btn-primary {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 15px;
  }
  </style>
  