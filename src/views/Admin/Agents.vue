<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Agents Management</h1>

    <!-- Display Agents Table or Agent Details -->
    <div v-if="!selectedAgent">
      <AgentsTable 
        :agents="agents" 
        :loading="loading" 
        @agent-clicked="showAgentDetails" 
      />
    </div>

    <div v-else class="mt-4">
      <!-- Agent Details Cards -->
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 py-4">
        <!-- Card 1: Name -->
        <div class="bg-white border border-gray-200 rounded-sm p-6 flex-1">
          <h2 class="text-xl font-bold mb-2">Agent Name</h2>
          <p class="text-gray-700">{{ selectedAgent.first_name }} {{ selectedAgent.last_name }}</p>
        </div>

        <!-- Card 2: Email and Phone -->
        <div class="bg-white border border-gray-200 rounded-sm p-6 flex-1">
          <h2 class="text-xl font-bold mb-2">Contact Information</h2>
          <p class="text-gray-700">Email: {{ selectedAgent.email }}</p>
          <p class="text-gray-700">Phone: {{ selectedAgent.phone_number }}</p>
        </div>

        <!-- Card 3: Total Applications -->
        <div class="bg-white border border-gray-200 rounded-sm p-6 flex-1">
          <h2 class="text-xl font-bold mb-2">Total Applications</h2>
          <p class="text-blue-600 font-bold text-3xl">{{ selectedAgent.total_applications }}</p>
        </div>
      </div>

      <!-- Export Buttons -->
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
          <button @click="backToAgentsList" class="mt-0 text-sm text-blue-500 hover:cursor-pointer underline">Back to Agents List</button>
          <div class="sm:flex">
            <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
              <h3 class="mb-4 lg:mb-0 text-lg font-semibold">Agents Applications</h3>
            </div>
            <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
              <a @click="generateExcel" class="inline-flex hover:cursor-pointer items-center justify-center w-full sm:w-auto px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg>
                Excel
              </a>
              <a @click="generatePDF" class="inline-flex hover:cursor-pointer items-center justify-center w-full sm:w-auto px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg>
                PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Applications Table -->
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div v-if="selectedAgent.applications && selectedAgent.applications.length" class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Job Position</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Name</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Email</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Phone</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Gender</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Added On</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <template v-if="!loading">
                    <tr v-for="application in selectedAgent.applications" :key="application.job_info.id">
                      <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <div class="text-base font-normal text-gray-600 font-mono dark:text-white capitalize">{{ application.job_info.position }}</div>
                      </td>
                      <td class="p-4 text-base font-normal text-gray-600 font-mono dark:text-gray-400">{{ application.name }}</td>
                      <td class="p-4 text-base font-normal text-gray-600 font-mono dark:text-gray-400">{{ application.email }}</td>
                      <td class="p-4 text-base font-normal text-gray-600 font-mono dark:text-gray-400">{{ application.phone }}</td>
                      <td class="p-4 text-lg font-normal text-green-600 font-mono dark:text-gray-400 capitalize">{{ application.gender }}</td>
                      <td class="p-4 text-lg font-normal text-gray-600 font-mono dark:text-gray-400">
                        {{ formatDate(application.created_at) }}
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr v-for="n in 5" :key="n" class="hover:bg-gray-100 dark:hover:bg-gray-700">
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
                        <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                      </td>
                      <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                      </td>
                      <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else class="text-center p-4 bg-white border border-gray-200 rounded">
            <p class="text-gray-600">No applications available.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import axiosInstance from '@/axiosConfig';
  import AgentsTable from '@/components/Agent/AgentsTable.vue'; 
  import jsPDF from 'jspdf';
  import autoTable from 'jspdf-autotable';
  import * as XLSX from 'xlsx';
  
  const agents = ref([]);
  const loading = ref(true);
  const selectedAgent = ref(null);
  
  const fetchAgents = async () => {
    loading.value = true; 
    try {
      const response = await axiosInstance.get('agents/');
      agents.value = response.data;
    } catch (error) {
      console.error('Error fetching agents:', error); 
    } finally {
      loading.value = false;
    }
  };
  
  const showAgentDetails = async (agent) => {
    loading.value = true; 
    try {
      const response = await axiosInstance.get(`agent-applications/${agent.id}/`);
      selectedAgent.value = {
        ...agent, 
        applications: response.data 
      };
    } catch (error) {
      console.error('Error fetching agent details:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const backToAgentsList = () => {
    selectedAgent.value = null; 
    fetchAgents(); 
  };
  
  const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};


  const generatePDF = () => {
  const doc = new jsPDF();

    // Solid border around the page
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    doc.setLineDash([]);
    doc.setDrawColor(150, 150, 150); 
    doc.setLineWidth(0.3); 
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20); 

    // Add watermark
    doc.setFontSize(40);
    doc.setTextColor(200, 200, 200);
    doc.text('Royal Prince Agency', pageWidth / 2, pageHeight / 2, { align: 'center', angle: 45 });

    // Add title
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text('Agent Report Document', pageWidth / 2, 30, { align: 'center' });

    // Reset font size for details
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    
    const padding = 15; 
    const startY = 50;

    // Agent Info
    doc.setFontSize(10); 
    doc.text(`Name: ${selectedAgent.value.first_name} ${selectedAgent.value.last_name}`, padding, startY);
    doc.text(`Email: ${selectedAgent.value.email}`, padding, startY + 10);
    doc.text(`Phone Number: ${selectedAgent.value.phone_number}`, padding, startY + 20);
    doc.text(`Total Applications: ${selectedAgent.value.total_applications}`, padding, startY + 30);

    // Applications Table
    doc.setFontSize(12);
    doc.text(`Applications:`, padding, startY + 50); 

    // Create table
    autoTable(doc, {
        startY: startY + 60,
        head: [['Job Position', 'Name', 'Email', 'Phone', 'Gender']],
        body: selectedAgent.value.applications.map(app => [
        app.job_info.position,
        app.name,
        app.email,
        app.phone,
        app.gender
        ]),
        headStyles: {
        fillColor: [0, 153, 255], 
        textColor: [255, 255, 255],
        fontSize: 12,
        },
        styles: {
        halign: 'left',
        cellPadding: 3,
        fontSize: 10,
        lineColor: [150, 150, 150], 
        lineWidth: 0.3, 
        fillColor: [255, 255, 255],
        },
    });

    // Save the PDF
    doc.save('agent_details.pdf');
    };
  const generateExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws_data = [
      [
        'Job Position', 'Name', 'Email', 'Phone', 'Gender'
      ],
      ...selectedAgent.value.applications.map(app => [
        app.job_info.position,
        app.name,
        app.email,
        app.phone,
        app.gender
      ])
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');
    XLSX.writeFile(wb, 'agent_applications.xlsx');
  };
  
  onMounted(() => {
    fetchAgents();
  });
  </script>
  
  <style scoped>
  h1 {
    color: #333;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    text-align: left;
  }
  </style>
  