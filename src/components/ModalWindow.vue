<script setup>
</script>
<template>
  <button onclick="modal.showModal()">
    <slot name="button"></slot>
  </button>
  <dialog id="modal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <slot name="body"></slot>
    </div>
  </dialog>
</template>