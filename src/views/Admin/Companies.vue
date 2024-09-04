<template>
    <main>
          
          <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
              <div class="w-full mb-1">
                  <div class="mb-4">
                      <nav class="flex mb-5" aria-label="Breadcrumb">
                          <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                            <li class="inline-flex items-center">
                              <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                              </a>
                            </li>
                            <li>
                              <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">companies</a>
                              </div>
                            </li>
                            <li>
                              <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">List</span>
                              </div>
                            </li>
                          </ol>
                      </nav>
                      <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Companies</h1>
                  </div>
                  <div class="sm:flex">
                      <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                          <form class="lg:pr-3" action="#" method="GET">
                          <label for="companies-search" class="sr-only">Search</label>
                          <div class="relative mt-1 lg:w-64 xl:w-96">
                              <input type="text" name="email" id="companies-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for companies">
                          </div>
                          </form>
                       
                      </div>
                      <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                          <button  @click="showModal"  type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                              <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                              Add Company
                          </button>
                          <a href="#" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                              <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
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
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Address</th>
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Country</th>
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Email</th>
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">City</th>
                      <!-- <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Website</th> -->
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Phone</th>
                      <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <template v-if="!loading">
                      <tr v-for="company in companies" :key="company.id" class="">
                        <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                          <div class="text-base font-normal  text-gray-600 font-mono dark:text-white capitalize">{{ company.name }}</div>
                        </td>
                        <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.address }}</td>
                        <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.country }}</td>
                        <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.email }}</td>
                        <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.city }}</td>
                        <!-- <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.website }}</td> -->
                        <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ company.phone }}</td>
                        <td class="p-4 space-x-2 text-gray-500 whitespace-nowrap">
                          <v-icon @click="showEditCompanyModal(company)" name="fa-edit" scale="1" class="hover:text-blue-500" /> 
                          <v-icon @click="showDeleteCompanyModal(company.id)" name="ri-delete-bin-line" scale="1"  class="hover:text-red-500"/>
                         
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
                          <div class="w-1/2 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
                        </td>
                        <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                          <div class="w-full h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
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
              
               <!-- Modal Overlay -->
            <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 hidden" id="modal-overlay" ></div>
            
          </div>
    
       
           <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="add-company-modal">
                <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <!-- Modal content -->
                    <div class="relative">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold dark:text-white">Add New Company</h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <form @submit.prevent="addCompany">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input v-model="newCompany.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input v-model="newCompany.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input v-model="newCompany.phone" type="text" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1234567890" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input v-model="newCompany.address" type="text" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123 Main St" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input v-model="newCompany.city" type="text" id="city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="City" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input v-model="newCompany.country" type="text" id="country" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Country" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                            <input v-model="newCompany.website" type="url" id="website" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://company.com" />
                            </div>
                        </div>
                        <div class="items-center py-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                            Add Company
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

    
    
           
            <!-- Edit User Modal -->
            <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="edit-company-modal">
                <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <!-- Modal content -->
                    <div class="relative">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold dark:text-white">Edit Company</h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeEditCompanyModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <form @submit.prevent="updateCompany">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                            <input v-model="editedCompany.name" type="text" id="edit-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input v-model="editedCompany.email" type="email" id="edit-email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input v-model="editedCompany.phone" type="text" id="edit-phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1234567890" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input v-model="editedCompany.address" type="text" id="edit-address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="123 Main St" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input v-model="editedCompany.city" type="text" id="edit-city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="City" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input v-model="editedCompany.country" type="text" id="edit-country" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Country" required />
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                            <input v-model="editedCompany.website" type="url" id="edit-website" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="https://company.com" />
                            </div>
                        </div>
                        <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                            Update Company
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>

    
    
    
        
                <!-- Delete User Modal -->
                <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="delete-company-modal">
            <div class="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <!-- Modal content -->
                <div class="relative">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                    <h3 class="text-xl font-semibold dark:text-white">Delete Company</h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeDeleteCompanyModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-sm text-gray-900 dark:text-gray-400">Are you sure you want to delete this company? This action cannot be undone.</p>
                    <div class="flex justify-end space-x-4">
                    <button type="button" class="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" @click="closeDeleteCompanyModal">
                        Cancel
                    </button>
                    <button type="button" @click="confirmDeleteCompany" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                        Delete Company
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        
              </main>
      </template>
      
      <script setup>
      import { ref, onMounted } from 'vue'
      import axiosInstance from '@/axiosConfig'
      import { useToast } from 'vue-toast-notification'
      
      const companies = ref([])
      const newCompany = ref({ name: '', address: '', email: '', country: '', city: '', website: '', phone: '' })
      const editedCompany = ref({ id: null, name: '', address: '', email: '', country: '', city: '', website: '', phone: '' })
      const companyToDelete = ref(null)
      const loading = ref(false)
      const $toast = useToast()
      
      const fetchCompanies = async () => {
        loading.value = true
        try {
          const response = await axiosInstance.get('/companies/')
          companies.value = response.data
        } catch (error) {
          console.error('Error fetching companies:', error)
        } finally {
          loading.value = false
        }
      }
      
      const closeModal = () => {
        document.getElementById('add-company-modal').classList.add('hidden')
        document.getElementById('modal-overlay').classList.add('hidden')
      }
      
      const showModal = () => {
        document.getElementById('add-company-modal').classList.remove('hidden')
        document.getElementById('modal-overlay').classList.remove('hidden')
      }
      
      const closeEditCompanyModal = () => {
        document.getElementById('edit-company-modal').classList.add('hidden')
        document.getElementById('modal-overlay').classList.add('hidden')
      }
      
      const showEditCompanyModal = (company) => {
        editedCompany.value = { ...company }
        document.getElementById('edit-company-modal').classList.remove('hidden')
        document.getElementById('modal-overlay').classList.remove('hidden')
      }
      
      const closeDeleteCompanyModal = () => {
        document.getElementById('delete-company-modal').classList.add('hidden')
        document.getElementById('modal-overlay').classList.add('hidden')
      }
      
      const showDeleteCompanyModal = (companyId) => {
        companyToDelete.value = companyId
        document.getElementById('delete-company-modal').classList.remove('hidden')
        document.getElementById('modal-overlay').classList.remove('hidden')
      }
      
      const confirmDeleteCompany = async () => {
        loading.value = true
        try {
          await axiosInstance.delete(`/companies/${companyToDelete.value}/`)
          companies.value = companies.value.filter(company => company.id !== companyToDelete.value)
          $toast.success('Company deleted successfully.')
          closeDeleteCompanyModal()
        } catch (error) {
          console.error('Error deleting company:', error)
          $toast.error('Failed to delete company.')
        } finally {
          loading.value = false
        }
      }
      
      const addCompany = async () => {
        loading.value = true
        try {
          const response = await axiosInstance.post('/companies/', newCompany.value)
          companies.value.push(response.data)
          newCompany.value = { name: '', address: '', email: '', country: '', city: '', website: '', phone: '' }
          $toast.success('Company added successfully.')
          closeModal()
        } catch (error) {
          console.error('Error adding company:', error)
          $toast.error('Failed to add company.')
        } finally {
          loading.value = false
        }
      }
      
      const updateCompany = async () => {
        loading.value = true
        try {
          const response = await axiosInstance.put(`/companies/${editedCompany.value.id}/`, editedCompany.value)
          const index = companies.value.findIndex(company => company.id === editedCompany.value.id)
          if (index !== -1) {
            companies.value[index] = response.data
          }
          $toast.success('Company updated successfully.')
          closeEditCompanyModal()
        } catch (error) {
          console.error('Error updating company:', error)
          $toast.error('Failed to update company.')
        } finally {
          loading.value = false
        }
      }
      
      onMounted(() => {
        fetchCompanies()
      })
      </script>
      
    
      
      
      <style scoped>
      /* Add any custom styles here */
      </style>
      