import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
  state: () => ({
    router: null,
    iconsLoaded: false,  
  }),
  actions: {
    init(router) {
      this.router = router;
    },
    redirectToLogin() {
      if (this.router) {
        this.router.push('/auth/login');
      }
    },
    setIconsLoaded() {
      this.iconsLoaded = true;  
    },
  },
});
