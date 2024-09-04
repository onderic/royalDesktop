<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="relative bg-white rounded-lg w-full max-w-sm p-6">
      <button class="absolute top-4 right-4 text-4xl text-gray-600 hover:text-gray-900" @click="$emit('close')">×</button>
      <div class=" mb-4">
        <h2 class="text-lg font-semibold">
          <span v-if="title === 'initial_fee'">Deposit Amount</span>
          <span v-else-if="title === 'final_fee'">Final Payment</span>
          <span v-else>{{ title }}</span> 
        </h2>
        <p class="text-xs">for, {{ name }}</p>
      </div>
      <div class="p-4">
        <div class="mb-4">
  
          <div class="flex items-center space-x-4 mt-1 border-b border-gray-300 pb-2">
            <div
              @click="paymentMethod = 'mpesa'"
              class="cursor-pointer"
              :class="{'text-blue-500 font-bold': paymentMethod === 'mpesa', '': paymentMethod !== 'mpesa'}"
            >
              Lipa Na Mpesa
            </div>
            <span class="text-gray-700">or</span>
            <div
              @click="paymentMethod = 'cash'"
              class="cursor-pointer"
              :class="{'text-blue-500 font-bold': paymentMethod === 'cash', '': paymentMethod !== 'cash'}"
            >
              Cash Payment
            </div>
          </div>
        </div>
        <form @submit.prevent="processPayment">
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              id="phone"
              type="text"
              v-model="phone"
              class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div class="mb-4">
            <label for="amount" class="block text-sm font-medium text-gray-700">Amount:</label>
            <input
              id="amount"
              type="number"
              v-model="fee"
              min="1"
              class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        
          <input type="hidden" v-model="paymentType" />
          <button type="submit" class="btn w-full" :disabled="loading">
            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" class="mr-2" />
            <span v-if="loading">Processing...</span>
            <span v-else>{{ paymentMethod === 'mpesa' ? 'Lipa Na Mpesa' : 'Pay in Cash' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';
import { usePollingStore } from '@/stores/pollingStore'; 

const props = defineProps({
  title: String,
  name: String,
  phone: String,
  applicationId: Number,
  onPayment: Function,
});

const emit = defineEmits(['close', 'paymentSuccess']);
const phone = ref(props.phone);
const fee = ref();
const paymentType = ref(props.title);
const paymentMethod = ref('mpesa'); 
const loading = ref(false);
const $toast = useToast();

watch(() => props.title, (newTitle) => {
  paymentType.value = newTitle;
});

const pollingStore = usePollingStore();

const close = () => {
  emit('close');
};

const processPayment = async () => {
  try {
    loading.value = true;

    let response;
    if (paymentMethod.value === 'mpesa') {
      response = await axiosInstance.post('/lipa_na_mpesa/', {
        applicationId: props.applicationId,
        phone: phone.value,
        amount: fee.value,
        paymentType: paymentType.value,
      });

      // Handle response for MPESA
      if (response.status === 200) {
        const { data } = response.data;
        const checkoutId = data.CheckoutRequestID; 
        const message = data.ResponseDescription;

        if (checkoutId) {
          close();
          $toast.success(message, { 
            duration: 5000, 
            pauseOnHover: true 
          });
          startPolling(checkoutId);
        } else {
          console.error('Checkout ID is undefined');
        }
      } else {
        $toast.error('Payment failed:', response.data);
      }
    } else {
      // Handle cash payment
      response = await axiosInstance.post('/cash_payment/', {
        application_id: props.applicationId, 
        amount: fee.value,
        payment_type: paymentType.value,
      });

      // Process cash payment response
      if (response.status === 200) {
        const { amount, payment_type, application } = response.data;
        $toast.success("Cash payment processed successfully.", { 
          duration: 5000, 
          pauseOnHover: true 
        });
        emit('paymentSuccess', { amount, payment_type, application });
        close();
      } else {
        $toast.error('Cash payment failed:', response.data);
      }
    }
  } catch (error) {
    $toast.error('Something went wrong', error.message);
  } finally {
    loading.value = false;
  }
};


const pollingInterval = ref(null);

const checkPaymentStatus = async (checkoutId) => {
  try {
    const response = await axiosInstance.get(`/payments/${checkoutId}/details/`);
    if (response.status === 200) {
      const { result_code, amount, result_description, payment_type, application } = response.data;

      if (result_code === 0) {
        pollingStore.setPaymentSuccess({ paymentType: payment_type, amount, application });
        $toast.success(result_description, { 
          duration: 6000, 
          pauseOnHover: true 
        });
        stopPolling();
      } else if (result_code > 0) {
        $toast.info(result_description, { 
          duration: 6000, 
          pauseOnHover: true 
        });
        stopPolling();
      }
    }
  } catch (error) {
    $toast.error("Error checking payment status:", error.message);
    stopPolling(); 
  }
};

const startPolling = (checkoutId) => {
  pollingStore.startPolling(); 
  pollingInterval.value = setInterval(() => checkPaymentStatus(checkoutId), 1000); 
};

const stopPolling = () => {
  clearInterval(pollingInterval.value);
  pollingStore.stopPolling();
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
