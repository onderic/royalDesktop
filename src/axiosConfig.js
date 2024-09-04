import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';
import { useUIStore } from '@/stores/uiStore';
import { useToast } from 'vue-toast-notification';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.baseURL = 'https://backend.co.royalprinceagencyltd.co.ke/api/';



const axiosInstance = axios.create();


axiosInstance.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    if (authStore.access) {
      config.headers['Authorization'] = `Bearer ${String(authStore.access)}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    const uiStore = useUIStore();
    const toast = useToast(); 

    if (error.response && error.response.status === 401) {
      if (authStore.refresh) {
        try {
         
          const newAccessToken = await authStore.refresh();
        
          error.config.headers['Authorization'] = `Bearer ${String(newAccessToken)}`;
          return axiosInstance(error.config);
        } catch (refreshError) {
          authStore.logout(); 
          toast.info('Session expired. Please log in again.');
          uiStore.redirectToLogin();

          return Promise.reject(refreshError);
        }
      } else {
        authStore.logout();
        toast.info('Session expired. Please log in again.');
        uiStore.redirectToLogin();

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
