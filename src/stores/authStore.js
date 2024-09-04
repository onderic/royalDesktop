import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    access: localStorage.getItem('accessToken') || null,
    refresh: localStorage.getItem('refreshToken') || null,
    role: localStorage.getItem('userRole') || null,
  }),
  actions: {
    setTokens(access, refresh, role) {
      this.access = access;
      this.refresh = refresh;
      this.role = role;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('userRole', role);
    },
    async refresh() {
      try {
        console.log('Attempting to refresh token');

        const refreshToken = localStorage.getItem('refreshToken');
    
        const response = await axios.post('/token/refresh/', {
          refresh: refreshToken
        });

        const newAccess = response.data.access;
        this.access = newAccess;
        localStorage.setItem('accessToken', newAccess);

        console.log('Token refreshed successfully:', newAccess);

        return newAccess; 
      } catch (error) {
        console.error('Token refresh failed:', error);
        throw error; 
      }
    },
    
    logout() {
      this.access = null;
      this.refresh = null;
      this.role = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userRole');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.access,
    getUserRole: (state) => state.role,
  },
});
