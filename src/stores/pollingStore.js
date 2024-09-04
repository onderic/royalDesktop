import { defineStore } from 'pinia';

export const usePollingStore = defineStore('pollingStore', {
    state: () => ({
        isPolling: false,
        paymentSuccessData: null,
    }),
    actions: {
        startPolling() {
            this.isPolling = true;
        },
        stopPolling() {
            this.isPolling = false;
        },
        setPaymentSuccess(data) { 
            this.paymentSuccessData = data;
        },
        clearPaymentSuccess() {  
            this.paymentSuccessData = null;
        },
    },
});
