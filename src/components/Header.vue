<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo">
      <h1>
        <span class="tech">Tech</span>
        <span class="c3"> C3</span>
      </h1>
    </div>

    <!-- Navigation -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>

    <!-- Right section -->
    <div class="right">
      <input type="text" placeholder="Search..." />
      <span class="icon">👤</span>
      <span class="icon">🔔</span>
      <span class="icon">🛒</span>
    </div>
  </header>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

/* Logo */
.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.tech {
  color: #ff7a00;
  font-weight: bold;
}

.c3 {
  color: #7c3aed;
  font-weight: bold;
}

/* Navigation */
.nav {
  display: flex;
  gap: 1.5rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav a.router-link-active {
  color: #00bfa6;
  font-weight: bold;
}

/* Right section */
.right {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.right input {
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.icon {
  cursor: pointer;
  font-size: 1.1rem;
}
.logo {
  margin-right: 2rem;
}
</style>
