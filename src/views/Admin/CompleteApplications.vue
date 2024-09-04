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
                    <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Hired</a>
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
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Hired Candidates</h1>
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
              <a  @click="generatePDF" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg>
                Export PDF
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
                  <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Positon</th>
                 
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
    </main>
  </template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import axiosInstance from '@/axiosConfig';
import jsPDF from 'jspdf';


const applications = ref([]);
const search = ref('');
const isLoading = ref(true);

let timeout = null;

const fetchApplications = async () => {
  isLoading.value = true;

  try {
    const response = await axiosInstance.get('admin/hired/applications/', {
      params: { search: search.value }
    });
    applications.value = response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
  } finally {
    isLoading.value = false;
  }
};

const generatePDF = () => {
  const pdf = new jsPDF('l', 'pt', 'a4');

  // Set title
  pdf.setFontSize(20);
  pdf.text("Royal Prince Agency Hired Applications Report", 40, 30);

  // Set table headers
  const headers = [
    "Name", "Phone", "Position",
    "Gender", "Deposit",
    "Final Amount"
  ];

  const startY = 60; 
  const columnWidth = 120; 
  const rowHeight = 40; 
  const pageHeight = pdf.internal.pageSize.height;

  // Draw outer border
  pdf.setDrawColor(128, 128, 128); 
  pdf.setLineWidth(2);
  const borderHeight = startY + (rowHeight * (applications.value.length + 1));
  pdf.rect(30, 40, columnWidth * headers.length + 20, borderHeight - 60); 

  // Draw table header
  pdf.setFontSize(12);
  pdf.setTextColor(255, 255, 255);
  pdf.setFillColor(0, 102, 204); // Header background color
  pdf.rect(40, startY - 10, columnWidth * headers.length, rowHeight, 'F'); 

  headers.forEach((header, index) => {
    pdf.text(header, 40 + columnWidth * index, startY);
  });

  // Draw table rows
  let rowIndex = 0;
  applications.value.forEach(application => {
    const rowY = startY + rowHeight + rowIndex * rowHeight;

    // Set alternating row colors
    pdf.setFillColor(rowIndex % 2 === 0 ? 240 : 255); 
    pdf.rect(40, rowY - 10, columnWidth * headers.length, rowHeight, 'F'); 

    pdf.setTextColor(0);

    pdf.text(application.name || 'N/A', 40, rowY);
    pdf.text(application.phone || 'N/A', 40 + columnWidth * 1, rowY);
    pdf.text(application.job_info.position || 'N/A', 40 + columnWidth * 2, rowY);
    pdf.text(application.gender || 'N/A', 40 + columnWidth * 3, rowY);
    pdf.text(application.initial_fee !== undefined ? application.initial_fee.toString() : 'N/A', 40 + columnWidth * 4, rowY);
    pdf.text(application.final_fee !== undefined ? application.final_fee.toString() : 'N/A', 40 + columnWidth * 5, rowY);

    rowIndex++;
  });

  pdf.save('applications_report.pdf');
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

