<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const time = ref(120)
const interval = ref(null)

const startCountdown = () => {
  if (interval.value) clearInterval(interval.value)
  time.value = 120
  interval.value = setInterval(() => {
    if (time.value > 0) {
      time.value--
    } else {
      clearInterval(interval.value)
    }
  }, 1000)
}

const minutes = () => {
  return Math.floor(time.value / 60)
}

const seconds = () => {
  return time.value % 60
}

onMounted(() => {
  startCountdown()
})

onBeforeUnmount(() => {
  if (interval.value) clearInterval(interval.value)
})
</script>
<template>
  <AuthLayout>
    <div class="absolute-center m-auto p-8 border-radius box-animation h-80 overflow-hidden">
      <div class="flex flex-col items-center p-3">
        <h1 class="font-bold text-2xl mb-3 text-center item-slide-in animate-delay-1">
          Check Your Email
        </h1>
        <p class="font-semibold mb-3 text-center item-slide-in animate-delay-1">
          We have sent you an email with a link to reset your password. Please check the email
          address registered to your account.
        </p>
        <div class="text-2xl mb-3 item-slide-in animate-delay-2">
          {{ minutes() }}:{{ seconds() < 10 ? '0' + seconds() : seconds() }}
        </div>
        <div class="flex items-center gap-3 p-3 w-full item-slide-in animate-delay-3">
          <router-link :to="{ name: 'login' }" class="button-secondary">Login</router-link>
          <button v-if="time > 0" type="button" class="button-base-300 whitespace-nowrap" disabled>
            Resend Email
          </button>
          <button v-else type="button" class="button-primary whitespace-nowrap">
            Resend Email
          </button>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>
