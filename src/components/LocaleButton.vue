<script setup>
import { ref } from 'vue'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { useI18n } from 'vue-i18n'
import DropdownMenu from '@/components/DropdownMenu.vue'

defineProps({
  isFull: Boolean
})

const { locale } = useI18n()
const localeFlags = {
  en: {
    locale: 'en',
    code: 'fi fi-gb',
    label: 'EN',
    labelFull: 'English'
  },
  id: {
    locale: 'id',
    code: 'fi fi-id',
    label: 'ID',
    labelFull: 'Indonesia'
  }
}
const onchangeLocale = (lang) => {
  locale.value = lang
}

const childRef = ref(null)
const onBlur = () => {
  childRef.value.onBlur()
}
</script>
<template>
  <DropdownMenu
    ref="childRef"
    :set-width="isFull ? 'w-36' : 'w-24'"
    set-menu-width="w-full"
    :is-arrow="true"
    :is-border-arrow="false"
  >
    <template v-slot:button>
      <div class="flex items-center w-full">
        <span class="mx-1" :class="localeFlags[locale].code"></span>
        <span class="mx-1">{{
          isFull ? localeFlags[locale].labelFull : localeFlags[locale].label
        }}</span>
      </div>
    </template>
    <template v-slot:list>
      <li v-if="isFull" class="text-xs m-2">Select Language</li>
      <li v-for="(flag, index) in localeFlags" :key="index">
        <button
          type="button"
          @blur="onBlur()"
          @click="onchangeLocale(flag.locale)"
          :class="locale == flag.locale ? 'bg-base-200' : ''"
        >
          <span :class="flag.code"></span> {{ isFull ? flag.labelFull : flag.label }}
        </button>
      </li>
    </template>
  </DropdownMenu>
</template>
