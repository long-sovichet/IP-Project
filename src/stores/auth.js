import { defineStore } from 'pinia';
import { ref } from 'vue';

const STATIC_EMAIL = 'user@example.com';
const STATIC_PASSWORD = 'password';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const register = async (email, password) => {
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      user.value = { email };
      isAuthenticated.value = true;
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const login = async (email, password) => {
    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
      user.value = { email };
      isAuthenticated.value = true;
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = async () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  return {
    user,
    isAuthenticated,
    register,
    login,
    logout
  };
});
