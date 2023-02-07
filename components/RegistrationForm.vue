<template>
  <div
    class="container flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Sign up
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                @input="updateField('email', $event.target.value)"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                @input="updateField('password', $event.target.value)"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                @change="updateRememberMe"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900"
                >Remember me</label
              >
            </div>
          </div>

          <div>
            <button
              :disabled="isLoading"
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span v-if="isLoading">Loading...</span>
              <span v-else>Sign up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      rememberMe: false,
      isLoading: false,
    }
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data) {
      this.email = data.email
      this.password = data.password
      this.rememberMe = data.rememberMe
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.isLoading = true

        await axios.post('https://jsonplaceholder.typicode.com/users', {
          email: this.email,
          password: this.password,
        })

        if (this.rememberMe) {
          localStorage.setItem(
            'userData',
            JSON.stringify({
              email: this.email,
              password: this.password,
              rememberMe: this.rememberMe,
            })
          )
        } else {
          localStorage.removeItem('userData')
        }

        // Push a GTM event for successful registration
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'user-registration',
          status: 'success',
        })

        this.isLoading = false

        alert('Signed up Successfully')
      } catch (error) {
        console.error(error)

        // Push a GTM event for failed registration
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'user-registration',
          status: 'failed',
          error: error.message,
        })
      }
    },
    updateField(field, value) {
      this[field] = value
    },
    updateRememberMe(event) {
      this.rememberMe = event.target.checked
    },
  },
}
</script>

<style scoped>
.container {
  width: 450px;
}
</style>
