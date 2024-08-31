<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>
<template>
  <AuthLayout>
    <div class="flex flex-col items-center p-3">
      <h1 class="font-bold text-2xl mb-3 text-center">Check Your Email</h1>
      <p class="font-semibold mb-6 text-center">
        Please check the email address used for login to your account. We have sent you an email
        with a link to reset your password
      </p>
      <div class="flex items-center gap-3 p-3 w-full">
        <router-link :to="{ name: 'register' }" class="button-secondary">Login</router-link>
        <button type="button" class="button-primary whitespace-nowrap">Resend Email</button>
      </div>
    </div>
  </AuthLayout>
</template>
