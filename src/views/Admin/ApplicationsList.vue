<template>
    <main>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <!-- Breadcrumbs and Header -->
        <div class="w-full mb-1">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                  <a href="/admin/dashboard" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Applications</a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">List</span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Applications</h1>
          </div>
          <div class="sm:flex">
            <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <form class="lg:pr-3" action="#" method="GET">
                    <label for="applications-search" class="sr-only">Search</label>
                    <div class="relative mt-1 lg:w-64 xl:w-96">
                    <input v-model="search" type="text" id="applications-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search with name or phone">
                    </div>
                </form>
            </div>
            <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
              <a href="#" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg>
                Export
              </a>
            </div>
          </div>
          <div v-if="pollingStore.isPolling" class="relative bg-purple-500 flex flex-col items-center px-4 py-2 rounded-lg shadow-md my-4">

          <button @click="stopPolling" class="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-gray-600 hover:text-gray-800">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Waiting Text -->
          <h1 class="font-serif text-white text-lg">Waiting for the user to complete transaction...</h1>
          
          <!-- Loader -->
          <div class="loader mt-4"></div>
        </div>

        </div>
      </div>
      
      <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden shadow">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
              <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Name</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Phone</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Positon</th>
                  <!-- <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Company</th> -->
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Resume</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Status</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Gender</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Medical</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Medical Report</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Deposit</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Final Amount</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Visa</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Visa Doc</th>
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                <!-- Skeleton Loader Rows -->
                <tr v-if="isLoading">
                  <td colspan="13">
                    <div v-for="index in 10" :key="index" class="flex justify-between p-4 space-x-3">
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                      <div class="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                    </div>
                  </td>
                </tr>
                <!-- No Results Found -->
                <tr v-if="!isLoading && applications.length === 0">
                  <td colspan="14" class="p-4 text-center text-gray-500 dark:text-gray-400">No results found!</td>
                </tr>
                <tr v-for="application in applications" :key="application.id" v-else>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">{{ application.name }}</td>
                
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">{{ application.phone }}</td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                  <router-link :to="{ name: 'jobDetail', params: { id: application.job_info.id } }" class="text-blue-500 hover:underline">
                    {{ application.job_info.position }}
                  </router-link>
                </td>

                <!-- <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">{{ application.job_info.company_info.name }}</td> -->
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <template v-if="application.resume">
                      <v-icon @click="openPdfViewer(application.resume)" name="bi-eye" class="text-blue-500 cursor-pointer" scale="1.5" />
                    </template>
                    <template v-else>
                      <v-icon name="fa-eye-slash" class="text-gray-500" scale="1.5" />
                    </template>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono capitalize">
                    <span :class="statusClass(application.status)">
                      {{ application.status }}
                    </span>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono capitalize">{{ application.gender }}</td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <span :class="[
                      'px-2 py-1 rounded',
                      application.medical ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                    ]">
                      {{ application.medical ? 'Yes' : 'No' }}
                    </span>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <template v-if="application.medical_report_url">
                      <v-icon @click="openPdfViewer(application.medical_report_url)" name="bi-eye" class="text-blue-500 cursor-pointer" scale="1.5" />
                    </template>
                    <template v-else>
                      <v-icon name="fa-eye-slash" class="text-gray-500" scale="1.5" />
                    </template>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <div v-if="application.initial_fee">
                      Ksh {{ application.initial_fee }}
                    </div>
                    <div v-else>
                      <button
                      v-if="application.initial_fee === null"
                      @click="() => handleInitialPay(application.phone, application.name, application.id)"
                     class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                    >
                    <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Deposit
                    </button>
                    </div>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <div v-if="application.final_fee">
                      Ksh {{ application.final_fee }}
                    </div>
                    <div v-else>
                      <button
                      v-if="application.final_fee === null"
                      @click="() => handleFinalPay(application.phone, application.name, application.id)"
                      class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-primary-800"
                    >
                    <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Final
                    </button>
                    </div>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <span :class="[
                      'px-2 py-1 rounded',
                      application.visa ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                    ]">
                      {{ application.visa ? 'Yes' : 'No' }}
                    </span>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <template v-if="application.visa_url">
                      <v-icon @click="openPdfViewer(application.visa_url)" name="bi-eye" class="text-blue-500 cursor-pointer" scale="1.5" />
                    </template>
                    <template v-else>
                      <button @click="openVisaModal(application.name, application.id)" type="button"  class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">
                        <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Upload
                      </button>
                    </template>
                  </td>
                  <td class="p-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
                    <v-icon name="bi-three-dots-vertical" class="text-gray-500" scale="1.5" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


    <Visa
      v-if="showVisaModal"
      :name="visaModalData.name"
      :applicationId="visaModalData.applicationId"
      @close="showVisaModal = false"
      @visaSuccess="handleVisaSuccess"
    />


      <Modal v-if="pdfUrl" @close="pdfUrl = null">
      <PdfViewer :pdfUrl="pdfUrl" />
    </Modal>

    <PaymentModal
      v-if="showPaymentModal"
      :title="paymentModalData.title"
      :name="paymentModalData.name"
      :phone="paymentModalData.phone"
      :applicationId="paymentModalData.applicationId"
      :onPayment="paymentModalData.onPayment"
      @close="showPaymentModal = false"
      @paymentSuccess="handlePaymentSuccess"
    />

    </main>
  </template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';
import PdfViewer from '@/components/job/PdfViewer.vue';
import Modal from '@/components/job/Modal.vue';
import Visa from '@/components/job/Visa.vue';
import PaymentModal from "@/components/job/PaymentModal.vue";
import { usePollingStore } from "@/stores/pollingStore";

const applications = ref([]);
const search = ref('');
const pdfUrl = ref(null);
const isLoading = ref(true);
const pollingStore = usePollingStore();
const showPaymentModal = ref(false);

const toast = useToast();
let timeout = null;

const paymentModalData = ref({
  title: "",
  name: "",
  phone: "",
  applicationId: "",
  onPayment: () => {},
});


function stopPolling() {
  pollingStore.stopPolling() 
}



const openPaymentModal = (phone, title, name, applicationId, onPayment) => {
  paymentModalData.value = { phone, title, name, applicationId, onPayment };
  showPaymentModal.value = true;
};

const handleInitialPay = (phone, name, applicationId) => {
  openPaymentModal(phone, "initial_fee", name, applicationId, () => pay(applicationId));
};

const handleFinalPay = (phone, name, applicationId) => {
  openPaymentModal(phone, "final_fee", name, applicationId, () => payFinal(applicationId));
};


const handlePaymentSuccess = (paymentData) => {
  console.log("Payment succeeded with data:", paymentData);
  const { application: applicationId, payment_type, amount } = paymentData;

  const application = applications.value.find(app => app.id === applicationId);
  
  if (application) {
    if (payment_type === 'initial_fee') {
      application.initial_fee = amount; 
    } else if (payment_type === 'final_fee') {
      application.final_fee = amount;
    }
    
    applications.value = [...applications.value];
  }
};



watch(() => pollingStore.paymentSuccessData, async (newData) => {
  if (newData) {
    console.log("Payment succeeded with data:", newData);
    const { application: applicationId, paymentType } = newData;

    const application = applications.value.find(app => app.id === applicationId);
    if (application) {
      if (paymentType === 'initial_fee') {
        application.initial_fee = newData.amount;
      } else if (paymentType === 'final_fee') {
        application.final_fee = newData.amount;
      }
      
      applications.value = [...applications.value];
    }
    pollingStore.clearPaymentSuccess(); 
  }
});

const openPdfViewer = (url) => {
  pdfUrl.value = url;
};

const visaModalData = ref({
  name: "",
  applicationId: null,
});

const showVisaModal = ref(false);

const openVisaModal = (name, applicationId) => {
  visaModalData.value = { name, applicationId };
  showVisaModal.value = true;
};

const handleVisaSuccess = (visaData) => {
  console.log("Visa uploaded successfully with data:", visaData);
  const { visa_url, application_id } = visaData;
  const application = applications.value.find(app => app.id === application_id);
  if (application) {
    application.visa = true;
    application.visa_url = visa_url;
    applications.value = [...applications.value];
  }
};


const fetchApplications = async () => {
  isLoading.value = true;

  try {
    const response = await axiosInstance.get('admin/applications/', {
      params: { search: search.value }
    });
    applications.value = response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
  } finally {
    isLoading.value = false;
  }
};

const statusClass = (status) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs";
    case "reviewed":
      return "bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs";
    case "contacting":
      return "bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs";
    case "hired":
      return "bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs";
    case "rejected":
      return "bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs";
    default:
      return "text-gray-600";
  }
};

watch(search, (newSearch) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fetchApplications();
  }, 200);
});

onMounted(() => {
  fetchApplications();
});
</script>

<style scoped>

/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  height: 20px;
  border-radius: 20px;
  background:
   radial-gradient(farthest-side,orange 98%,#0000) left/20px 20px no-repeat
   white;
  animation: l2 1s infinite linear;
}
@keyframes l2 {
    50% {background-position:right }
}

</style>