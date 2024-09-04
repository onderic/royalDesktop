<template>
    <main>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <!-- Breadcrumbs and Header -->
        <div class="w-full mb-1">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li class="inline-flex items-center">
                  <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
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
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Patients</a>
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
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Patients</h1>
          </div>
          <div class="sm:flex">
            <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <form class="lg:pr-3" action="#" method="GET">
                    <label for="patients-search" class="sr-only">Search</label>
                    <div class="relative mt-1 lg:w-64 xl:w-96">
                    <input v-model="search" type="text" id="patients-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search with name or phone">
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
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Gender</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Report Doc</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Medical Check Complete</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Remarks</th>
                   
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <template v-if="!loading">
                    <tr v-if="patients.length === 0">
                    <td colspan="8" class="p-4 text-center text-gray-500 dark:text-gray-400">No results found!</td>
                    </tr>
                    <tr v-for="patient in patients" :key="patient.id">
               
                
                    <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                       
                        <v-icon name="md-localhospital" class="w-10 h-10 rounded-full" />
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            <div class="text-base font-semibold text-gray-900 dark:text-white">{{ patient.application.name }}</div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ patient.application.email }}</div>
                        </div>
                    </td>
                    <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{{ patient.application.phone }}</td>
                    <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">{{ patient.application.gender }}</td>
                    <td class="p-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            <!-- Check if patient.medical_report is null or blank -->
                            <template v-if="!patient.medical_report || patient.medical_report.trim() === ''">
                              <v-icon name="fa-eye-slash" class="text-blue-500 hover:cursor-pointer " scale="1.5" />
                      
                            </template>
                            <template v-else>
                            <!-- Show the eye icon -->
                            <v-icon @click="openPdfViewer(patient.medical_report)" name="bi-eye" class="text-blue-500" scale="1.5" />
                            </template>
                        </td>
                        <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize">
                        <span
                          :class="[
                            'px-2 py-1 rounded',
                            patient.medical_check_complete ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                          ]"
                        >
                          {{ patient.medical_check_complete ? 'Yes' : 'No' }}
                        </span>
                      </td>

                      <td class="p-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs break-words">
                        {{ patient.remarks }}
                      </td>

                
                    <td class="p-4 text-white whitespace-nowrap">
                        <button type="button" @click="showEditUserModal(patient)" class="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-purple-600 px-3 py-2 text-sm font-me-900 hover:bg-purple-700 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800  dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto">
                          <svg class="w-5 h-5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Report
                        </button>
                      
                    </td>
                  </tr>
                  </template>
                  <template v-else>
                        <tr v-for="n in 7" :key="n" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                            <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                              <div class="bg-gray-300 h-4 w-32 rounded"></div>
                              <div class="bg-gray-300 h-3 w-24 rounded mt-1"></div>
                            </div>
                          </td>
                              <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                          <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                          <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                          <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-1/2 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                          <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                          <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            <div class="w-full h-8 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                          </td>
                        </tr>
                      </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 hidden" id="modal-overlay" ></div>
      <!-- Edit User Modal -->
        <!-- Edit User Modal -->
        <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="edit-user-modal">
        <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <!-- Modal content -->
            <div class="relative">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">Edit Patient Info</h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeEditUserModal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <form @submit.prevent="updatePatient">
                  <div class="flex-1 space-y-4">
                    <h2 class="text-xl font-semibold mb-4 font-serif">Upload Medical Report</h2>
                    <div>
                      <label class="block text-sm font-medium text-gray-700">Medical Report</label>
                      <div 
                        class="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
                        @click="triggerFileInput"
                        @dragover.prevent
                        @drop.prevent="handleFileDrop"
                      >
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <span class="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">Upload Medical Report</span>
                            <p class="pl-1 text-gray-700">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-600">PDF up to 10MB</p>
                        </div>
                        <input
                          id="medical-report-upload"
                          ref="fileInput"
                          type="file"
                          @change="handleFileUpload"
                          class="sr-only"
                        />
                        <div v-if="medicalReportFileName" class="mt-2 text-sm text-gray-700">
                          <p>Uploaded file: {{ medicalReportFileName }}</p>
                        </div>
                        <p v-if="errors.medical_report" class="text-red-500 text-sm">{{ errors.medical_report }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="medical_check_complete" class="block text-sm font-medium text-gray-700">Medical Check Complete</label>
                    <input v-model="patientData.medical_check_complete" type="checkbox" id="medical_check_complete" class="mt-1 block" />
                  </div>
                  <div class="mb-4">
                    <label for="remarks" class="block text-sm font-medium text-gray-700">Remarks</label>
                    <textarea v-model="patientData.remarks" id="remarks" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
                  </div>
                  
                  <div class="flex justify-end space-x-2">
                    <button type="button" @click="closeEditUserModal" class="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
                    <button type="submit" class="btn">
                      <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                      Save
                    </button>
                  </div>
                </form>
              </div>

            </div>
        </div>
        </div>

      <Modal v-if="pdfUrl" @close="pdfUrl = null">
      <PdfViewer :pdfUrl="pdfUrl" />
    </Modal>

    </main>
  </template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axiosInstance from '@/axiosConfig';
import { useToast } from 'vue-toast-notification';
import PdfViewer from '@/components/job/PdfViewer.vue';
import Modal from '@/components/job/Modal.vue';

const patients = ref([]);
const search = ref('');
const pdfUrl = ref(null);
const selectedPatientId = ref(null);
const editedUser = ref({ id: null });
const loading = ref(false);
const patientData = ref({
  applicationId: null,
  medical_report: null,
  medical_check_complete: false,
  remarks: ''
});

const medicalReportFileName = ref('');
const errors = ref({
  application: '',
  medical_report: '',
  medical_check_complete: '',
  remarks: ''
});
const toast = useToast();
let timeout = null;

const triggerFileInput = () => {
  document.getElementById('medical-report-upload').click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  processFile(file);
};

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0];
  processFile(file);
};

const openPdfViewer = (url) => {
  pdfUrl.value = url;
};

const processFile = (file) => {
  if (file) {
    if (file.type !== 'application/pdf') {
      errors.value.medical_report = 'Medical report must be a PDF file.';
      patientData.value.medical_report = null;
      medicalReportFileName.value = '';
    } else {
      patientData.value.medical_report = file;
      medicalReportFileName.value = file.name;
      errors.value.medical_report = '';
    }
  }
};

const fetchPatients = async () => {
  loading.value = true;
  try {
    const response = await axiosInstance.get('doctor/patients/', {
      params: { search: search.value }
    });
    patients.value = response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
  } finally {
    loading.value = false;
  }
};

const updatePatient = async () => {
  loading.value = true; // Start loading
  const formData = new FormData();

  formData.append('application', patientData.value.applicationId); 
  formData.append('medical_check_complete', patientData.value.medical_check_complete);
  formData.append('remarks', patientData.value.remarks);

  if (patientData.value.medical_report) {
    formData.append('medical_report', patientData.value.medical_report);
  }

  try {
    await axiosInstance.put(`doctor/patients/${selectedPatientId.value}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    fetchPatients();
    toast.success('Patient report updated successfully');
    
    // Clear the form data after updating
    clearPatientData();
    
    closeEditUserModal();
  } catch (error) {
    console.error('Error updating patient:', error);
    toast.error('Failed to update patient');
    handleError(error.response.data);
  } finally {
    loading.value = false; // Stop loading
  }
};

const clearPatientData = () => {
  patientData.value = {
    applicationId: null,
    medical_report: null,
    medical_check_complete: false,
    remarks: ''
  };
  medicalReportFileName.value = '';
  errors.value = {
    application: '',
    medical_report: '',
    medical_check_complete: '',
    remarks: ''
  };
};

const closeEditUserModal = () => {
  document.getElementById('edit-user-modal').classList.add('hidden');
  document.getElementById('modal-overlay').classList.add('hidden');
};

const showEditUserModal = (patient) => {
  editedUser.value = { ...patient };
  selectedPatientId.value = patient.id;

  // Populate patientData with existing values
  patientData.value = {
    applicationId: patient.application.id, 
    medical_report: patient.medical_report || '',
    medical_check_complete: patient.medical_check_complete || false,
    remarks: patient.remarks || ''
  };

  // Open the edit user modal
  document.getElementById('edit-user-modal').classList.remove('hidden');
  document.getElementById('modal-overlay').classList.remove('hidden');
};

const handleError = (errorData) => {
  errors.value = errorData;
};

watch(search, (newSearch) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fetchPatients();
  }, 200);
});

onMounted(() => {
  fetchPatients();
});
</script>

