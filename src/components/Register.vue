<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <router-link to="/login">Already have an account? Login</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');

const handleRegister = async () => {
  try {
    await authStore.login(email.value, password.value);
    router.push('/');
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
