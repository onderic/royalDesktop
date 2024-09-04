<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification';
import { useRouter } from 'vue-router';
import axiosInstance from '@/axiosConfig';
import currenciesData from '@/currencies.json';

const companyName = ref('')
const position = ref('')
const jobCategory = ref('')
const jobType = ref('')
const noOfVacancy = ref('')
const experience = ref('')
const postedDate = ref('')
const lastDateToApply = ref('')
const closeDate = ref('')
const gender = ref('')
const salaryFrom = ref('')
const salaryTo = ref('')
const city = ref('')
const currency = ref('')
const country = ref('')
const educationLevel = ref('')
const description = ref('')
const status = ref('active')


const newResponsibility = ref('')
const newExperience = ref('')
const responsibilities = ref([])
const requiredExperience = ref([])

const router = useRouter();
const toast = useToast();
const loading = ref(false); 

// Data from API
const companies = ref([])
const jobCategories = ref([])
const currencies = currenciesData.currencies;

function addResponsibility() {
  if (newResponsibility.value.trim() !== '') {
    responsibilities.value.push(newResponsibility.value.trim())
    newResponsibility.value = ''
  }
}

function removeResponsibility(index) {
  responsibilities.value.splice(index, 1)
}

function addExperience() {
  if (newExperience.value.trim() !== '') {
    requiredExperience.value.push(newExperience.value.trim())
    newExperience.value = ''
  }
}

function removeExperience(index) {
  requiredExperience.value.splice(index, 1)
}

const submitForm = async () => {
  const formData = {
    company: companyName.value,
    position: position.value,
    job_category: jobCategory.value,
    job_type: jobType.value,
    number_of_vacancies: noOfVacancy.value,
    experience_required: experience.value,
    posted_date: postedDate.value,
    last_date_to_apply: lastDateToApply.value,
    close_date: closeDate.value,
    gender_preference: gender.value,
    salary_from: salaryFrom.value,
    salary_to: salaryTo.value,
    city: city.value,
    currency: currency.value,
    country: country.value,
    education_level: educationLevel.value,
    description: description.value,
    responsibilities: responsibilities.value, 
    required_experience: requiredExperience.value, 
    status: status.value
  }

  loading.value = true; 

  try {
    const response = await axiosInstance.post('/job/', formData);
    console.log('Job submitted successfully:', response.data);
    toast.success('Job submitted successfully!');
    
    router.push('/admin/careers/manage');
    
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Error submitting form. Please try again.');
  } finally {
    loading.value = false; 
  }
}

const fetchCompaniesAndCategories = async () => {
  try {
    const companiesResponse = await axiosInstance.get('/companies/');
    const categoriesResponse = await axiosInstance.get('/categories');

    companies.value = companiesResponse.data;
    jobCategories.value = categoriesResponse.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


onMounted(fetchCompaniesAndCategories)
</script>





<template>
  <div>
    <div>
    

      <div class="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Add Job Application</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- Grid layout for larger screens and single-column layout for smaller screens -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Company Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Company <span class="text-red-500">*</span> </label>
              <select v-model="companyName" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Company</option>
                <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
              </select>
            </div>

            <!-- Position Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Position <span class="text-red-500">*</span> </label>
              <input v-model="position" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Job Category Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Job Category <span class="text-red-500">*</span> </label>
              <select v-model="jobCategory" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Job Category</option>
                <option v-for="category in jobCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </div>

            <!-- Job Type Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Job Type <span class="text-red-500">*</span> </label>
              <select v-model="jobType" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Job Type</option>
                <option value="full_time">Full-Time</option>
                <option value="part_time">Part-Time</option>
              </select>
            </div>

            <!-- Number of Vacancies Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Number of Vacancies <span class="text-red-500">*</span> </label>
              <input v-model="noOfVacancy" type="number" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Experience Required Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Experience Required <span class="text-red-500">*</span> </label>
              <input v-model="experience" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Posted Date Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Posted Date <span class="text-red-500">*</span> </label>
              <input v-model="postedDate" type="date" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Last Date To Apply Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Last Date To Apply <span class="text-red-500">*</span> </label>
              <input v-model="lastDateToApply" type="date" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Close Date Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Close Date <span class="text-red-500">*</span> </label>
              <input v-model="closeDate" type="date" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Gender Preference Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Gender Preference <span class="text-red-500">*</span> </label>
              <select v-model="gender" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Gender Preference</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="any">Any</option>
              </select>
            </div>

            <!-- Salary From Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Salary From <span class="text-red-500">*</span> </label>
              <div class="flex items-center">
                <input v-model="salaryFrom" type="number" step="0.01" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <!-- Salary To Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Salary To <span class="text-red-500">*</span> </label>
              <div class="flex items-center">
                <input v-model="salaryTo" type="number" step="0.01" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
              </div>
            </div>

            <!-- City Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">City <span class="text-red-500">*</span> </label>
              <input v-model="city" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- currency Field -->
            <div class="flex flex-col">
                <label class="block mb-1 font-medium text-gray-700">
                  Currency <span class="text-red-500">*</span>
                </label>
                <select v-model="currency" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option value="" disabled>Select a currency</option>
                  <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
                    {{ currency.name }} ({{ currency.code }})
                  </option>
                </select>
              </div>

            <!-- Country Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Country <span class="text-red-500">*</span> </label>
              <input v-model="country" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md" />
            </div>

            <!-- Education Level Field -->
            <div class="flex flex-col">
              <label class="block mb-1 font-medium text-gray-700">Education Level <span class="text-red-500">*</span> </label>
              <select v-model="educationLevel" required class="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="" disabled>Select Education Level</option>
                <option value="high_school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col">
            <label class="block mb-1 font-medium text-gray-700">Description <span class="text-red-500">*</span> </label>
            <textarea v-model="description" required class="w-full px-3 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
          </div>

            <div class="flex flex-col md:flex-row gap-4">
            <!-- Responsibilities -->
            <div class="flex-1">
              <label class="block mb-1 font-medium text-gray-700">Responsibilities</label>
              <div class="flex items-center gap-2 mb-2">
                <input v-model="newResponsibility" type="text" placeholder="Add a responsibility" class="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
                <button @click="addResponsibility" type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
              </div>
              <ul class="list-disc">
                <li v-for="(responsibility, index) in responsibilities" :key="index" class="flex items-center">
                  <span>{{ responsibility }}</span>
                  <v-icon  @click="removeResponsibility(index)" name="fc-cancel" scale="1" /> 
                </li>
              </ul>
            </div>

            <!-- Required Experience -->
            <div class="flex-1">
              <label class="block mb-1 font-medium text-gray-700">Required Experience</label>
              <div class="flex items-center gap-2 mb-2">
                <input v-model="newExperience" type="text" placeholder="Add required experience" class="flex-1 px-3 py-2 border border-gray-300 rounded-md" />
                <button @click="addExperience" type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
              </div>
              <ul class="list-disc">
                <li v-for="(experience, index) in requiredExperience" :key="index" class="flex items-center">
                  <span>{{ experience }}</span>
                  <v-icon  @click="removeExperience(index)" name="fc-cancel" scale="1" /> 
                </li>
              </ul>
            </div>
        </div>

          <!-- Submit Button -->
          <div class="flex justify-end gap-4">
            <button type="submit" class="bg-blue-500 text-white py-1 px-2 lg:rounded-md rounded-md hover:bg-blue-600">
                <v-icon v-if="loading" name="gi-spinning-blades" animation="spin" scale="1" /> 
               Submit
              </button>
          
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
