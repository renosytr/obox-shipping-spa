<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import imgNotFound from '@/assets/images/404-error.png'
</script>
<template>
  <AuthLayout>
    <div class="absolute-center m-auto p-8 border-radius box-animation h-[32rem] overflow-hidden">
      <div class="flex flex-col items-center p-3">
        <img
          :src="imgNotFound"
          class="mb-12 item-slide-in animate-delay-1"
          alt="404 Page Not Found"
        />
        <h1 class="font-bold text-2xl mb-3 text-center item-slide-in animate-delay-2">
          Looks like you’ve got lost….
        </h1>
        <router-link
          :to="{ name: 'dashboard' }"
          class="button-primary ml-1 item-slide-in animate-delay-3"
          >Back to Dashboard</router-link
        >
      </div>
    </div>
  </AuthLayout>
</template>
