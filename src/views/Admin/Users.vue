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
                            <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
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
                  <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All users</h1>
              </div>
              <div class="sm:flex">
                  <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                      <form class="lg:pr-3" action="#" method="GET">
                      <label for="users-search" class="sr-only">Search</label>
                      <div class="relative mt-1 lg:w-64 xl:w-96">
                          <input type="text" name="email" id="users-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for users">
                      </div>
                      </form>
                   
                  </div>
                  <div class="flex items-center ml-auto space-x-2 sm:space-x-3">
                      <button  @click="showModal"  type="button" data-modal-toggle="add-user-modal" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                          <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                          Invite user
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
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">First Name</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">Last Name</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">Email</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">Phone Number</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">Status</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">User Type</th>
                        <th scope="col" class="p-4 text-xs font-bold text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      <template v-if="!loading">
                        <tr v-for="user in users" :key="user.id" class="">
                          <td class="p-4 text-sm font-semibold  text-gray-600 dark:text-gray-400">
                            <div class="text-base font-normal  text-gray-600 font-mono dark:text-white capitalize">{{ user.first_name }}</div>
                          </td>
                          <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ user.last_name }}</td>
                          <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ user.email }}</td>
                          <td class="p-4 text-base font-normal  text-gray-600 font-mono dark:text-gray-400">{{ user.phone_number }}</td>
                          <td class="p-4 text-base font-normal  text-gray-600 font-mono whitespace-nowrap dark:text-white">
                            <div class="flex items-center">
                              <div :class="{'h-2.5 w-2.5 rounded-full mr-2': true, 'bg-green-400': user.is_active, 'bg-red-400': !user.is_active}"></div>
                              {{ user.is_active ? 'Active' : 'Inactive' }}
                            </div>
                          </td>
                          <td class="p-4 text-base font-normal   font-mono text-green-500 whitespace-nowrap dark:text-white capitalize">{{ user.user_type }}</td>
                          <td class="p-4 space-x-2 whitespace-nowrap text-gray-800">
                            <v-icon @click="showEditUserModal(user)" name="fa-edit" scale="1" class="hover:text-blue-500" /> 
                            <v-icon @click="showDeleteUserModal(user.id)" name="ri-delete-bin-line" scale="1"  class="hover:text-red-500"/> 
                            
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

      <!-- Modal Overlay -->
      <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 hidden" id="modal-overlay" ></div>
        

       <!-- Add User Modal -->
        <div class="fixed inset-0 flex items-center justify-center z-50 hidden  " id="add-user-modal">
        <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <!-- Modal content -->
            <div class="relative">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">Add new user</h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeModal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <form @submit.prevent="addUser">
                    <div class="space-y-6">
                        <div>
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input v-model="newUser.first_name" type="text" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bonnie" required />
                        </div>

                        <div>
                            <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input v-model="newUser.last_name" type="text" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Onderi" required />
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input v-model="newUser.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required />
                        </div>

                        <div>
                            <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                            <input v-model="newUser.phone_number" type="text" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0798335657" required />
                        </div>

                        <div>
                            <label for="user-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Type</label>
                            <select v-model="newUser.user_type" id="user-type" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="agent">Agent</option>
                                <option value="admin">Admin</option>
                                <option value="doctor">Doctor</option>
                            </select>
                        </div>
                    </div>
                    <div class="items-center py-6 w-full border-t border-gray-200 rounded-b dark:border-gray-700">
                        <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                            Invite User
                        </button>
                    </div>
                </form>
            </div>

            </div>
        </div>
        </div>


        
        <!-- Edit User Modal -->
        <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="edit-user-modal">
        <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <!-- Modal content -->
            <div class="relative">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 class="text-xl font-semibold dark:text-white">Edit User</h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeEditUserModal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <form @submit.prevent="updateUser">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                    <label for="edit-first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input v-model="editedUser.first_name" type="text" id="edit-first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Bonnie" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                    <label for="edit-last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input v-model="editedUser.last_name" type="text" id="edit-last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Green" required />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                    <label for="edit-user-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Type</label>
                    <select v-model="editedUser.user_type" id="edit-user-type" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option value="agent">Agent</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                    </select>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                    <label for="edit-is-active" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <select v-model="editedUser.is_active" id="edit-is-active" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <option :value="true">Active</option>
                        <option :value="false">Inactive</option>
                    </select>
                    </div>
                </div>
                <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                        <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                        Update User
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>



    
            <!-- Delete User Modal -->
        <div class="fixed inset-0 flex items-center justify-center z-50 hidden overflow-x-hidden overflow-y-auto  bg-opacity-50" id="delete-user-modal">
            <div class="relative max-w-md w-full bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <!-- Modal content -->
                <div class="relative">
                    <!-- Modal header -->
                    <div class="flex justify-end p-2">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeDeleteUserModal">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 pt-0 text-center">
                        <svg class="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 class="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">Are you sure you want to delete this user?</h3>
                        <button type="button" @click="confirmDelete" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800">
                        <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                        Yes, I'm sure
                        </button>
                        <button type="button" @click="closeDeleteUserModal" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            No, cancel
                        </button>
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
  
  const users = ref([])
  const newUser = ref({ first_name: '', last_name: '', email: '', phone_number: '', user_type: 'agent' }) 
  const editedUser = ref({ id: null, first_name: '', last_name: '', user_type: 'agent', is_active: "" })
  const userToDelete = ref(null)
  const loading = ref(false)
  const $toast = useToast()
  
  // Fetch user data from the backend
  const fetchUsers = async () => {
    loading.value = true
    try {
      const response = await axiosInstance.get('/users/')
      users.value = response.data.results
    } catch (error) {
      console.error('Error fetching users:', error)
      $toast.error('Failed to fetch users.')
    } finally {
      loading.value = false
    }
  }
  
  const closeModal = () => {
    document.getElementById('add-user-modal').classList.add('hidden')
    document.getElementById('modal-overlay').classList.add('hidden')
  }
  
  const showModal = () => {
    document.getElementById('add-user-modal').classList.remove('hidden')
    document.getElementById('modal-overlay').classList.remove('hidden')
  }
  
  const closeEditUserModal = () => {
    document.getElementById('edit-user-modal').classList.add('hidden')
    document.getElementById('modal-overlay').classList.add('hidden')
  }
  
  const showEditUserModal = (user) => {
    editedUser.value = { ...user }
    document.getElementById('edit-user-modal').classList.remove('hidden')
    document.getElementById('modal-overlay').classList.remove('hidden')
  }
  
  const closeDeleteUserModal = () => {
    document.getElementById('delete-user-modal').classList.add('hidden')
    document.getElementById('modal-overlay').classList.add('hidden')
  }
  
  const showDeleteUserModal = (userId) => {
    userToDelete.value = userId
    document.getElementById('delete-user-modal').classList.remove('hidden')
    document.getElementById('modal-overlay').classList.remove('hidden')
  }
  
  const confirmDelete = async () => {
    loading.value = true
    try {
      await axiosInstance.delete(`/users/${userToDelete.value}/`)
      fetchUsers() 
      $toast.success('User deleted successfully.')
      closeDeleteUserModal()
    } catch (error) {
      console.error('Error deleting user:', error)
      $toast.error('Failed to delete user.')
    } finally {
      loading.value = false
    }
  }
  
  const addUser = async () => {
    loading.value = true
    try {
      // Only allow official user types (agent, admin, doctor)
      if (['agent', 'admin', 'doctor'].includes(newUser.value.user_type)) {
        await axiosInstance.post('/users/', newUser.value)
        newUser.value = { first_name: '', last_name: '', email: '', phone_number: '', user_type: 'agent' }
        fetchUsers()
        $toast.success('User added successfully.')
        closeModal()
      } else {
        $toast.error('Invalid user type. Only agent, admin, or doctor can be added.')
      }
    } catch (error) {
      console.error('Error adding user:', error)
      $toast.error('Failed to add user.')
    } finally {
      loading.value = false
    }
  }
  
  const updateUser = async () => {
    loading.value = true
    try {
      await axiosInstance.put(`/users/${editedUser.value.id}/`, {
        first_name: editedUser.value.first_name,
        last_name: editedUser.value.last_name,
        user_type: editedUser.value.user_type,
        is_active: editedUser.value.is_active
      })
      fetchUsers()
      $toast.success('User updated successfully.')
      closeEditUserModal()
    } catch (error) {
      console.error('Error updating user:', error)
      $toast.error('Failed to update user.')
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    fetchUsers()
  })
  </script>
  

  
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  