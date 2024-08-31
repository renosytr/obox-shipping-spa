<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>
<template>
  <AuthLayout>
    <h1 class="font-bold text-2xl mb-1 text-center item-slide-in animate-delay-1">
      Create an Account
    </h1>
    <p class="font-semibold mb-5 text-center item-slide-in animate-delay-1">
      Create a account to continue using this app
    </p>
    <form class="max-w-sm mx-auto">
      <div class="mb-5 item-slide-in animate-delay-2">
        <label for="email" class="font-semibold text-neutral text-left">Email Address</label>
        <input type="email" placeholder="email" class="input input-bordered w-full mt-2" />
      </div>
      <div class="mb-5 item-slide-in animate-delay-2">
        <label for="username" class="font-semibold text-neutral text-left">Username</label>
        <input type="text" placeholder="username" class="input input-bordered w-full mt-2" />
      </div>
      <div class="mb-5 item-slide-in animate-delay-2">
        <label for="password" class="font-semibold text-neutral text-left">Password</label>
        <input
          type="password"
          placeholder="password"
          class="input input-bordered w-full mt-2 tracking-[0.5rem] placeholder:tracking-normal"
        />
      </div>
      <div class="flex items-start mb-3 item-slide-in animate-delay-2">
        <div class="flex items-center">
          <input
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-neutral focus:ring-3 focus:ring-neutral mt-1"
            required
          />
        </div>
        <label for="tnc" class="font-semibold text-neutral ml-2"
          >I accept terms and conditions</label
        >
      </div>
      <button type="submit" class="button-primary mb-3 item-slide-in animate-delay-3">
        Sign Up
      </button>
      <p class="font-semibold text-center item-slide-in animate-delay-4">
        <span>Already have an account? </span>
        <router-link :to="{ name: 'login' }" class="link-primary ml-1">Login</router-link>
      </p>
    </form>
  </AuthLayout>
</template>
