<template>
  <Landing />
</template>

<script setup>
import Landing from '../components/Landing.vue'
</script>

<style scoped>
.landing-page {
  display: flex;
  height: 80vh;
  align-items: center;
}

.left-section {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.left-section h1 {
  font-size: 3em;
}

.left-section p {
  font-size: 1.5em;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
}

.shop-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.brand-section {
  padding: 20px;
  text-align: left;
}

.brand-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brand-image {
  width: 200px;
  height: auto;
  cursor: pointer;
}
</style>
