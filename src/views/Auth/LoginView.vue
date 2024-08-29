<script setup>

</script>
<template>
  <div class="bg-primary w-screen h-screen">
    <img src="@/assets/images/bg-shape.svg" class="w-full h-full" alt="background image">
    <div class="absolute-center m-auto p-12 border-radius">
      <h1 class="font-bold text-2xl mb-5 text-center">Login to Account</h1>
      <p class="font-semibold mb-5 text-center">Please enter your email and password to continue</p>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label for="email" class="font-semibold text-black text-left">Email Address</label>
          <input type="email" placeholder="email" class="input input-bordered w-full mt-2"/>
        </div>
        <div class="mb-5">
          <div  class="flex justify-between">
            <label for="password" class="font-semibold text-black text-left">Password</label>
            <span class="text-black">Forgot Password?</span>
          </div>
          <input type="password" placeholder="password" class="input input-bordered w-full mt-2"/>
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center">
            <input type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-secondary focus:ring-3 focus:ring-secondary mt-1" required />
          </div>
          <label for="remember" class="font-semibold text-black ml-2">Remember me</label>
        </div>
        <button type="submit" class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-semibold rounded-lg text-sm w-full px-5 py-3 text-center mb-3">Submit</button>
        <p class="font-semibold text-center">
          <span>Don’t have an account?</span>
          <a href="/" class="text-primary hover:text-secondary ml-1">Create Account</a>
        </p>
      </form>
    </div>
  </div>
</template>