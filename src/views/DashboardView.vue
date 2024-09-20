<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
</script>
<template>
  <DashboardLayout>
    <div class="text-3xl mb-3 item-slide-in">Dashboard</div>
    <div class="bg-white p-6 rounded-xl item-slide-in animate-delay-half">
      <a href="/login" class="text-black hover:text-primary">Anchor tag</a>
      <router-link :to="{ name: 'login' }" class="ml-3 text-black hover:text-primary"
        >Router Link Tag</router-link
      >
    </div>
  </DashboardLayout>
</template>
