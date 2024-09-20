<script setup>
import { ref } from 'vue'
import ArrowDownIcon from '@/assets/images/icons/arrow-down.svg'

defineProps({
  setWidth: String,
  isArrow: Boolean,
  isBorderArrow: Boolean,
  setMenuWidth: String,
  isHover: Boolean
})

const isActive = ref(false)
const buttonEl = ref(null)
const onActive = () => {
  if (isActive.value) {
    isActive.value = false
    buttonEl.value.blur()
  } else {
    isActive.value = true
  }
}

const onBlur = () => {
  isActive.value = false
  buttonEl.value.blur()
}

const onSelect = () => {
  isActive.value = true
}

defineExpose({
  onBlur
})
</script>
<template>
  <div class="dropdown" :class="setWidth">
    <div
      ref="buttonEl"
      @blur="onBlur()"
      @click="onActive()"
      tabindex="0"
      role="button"
      class="flex items-center justify-between w-full p-3"
      :class="isHover ? 'hover:bg-base-100' : ''"
    >
      <slot name="button"></slot>
      <div v-if="isArrow && isBorderArrow" class="border border-base-200 rounded-full p-0.5 py-2">
        <img
          :src="ArrowDownIcon"
          alt="Arrow Down Icon"
          class="mx-1 transition-all duration-500 ease-in-out"
          :class="isActive ? 'rotate-180' : ''"
        />
      </div>
      <img
        v-if="isArrow && !isBorderArrow"
        :src="ArrowDownIcon"
        alt="Arrow Down Icon"
        class="mx-1 transition-all duration-500 ease-in-out"
        :class="isActive ? 'rotate-180' : ''"
      />
    </div>
    <ul
      tabindex="0"
      @click="onSelect()"
      class="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
      :class="setMenuWidth"
    >
      <slot name="list"></slot>
    </ul>
  </div>
</template>
