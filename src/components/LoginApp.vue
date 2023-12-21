<!-- Login.vue -->
<template class="body">
    <div>
      <h2 class="label">Login to Moodly</h2>
      <form @submit.prevent="login" class="connexion">
        <label class="label">Email:</label>
        <input class="mail" type="email" v-model="email" required />
  
        <label class="label">Password:</label>
        <input class="password" type="password" v-model="password" required />
  
        <button class="button" type="submit">Login</button>
      </form>

    <router-link to="/slider">Go to ImageCarousel</router-link>
    <router-link to="/graph">Go to Graph</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Requête axios pour se connecter
        console.log('Login attempt:', this.email, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
 .connexion {
  background : white;
  border-radius : 10px;
  width : 30%;
  display : flex;
  flex-direction: column;
  padding: 10px;
  margin : auto;
 
}

.label {
  font-family: 'Roboto', sans-serif, bold;
  color: #040f1e
}

.button {
  margin : 30px;
  width: auto;
  background-color: #040F1E;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif, bold;
}
.password {
  margin : 30px;
  width: auto;
 
}
.mail {
  margin : 30px;
  width: auto;
 
}
.form {
  padding : 5%;
  margin-top : 20%;
 
}
.title{
  color : white;
  margin-top : 30%
 
}
body {
  background : #040F1E;
 
}
  </style>
  