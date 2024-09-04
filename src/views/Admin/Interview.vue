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
                                <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Categories</a>
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
                      <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Categories</h1>
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
                        <button @click="showModal" type="button" class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                            </svg>
                            Add Category
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
                        <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all" class="sr-only">checkbox</label>
                        </div>
                        </th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Id</th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Name</th>
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Created On</th>
                        
                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">Actions</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr v-for="category in categories" :key="category.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input :id="'checkbox-' + category.id" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                            <label :for="'checkbox-' + category.id" class="sr-only">checkbox</label>
                        </div>
                        </td>
                        <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        <div class="text-base font-semibold text-gray-900 dark:text-white capitalize">{{ category.id }}</div>
                        </td>
                        <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ category.name }}</td>
                        <td class="p-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ category.created_at }}</td>
                       
                        <td class="p-4 space-x-2 whitespace-nowrap">
                        <button type="button" @click="showEditCategoryModal(category)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                            </svg>
                            Edit
                        </button>
                        <button type="button" @click="showDeleteCategoryModal(category.id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            Delete
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

                  </div>
              </div>
              
          </div>
    
           <!-- Modal Overlay -->
           <div class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 hidden" id="modal-overlay"></div>
       
           <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="add-category-modal">
                <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <!-- Modal content -->
                    <div class="relative">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold dark:text-white">Add New Category</h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <form @submit.prevent="addCategory">
                        <div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                            <input v-model="newCategory.name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
                            </div>
                            
                        </div>
                        <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
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
            <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="edit-category-modal">
                <div class="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <!-- Modal content -->
                    <div class="relative">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold dark:text-white">Edit Category</h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeEditCategoryModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <form @submit.prevent="updateCategory">
                        <div>
                            <div class="col-span-6 sm:col-span-3">
                            <label for="edit-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
                            <input v-model="editedCategory.name" type="text" id="edit-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Company Name" required />
                            </div>
                          
                        </div>
                        <div class="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">
                            <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                            Update Category
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>    
    
    
        
                <!-- Delete User Modal -->
                <div class="fixed inset-0 flex items-center justify-center z-50 hidden" id="delete-category-modal">
            <div class="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <!-- Modal content -->
                <div class="relative">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                    <h3 class="text-xl font-semibold dark:text-white">Delete Category</h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" @click="closeDeleteCategoryModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <p class="text-sm text-gray-900 dark:text-gray-400">Are you sure you want to delete this category? This action cannot be undone.</p>
                    <div class="flex justify-end space-x-4">
                    <button type="button" class="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" @click="closeDeleteCategoryModal">
                        Cancel
                    </button>
                    <button type="button" @click="confirmDeleteCategory" class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
                        Delete Category
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

const categories = ref([])
const newCategory = ref({ name: '' })
const editedCategory = ref({ id: null, name: '' })
const categoryToDelete = ref(null)
const loading = ref(false)
const $toast = useToast()

const fetchCategories = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.get('/categories/')
    categories.value = response.data
  } catch (error) {
    console.error('Error fetching categories:', error)
    $toast.error('Failed to fetch categories.')
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  document.getElementById('add-category-modal').classList.add('hidden')
  document.getElementById('modal-overlay').classList.add('hidden')
}

const showModal = () => {
  document.getElementById('add-category-modal').classList.remove('hidden')
  document.getElementById('modal-overlay').classList.remove('hidden')
}

const closeEditCategoryModal = () => {
  document.getElementById('edit-category-modal').classList.add('hidden')
  document.getElementById('modal-overlay').classList.add('hidden')
}

const showEditCategoryModal = (category) => {
  editedCategory.value = { ...category }
  document.getElementById('edit-category-modal').classList.remove('hidden')
  document.getElementById('modal-overlay').classList.remove('hidden')
}

const closeDeleteCategoryModal = () => {
  document.getElementById('delete-category-modal').classList.add('hidden')
  document.getElementById('modal-overlay').classList.add('hidden')
}

const showDeleteCategoryModal = (categoryId) => {
  categoryToDelete.value = categoryId
  document.getElementById('delete-category-modal').classList.remove('hidden')
  document.getElementById('modal-overlay').classList.remove('hidden')
}

const confirmDeleteCategory = async () => {
  loading.value = true
  try {
    await axiosInstance.delete(`/categories/${categoryToDelete.value}/`)
    categories.value = categories.value.filter(category => category.id !== categoryToDelete.value)
    $toast.success('Category deleted successfully.')
    closeDeleteCategoryModal()
  } catch (error) {
    console.error('Error deleting category:', error)
    $toast.error('Failed to delete category.')
  } finally {
    loading.value = false
  }
}

const addCategory = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.post('/categories/', newCategory.value)
    categories.value.push(response.data)
    newCategory.value = { name: '' }
    $toast.success('Category added successfully.')
    closeModal()
  } catch (error) {
    console.error('Error adding category:', error)
    $toast.error('Failed to add category.')
  } finally {
    loading.value = false
  }
}

const updateCategory = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.put(`/categories/${editedCategory.value.id}/`, editedCategory.value)
    const index = categories.value.findIndex(category => category.id === editedCategory.value.id)
    if (index !== -1) {
      categories.value[index] = response.data
    }
    $toast.success('Category updated successfully.')
    closeEditCategoryModal()
  } catch (error) {
    console.error('Error updating category:', error)
    $toast.error('Failed to update category.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCategories()
})
</script>
