<script setup lang="ts">
import { ref } from "vue"

const { submitForm } = useWordpress()

const form = ref({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: ""
})
const loading = ref(false)
const success = ref(false)
const errorMsg = ref("")

const submitFm = async () => {
    loading.value = true
    errorMsg.value = ""
    success.value = false

    try {
        const formData = new FormData()
        formData.append("first-name", form.value.firstName)
        formData.append("last-name", form.value.lastName)
        formData.append("company", form.value.company)
        formData.append("phone", form.value.phone)
        formData.append("email", form.value.email)
        formData.append("message", form.value.message)

        const response = await submitForm('bd48055');

    } catch (error) {
        
    }
}
</script>

<template>
    <section class="contact-wrapper">
      <div class="left">
        <h1>Get in Touch</h1>
        <p>
          We're always happy to hear from you...
        </p>
  
        <div class="contact-info">
          <div>
            <h3>Phone</h3>
            <p>+356 77354794</p>
          </div>
  
          <div>
            <h3>Email</h3>
            <p>info@ifoods.com.mt</p>
          </div>
        </div>
      </div>
  
      <form class="right" @submit.prevent="submitForm">
        <input v-model="form.firstName" placeholder="Name" required />
        <input v-model="form.lastName" placeholder="Surname" required />
        <input v-model="form.company" placeholder="Company" />
        <input v-model="form.phone" placeholder="Contact number" required />
        <input v-model="form.email" type="email" placeholder="Your Email" required />
        <textarea v-model="form.message" placeholder="Message" required />
  
        <button type="submit" :disabled="loading">
          {{ loading ? "Sending..." : "Submit" }}
        </button>
  
        <p v-if="success" class="success">Message sent successfully!</p>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </form>
    </section>
  </template>