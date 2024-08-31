<script setup></script>
<template>
  <div class="absolute-center text-center">
    <div class="text-3xl mb-3">Dashboard</div>
    <a href="/login" class="text-black hover:text-primary">Anchor tag</a>
    <router-link :to="{ name: 'login' }" class="ml-3 text-black hover:text-primary"
      >Router Link Tag</router-link
    >
  </div>
</template>
