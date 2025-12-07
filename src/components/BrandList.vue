<template>
  <div class="brand-section">
    <div class="brand-list">
      <router-link to="/brand1">
        <img :src="brand1Src" alt="Brand 1" class="brand-image" />
      </router-link>
      <router-link to="/brand2">
        <img :src="brand2Src" alt="Brand 2" class="brand-image" />
      </router-link>
      <router-link to="/brand3">
        <img :src="brand3Src" alt="Brand 3" class="brand-image" />
      </router-link>
      <router-link to="/brand4">
        <img :src="brand4Src" alt="Brand 4" class="brand-image" />
      </router-link>
      <router-link to="/brand5">
        <img :src="brand5Src" alt="Brand 5" class="brand-image" />
      </router-link>
      <router-link to="/brand6">
        <img :src="brand6Src" alt="Brand 6" class="brand-image" />
      </router-link>
      <router-link to="/brand7">
        <img :src="brand7Src" alt="Brand 7" class="brand-image" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import brand1Src from '../IMG/Brand_1.jpg'
import brand2Src from '../IMG/Brand_2.jpg'
import brand3Src from '../IMG/Brand_3.jpg'
import brand4Src from '../IMG/Brand_4.jpg'
import brand5Src from '../IMG/Brand_5.jpg'
import brand6Src from '../IMG/Brand_6.jpg'
import brand7Src from '../IMG/Brand_7.jpg'
</script>

<style scoped>
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
