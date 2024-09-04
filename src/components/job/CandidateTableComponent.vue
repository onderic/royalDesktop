<template>

  <div class="overflow-y-auto relative">
    <!-- Payment Modal -->
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

    <Visa
      v-if="showVisaModal"
      :name="visaModalData.name"
      :applicationId="visaModalData.applicationId"
      @close="showVisaModal = false"
      @visaSuccess="handleVisaSuccess"
    />

    <div >
      <div v-if="pollingStore.isPolling" class="relative bg-purple-500 flex flex-col items-center px-4 py-2 rounded-lg shadow-md">
          <!-- Close Button with White Background -->
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


      <!-- Table Header -->
      <table class="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="application in filteredApplication" :key="application.id">
            <td class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono capitalize">{{ application.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">{{ application.phone }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono capitalize">{{ application.gender }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">{{ formatDate(application.created_at) }}</td>
            <td  v-if="columns.some((col) => col.key === 'status')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
              <span :class="statusClass(application.status)">
                {{ capitalizeStatus(application.status) }}
              </span>
            </td>
          

            <td v-if="columns.some((col) => col.key === 'InitialPay')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative">
              
              <div>
                <button
                  v-if="application.initial_fee === null"
                  @click="() => handleInitialPay(application.phone, application.name, application.id)"
                  class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-primary-800"
                >
                <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                 Deposit
                </button>

                <div v-else class="font-semibold text-gray-600">
                Ksh {{ application.initial_fee }}
                </div>
              </div>
            </td>

            <td v-if="columns.some((col) => col.key === 'visa')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative">
              <div v-if="application.visa_url">
               
                  <button @click="openPdfViewer(application.visa_url)"  type="button" class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">
                    <v-icon name="bi-eye" class="text-blue-500" scale="1" />
                    view
                </button>
               
                
              </div>
              <div v-else>
                <button @click="openVisaModal(application.name, application.id)" type="button" class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">
                  <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                  Upload
                </button>
              </div>
            </td>
            <td v-if="columns.some((col) => col.key === 'FinalPay')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative">
             
             <div>
              <button
                  v-if="application.final_fee === null"
                  @click="() => handleFinalPay(application.phone, application.name, application.id)"
                  class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-primary-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-primary-800"
                >
                <svg class="w-4 h-4 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Deposit
                </button>
                  <div v-else class="font-semibold text-gray-600">
                    Ksh {{ application.final_fee }}
               </div>
             </div>
           </td>

          

        

            <td v-if="columns.some((col) => col.key === 'medical_status')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative">
              <span
                :class="[
                  'px-2 py-1 rounded',
                  application.medical ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                ]"
              >
                {{ application.medical ? 'Yes' : 'No' }}
              </span>
            </td>
            <td v-if="columns.some((col) => col.key === 'report')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative">
              <div v-if="application.medical_report_url">
                <button @click="openPdfViewer(application.medical_report_url)">
                  <v-icon name="bi-eye" class="text-blue-500" scale="1.5" />
                </button>
              </div>
              <div v-else>
                <v-icon name="fa-eye-slash" class="text-blue-500 hover:cursor-pointer " scale="1.5" />
              </div>
            </td>
         
            <td  v-if="columns.some((col) => col.key === 'resume')" class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono">
              <button @click="openPdfViewer(application.resume)">
                <v-icon name="bi-eye" class="text-blue-500" scale="1.5" />
              </button>
            </td>
            <td
              v-if="columns.some((col) => col.key === 'action')"
              class="px-6 py-4 whitespace-nowrap text-base font-normal  text-gray-600 font-mono relative"
            >
              <!-- Action Button -->
              <button
                @click.stop="toggleDropdown(application.id)"
                class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
              >
                Action
              </button>

              <!-- Dropdown Menu -->
              <div
                v-if="activeDropdown === application.id"
                class="dropdown-menu absolute lg:right-48 right-24 py-0.5 top-0 h-16 space-y-1 w-24 bg-white border border-gray-200 rounded-lg shadow-sm z-50"
              >
                <label class="block px-2 text-xs cursor-pointer hover:bg-gray-100">
                  <input
                    type="checkbox"
                    :checked="application.status === 'active'"
                    @change="updateStatus(application.id, 'active', $event.target.checked)"
                    class="form-checkbox text-green-500"
                  />
                  <span class="ml-2">Active</span>
                </label>

                <label class="block px-2 text-xs cursor-pointer hover:bg-gray-100">
                  <input
                    type="checkbox"
                    :checked="application.status === 'hired'"
                    @change="updateStatus(application.id, 'hired', $event.target.checked)"
                    class="form-checkbox text-purple-500"
                  />
                  <span class="ml-2">Hired</span>
                </label>

                <label class="block px-2 text-xs cursor-pointer hover:bg-gray-100">
                  <input
                    type="checkbox"
                    :checked="application.status === 'rejected'"
                    @change="updateStatus(application.id, 'rejected', $event.target.checked)"
                    class="form-checkbox text-red-500"
                  />
                  <span class="ml-2">Rejected</span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- PDF Viewer Modal -->
    <Modal v-if="pdfUrl" @close="pdfUrl = null">
      <PdfViewer :pdfUrl="pdfUrl" />
    </Modal>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";
import axiosInstance from "@/axiosConfig";
import { useLoaderStore } from "@/stores/loader";
import { usePollingStore } from "@/stores/pollingStore";
import Modal from "./Modal.vue";
import PdfViewer from "./PdfViewer.vue";
import PaymentModal from "./PaymentModal.vue";
import Visa from "./Visa.vue";

const props = defineProps({
  applications: Array,
  columns: Array,
  jobId: String,
});

const emits = defineEmits(["update:statusCounts", "paymentSuccess"]);


const showPaymentModal = ref(false);

const paymentModalData = ref({
  title: "",
  name: "",
  phone: "",
  applicationId: "",
  onPayment: () => {},
});

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
  const application = localApplications.value.find(app => app.id === application_id);

  if (application) {
    application.visa_url = visa_url;
    localApplications.value = [...localApplications.value];
  }
};


const activeDropdown = ref(null);
const localApplications = ref([...props.applications]);

const pollingStore = usePollingStore();
const loaderStore = useLoaderStore();

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

  const application = localApplications.value.find(app => app.id === applicationId);
  
  if (application) {
    if (payment_type === 'initial_fee') {
      application.initial_fee = amount; 
    } else if (payment_type === 'final_fee') {
      application.final_fee = amount;
    }
    
    localApplications.value = [...localApplications.value];
  }
};


watch(() => pollingStore.paymentSuccessData, async (newData) => {
  if (newData) {
    console.log("Payment succeeded with data:", newData);
    const { application: applicationId, paymentType } = newData;

    const application = localApplications.value.find(app => app.id === applicationId);

    if (application) {
  
      if (paymentType === 'initial_fee') {
        application.initial_fee = newData.amount;
      } else if (paymentType === 'final_fee') {
        application.final_fee = newData.amount;
      }
      
      localApplications.value = [...localApplications.value];
    }

    // Clear payment success data
    pollingStore.clearPaymentSuccess(); 
  }
});
const pdfUrl = ref(null);

const openPdfViewer = (url) => {
  pdfUrl.value = url;
};

const capitalizeStatus = (status) => {
  return status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, " ");
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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const updateStatus = async (applicationId, newStatus, isChecked) => {
  if (!isChecked) return;

  loaderStore.showLoader();
  try {
    const response = await axiosInstance.put(`/applications/${applicationId}/`, {
      status: newStatus,
      job_id: props.jobId,
    });

    if (response.status === 200) {
      const applicationIndex = localApplications.value.findIndex((a) => a.id === applicationId);
      if (applicationIndex !== -1) {
        localApplications.value[applicationIndex].status = newStatus;
        if (filter.value !== newStatus) {
          localApplications.value.splice(applicationIndex, 1);
        }
      }

      emits("update:statusCounts", response.data.status_counts);
    } else {
      console.error("Failed to update status:", response.data.message);
    }
  } catch (error) {
    console.error("Error updating status:", error);
  } finally {
    loaderStore.hideLoader();
  }
};

watch(() => props.applications, (newApplications) => {
  localApplications.value = [...newApplications];
});

const filter = ref('');
const filteredApplication = computed(() => {
  if (filter.value) {
    return localApplications.value.filter(application => application.status === filter.value);
  }
  return localApplications.value;
});

const toggleDropdown = (applicationId) => {
  activeDropdown.value = activeDropdown.value === applicationId ? null : applicationId;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown-menu') && activeDropdown.value !== null) {
    activeDropdown.value = null;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
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


.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>


