<template>
    <div>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
          <div class="sm:flex">
            <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
              <h3 class="mb-4 lg:mb-0 text-lg font-semibold">Agents</h3>
            </div>
            <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
              <a @click="exportToExcel" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
                Excel
              </a>
              <a @click="exportToPDF" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
                PDF
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
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Email</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Phone</th>
                    <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Candidates</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <template v-if="!loading">
                    <tr v-for="agent in agents" :key="agent.id"  @click="selectAgent(agent)" class="hover:bg-gray-100 cursor-pointer">
                      <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <div class="text-base font-normal text-gray-600 font-mono dark:text-white capitalize">{{ agent.first_name }} {{ agent.last_name }}</div>
                      </td>
                      <td class="p-4 text-base font-normal text-gray-600 font-mono dark:text-gray-400">{{ agent.email }}</td>
                      <td class="p-4 text-base font-normal text-gray-600 font-mono dark:text-gray-400">{{ agent.phone_number }}</td>
                      <td class="p-4 text-lg font-normal text-green-600 font-mono dark:text-gray-400">{{ agent.total_applications }}</td>
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
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
 <script setup>
 import { jsPDF } from 'jspdf';
 import autoTable from 'jspdf-autotable';
 import * as XLSX from 'xlsx';
 
 const props = defineProps(['agents', 'loading']);
 const emit = defineEmits(['agent-clicked']);
 

 const selectAgent = (agent) => {
   emit('agent-clicked', agent); 
 };
 
 const exportToExcel = () => {
   const data = props.agents.map((agent, index) => ({
     '#': index + 1,
     'Agent Name': `${agent.first_name} ${agent.last_name}`,
     'Email': agent.email,
     'Phone Number': agent.phone_number,
     'Candidates': agent.total_applications
   }));
 
   const worksheet = XLSX.utils.json_to_sheet(data);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, 'Agents');
   XLSX.writeFile(workbook, 'agents_list.xlsx');
 }
 
 const exportToPDF = () => {
   const doc = new jsPDF();
   doc.setFont('helvetica', 'bolditalic');

   doc.setFontSize(18);
   doc.text('Agents List', 105, 20, { align: 'center' });

   doc.setLineDash([3, 1], 0);
   doc.rect(10, 10, 190, 277); 
 
   doc.setFontSize(40);
   doc.setTextColor(200, 200, 200);
   doc.text('ROYAL PRINCY AGENCY LIMITED', 105, 150, {
     align: 'center',
     angle: 45,
     maxWidth: 160 
   });
 
   doc.setFontSize(12);
   doc.setTextColor(0, 0, 0);
 
   // Add the table of agents
   const rows = props.agents.map((agent, index) => [
     index + 1, 
     `${agent.first_name} ${agent.last_name}`,
     agent.email,
     agent.phone_number,
     agent.total_applications
   ]);
 
   doc.autoTable({
     head: [['#', 'Agent Name', 'Email', 'Phone Number', 'Candidates']],
     body: rows,
     startY: 35,
     theme: 'grid',
     styles: {
       lineColor: [44, 62, 80],
       lineWidth: 0.1
     },
     margin: { top: 30 }
   });
 
   // Save the PDF
   doc.save('agents_list.pdf');
 }
 </script>
 

<style scoped>
/* Add any specific styles here */
</style>