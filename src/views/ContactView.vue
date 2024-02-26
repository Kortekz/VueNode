<template>


<h1>Contact Us</h1>

    <div class="container">

        

      <div class="content">
        
        <div class="text">
          <p>
            At Kittleys, we're always excited to hear from our customers and community. Whether you have a question about our products, need help with an order, or simply want to share your feedback, we're here to listen and assist.
          </p>
          <p>
            You can reach us through the following channels:
          </p>
          <p>
            Email: info@Kittleys.com
            <br>
            Phone: (061) 027-8132
          </p>
          <p>
            We strive to provide exceptional customer service and ensure that your experience with Kittleys is positive and fulfilling. Don't hesitate to get in touch with us - we look forward to hearing from you!
          </p>
        </div>

      </div>

      <div class="form-container">
        <form action="https://formspree.io/f/mgegykyq" method="POST">
          <label>
            <!-- <p>Name:</p> -->
            <input type="name" name="name" placeholder="Name" required>
          </label>
          <label>
            <!-- <p>Surname:</p> -->
            <input type="Surname" name="Surname" placeholder="Surname" required>
          </label>
          <label>
            <!-- <p>Email:</p> -->
            <input type="email" name="email" placeholder="Email" required>
          </label>
          <label>
            <!-- <p>Message:</p> -->
            <textarea name="message" placeholder="Message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
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
    padding-top: 20px;
  }
  
  .content {
    text-align: left;
    /* margin-left: -50px; */
  }

  .text{
    margin-left: -200px;
    max-width: 600px; 
    margin-top: 0px;
    
  }

  p{
    font-size: 18px;
    font-weight: 500;
  }
  
  .form-container {
    text-align: left;
    margin-left: 150px;
    padding-top: 50px;
  }
  
  h1 {
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 40px;
    padding-top: 50px;
    margin-right: 30px;
  }
  p{
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input,
  textarea {
    width: 150%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 2px solid black;
    background: transparent; /* Set the background to transparent */
    color: black; /* Set the text color */
  }

  ::placeholder {
    color: black; 
    font-weight: 500;
    font-size: 16px;
  }
  
  button {
    background-color: #4FB860;
    color: black;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  </style>
  