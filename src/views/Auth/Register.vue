<template>

 <div>
  <div class="h-screen flex justify-center items-center my-16 lg:px-0 px-4 dark:bg-gray-900">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg border border-gray-300 dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white text-center">Create an Account</h2>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <!-- Phone Number Input -->
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input
            v-model="phone"
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400"
          />
          <span v-if="phoneError" class="text-red-500 text-sm mt-1">{{ phoneError }}</span>
        </div>
        <!-- Password Input -->
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-400 dark:focus:border-orange-400"
          />
          <span v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</span>
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
          <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" />
          Register
        </button>
        <div class="text-sm font-medium text-gray-900 dark:text-white text-center">
          Already have an account? 
          <router-link to="/auth/login">
            <a class="text-purple-600 hover:underline dark:text-purple-500">Login</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';

const phone = ref('');
const password = ref('');
const phoneError = ref('');
const passwordError = ref('');
const loading = ref(false); // Loading state
const $toast = useToast();
const router = useRouter();

const validatePhone = (phoneNumber) => {
  const phoneRegex = /^(07|01)\d{8}$/;
  return phoneRegex.test(phoneNumber);
};

const validatePassword = (password) => {
  const passwordRegex = /^\d{4}$/;
  return passwordRegex.test(password);
};

const handleSubmit = async () => {
  phoneError.value = '';
  passwordError.value = '';

  const isPhoneValid = validatePhone(phone.value);
  const isPasswordValid = validatePassword(password.value);

  if (!isPhoneValid) {
    phoneError.value = 'Phone number must be 10 digits long and start with 07 or 01.';
  }

  if (!isPasswordValid) {
    passwordError.value = 'Password must be exactly 4 numeric digits.';
  }

  if (isPhoneValid && isPasswordValid) {
    loading.value = true; // Start loading
    try {
      const response = await axios.post('/auth/register/', {
        phone_number: phone.value,
        password: password.value,
        user_type: "user",
      });
      $toast.info('Registration successful');
      router.push({ name: 'login' });
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;

        // Extract and display specific error messages for phone and password
        if (errorData.phone_number) {
          $toast.error(`Phone Error: ${errorData.phone_number.join(', ')}`);
        }
        if (errorData.password) {
          $toast.error(`Password Error: ${errorData.password.join(', ')}`);
        }

        // Display general error messages if available
        const generalError = errorData.detail || 'Registration failed';
        if (!errorData.phone_number && !errorData.password) {
          $toast.error(generalError);
        }
      } else {
        $toast.error('Registration failed');
      }
    } finally {
      loading.value = false; // Stop loading
    }
  }
};
</script>

<style scoped>
/* Scoped styles for this component */
</style>
