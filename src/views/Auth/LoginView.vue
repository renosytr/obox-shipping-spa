<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import { RecaptchaV2 } from "vue3-recaptcha-v2";

const onSubmit = async () => {
  console.log('Form submission');
};

const handleWidgetId = (widgetId) => {
  console.log("Widget ID: ", widgetId);
};

const handleErrorCalback = () => {
  console.log("Error callback");
};

const handleExpiredCallback = () => {
  console.log("Expired callback");
};

const handleLoadCallback = (response) => {
  console.log("Load callback", response);
};
</script>
<template>
  <AuthLayout>
    <h1 class="font-bold text-2xl mb-1 text-center item-slide-in animate-delay-1">Login to Account</h1>
    <p class="font-semibold mb-5 text-center item-slide-in animate-delay-1">Please enter your email and password to continue</p>
    <form class="mx-auto" @submit.prevent="onSubmit">
      <div class="mb-5 item-slide-in animate-delay-2">
        <label for="email" class="font-semibold text-neutral text-left">Email Address</label>
        <input type="email" placeholder="email" class="input input-bordered w-full mt-2"/>
      </div>
      <div class="mb-5 item-slide-in animate-delay-2">
        <div  class="flex justify-between">
          <label for="password" class="font-semibold text-neutral text-left">Password</label>
          <router-link :to="{ name: 'password-reset-request' }" class="text-neutral hover:text-secondary">Forgot Password?</router-link>
        </div>
        <input type="password" placeholder="password" class="input input-bordered w-full mt-2 tracking-[0.5rem] placeholder:tracking-normal"/>
      </div>
      <div class="mb-5 item-slide-in animate-delay-2">
        <RecaptchaV2
          @widget-id="handleWidgetId"
          @error-callback="handleErrorCalback"
          @expired-callback="handleExpiredCallback"
          @load-callback="handleLoadCallback"
        />
      </div>
      <div class="flex items-start mb-3 item-slide-in animate-delay-3">
        <div class="flex items-center">
          <input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-neutral focus:ring-3 focus:ring-neutral mt-1"/>
        </div>
        <label for="remember" class="font-semibold text-neutral ml-2">Remember me</label>
      </div>
      <button type="submit" class="button-primary mb-3 item-slide-in animate-delay-4">Submit</button>
      <p class="font-semibold text-center item-slide-in animate-delay-5">
        <span>Don't have an account?</span>
        <router-link :to="{ name: 'register' }"  class="link-primary ml-1">Create Account</router-link>
      </p>
    </form>
  </AuthLayout>
</template>