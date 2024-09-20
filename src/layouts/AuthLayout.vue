<script setup>
import LocaleButton from '@/components/LocaleButton.vue'
</script>
<template>
  <div class="bg-primary w-screen h-screen">
    <img src="@/assets/images/bg-shape.svg" class="w-full h-full" alt="background image" />
    <LocaleButton
      class="absolute top-5 right-5 item-slide-in animate-delay-5 bg-white rounded-xl"
      :is-full="false"
    ></LocaleButton>
    <slot></slot>
  </div>
</template>
