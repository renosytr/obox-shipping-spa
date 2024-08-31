<script setup>
</script>
<template>
  <div class="bg-primary w-screen h-screen">
    <img src="@/assets/images/bg-shape.svg" class="w-full h-full" alt="background image">
    <div class="absolute-center m-auto p-8 border-radius box-animation overflow-hidden">
      <slot></slot> 
    </div>
  </div>
</template>