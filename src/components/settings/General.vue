<template>
    <div>
        <div class="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 class="mb-4 text-xl font-semibold dark:text-white">Company Contact Information</h3>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="company_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
            <input v-model="form.company_name" type="text" name="company_name" id="company_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="address_line_1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 1</label>
            <input v-model="form.address_line_1" type="text" name="address_line_1" id="address_line_1" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123 Main St" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="address_line_2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 2</label>
            <input v-model="form.address_line_2" type="text" name="address_line_2" id="address_line_2" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Apt 4B" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
            <input v-model="form.city" type="text" name="city" id="city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="San Francisco" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input v-model="form.state" type="text" name="state" id="state" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="CA" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="postal_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
            <input v-model="form.postal_code" type="text" name="postal_code" id="postal_code" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="94105" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <input v-model="form.country" type="text" name="country" id="country" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="United States" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input v-model="form.phone_number" type="text" name="phone_number" id="phone_number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="+1-123-456-7890" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="form.email" type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="facebook_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook URL</label>
            <input v-model="form.facebook_url" type="url" name="facebook_url" id="facebook_url" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://facebook.com/yourcompany" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="twitter_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiktok URL</label>
            <input v-model="form.twitter_url" type="url" name="twitter_url" id="twitter_url" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://twitter.com/yourcompany" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="linkedin_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LinkedIn URL</label>
            <input v-model="form.linkedin_url" type="url" name="linkedin_url" id="linkedin_url" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://linkedin.com/company/yourcompany" />
          </div>
        </div>
        <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
            Update Information
        </button>
      </form>
    </div>
        <!-- password -->
        <Password />

       
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';
import Password from './Password.vue';

const form = ref({
  id: null, 
  company_name: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
  phone_number: '',
  email: '',
  facebook_url: '',
  twitter_url: '',
  linkedin_url: '',
  instagram_url: '',
  youtube_url: ''
});

const $toast = useToast();
const loading = ref(false);

const fetchCompanyData = async () => {
    try {
        const response = await axiosInstance.get('/company-info/');
        if (Array.isArray(response.data) && response.data.length > 0) {
            Object.assign(form.value, response.data[0]);
        }
    } catch (error) {
        console.error('Error fetching company data:', error);
        $toast.error('Error fetching company data.');
    }
};

const handleSubmit = async () => {
    loading.value = true;
    try {
        await axiosInstance.put(`/company-info/${form.value.id}/`, form.value);
        $toast.info('Company information updated successfully!');
    } catch (error) {
        console.error('Error updating company information:', error);
        $toast.error('Error updating company information.');
    } finally {
        loading.value = false;
    }
};

onMounted(fetchCompanyData);
</script>
