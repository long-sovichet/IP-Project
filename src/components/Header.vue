<template>
  <header class="header">
    <div class="logo">
      <h1>Tech C3</h1>
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <!-- Add more links as needed, e.g., Products, Contact -->
    </nav>
    <div class="store-info">
      <p>Welcome to Tech C3 - Your Computer Store</p>
    </div>
  </header>
</template>

<script setup>
// No script needed for basic header
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo h1 {
  margin: 0;
  color: #007bff;
}

.nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

.nav a.router-link-active {
  font-weight: bold;
}

.store-info p {
  margin: 0;
  font-size: 0.9rem;
}
</style>
