<script setup>
import { ref, computed, onMounted } from "vue";
import Enum from '@/types/enum.js'
import ArrowLeftIcon from '@/assets/images/icons/arrow-left.svg'
import FilterIcon from '@/assets/images/icons/filter.svg'
import ReplayIcon from '@/assets/images/icons/replay.svg'
import DropdownMenu from '@/components/DropdownMenu.vue'
import Modal from '@/components/ModalWindow.vue'

const props = defineProps({
  tableData: Object,
  isSelectable: Boolean
})

const truncateString = (str, limit) => {
  if (str.length <= limit) {
    return str;
  }

  const truncatedStr = str.substring(0, limit);
  const lastSpaceIndex = truncatedStr.lastIndexOf(' ');
  return truncatedStr.substring(0, lastSpaceIndex) + '...';
}

const truncateChar = (str, limit) => {
  if (str.length <= limit) {
    return str;
  }

  return str.substring(0, limit) + '...';
}

const truncateTags = (tags) => {
  if(tags.length > 4){
    return tags.slice(0, 4)
  } else {
    return tags
  }
}

const availableItemsAmount = [ 5, 10, 15, 25, 50 ]
const pagination = ref({
  perPage: 10,
  totalItems: props.tableData.body.length,
  currentPage: 1,
  pagesArray: [],
  currentChunkPage: 0,
  chunkPageArray: [],
  totalChunkPage: 1,
  showChunkPage: 5
})

const getStartShowing = computed(() => {
  return (pagination.value.perPage * pagination.value.currentPage) - (pagination.value.perPage - 1)
})

const getEndShowing = computed(() => {
  return Math.min(pagination.value.currentPage * pagination.value.perPage, pagination.value.totalItems)
})

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const createArrayPages = () => {
  const totalPages = Math.ceil(pagination.value.totalItems / pagination.value.perPage)
  pagination.value.pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  pagination.value.chunkPageArray = chunkArray(pagination.value.pagesArray , pagination.value.showChunkPage)
}

const countPages = computed(() => {
  return pagination.value.chunkPageArray[pagination.value.currentChunkPage]
})

const isChunkPageStart = computed(() => {
  if (pagination.value.currentChunkPage == 0) {
    return false
  } else {
    return true
  }
})

const isChunkPageEnd = computed(() => {
  if (pagination.value.currentChunkPage == (pagination.value.chunkPageArray.length - 1)) {
    return false
  } else {
    return true
  }
})

const getChunkPosition = () => {
  const chunkPosition = Math.ceil(pagination.value.currentPage / pagination.value.showChunkPage) - 1
  return chunkPosition
}

const onPrevious = () => {
  if(pagination.value.currentPage == 1) return
  pagination.value.currentPage -= 1
  pagination.value.currentChunkPage = getChunkPosition()
}

const onNext = () => {
  if(pagination.value.currentPage == (Math.ceil(pagination.value.totalItems / pagination.value.perPage))) return
  pagination.value.currentPage += 1
  pagination.value.currentChunkPage = getChunkPosition()
}
const onClickPage = (page) => {
  pagination.value.currentPage = page
}

onMounted(() => {
  createArrayPages()
})
</script>
<template>
  <div class="flex justify-between items-center mb-6">
    <div class="flex items-center">
      <input
      v-model="searchPost"
        type="text"
        placeholder="Search"
        class="input input-bordered rounded-full mx-3"
      />
      <button @click="onSearch" type="button" class="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl">
        Search
      </button>
    </div>
    <ul class="flex items-center border rounded-xl">
      <li class="border-r">
        <Modal>
          <template #button>
            <button
              type="button"
              class="flex items-center py-3 px-6 hover:bg-base-100 rounded-l-xl"
            >
              <img :src="FilterIcon" alt="filter icon" />
              <span class="ml-2">Filter</span>
            </button>
          </template>
          <template #body>
            <div>Filter</div>
            <ul>
              <li>
                <label class="form-control w-full max-w-xs">
                  <div class="label">
                    <span class="label-text">What is your name?</span>
                  </div>
                  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </label>
              </li>
            </ul>
          </template>
        </Modal>
      </li>
      <li class="border-r">
        <DropdownMenu
          ref="childRefUser"
          set-width="w-36"
          set-menu-width="w-full"
          :is-arrow="true"
          :is-border-arrow="false"
          :is-hover="true"
        >
          <template v-slot:button>
            <div class="w-full">Show Entries</div>
          </template>
          <template v-slot:list>
            <li v-for="(amount, index) in availableItemsAmount" :key="index">
              <button @click="pagination.perPage = amount" type="button" :class="pagination.perPage == amount ? 'bg-base-200':''">{{ amount }}</button>
            </li>
          </template>
        </DropdownMenu>
      </li>
      <li>
        <button
          @click="onReset"
          type="button"
          class="flex items-center px-6 py-3 hover:bg-base-100 rounded-r-xl"
        >
          <img :src="ReplayIcon" class="mb-0.5" alt="replay icon" />
          <span class="text-red-600">Reset</span>
        </button>
      </li>
    </ul>
  </div>
  <table class="table mb-3">
    <thead>
      <tr>
        <th v-if="isSelectable">
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th v-for="(column, headerIndex) in tableData.column" :key="headerIndex">
          <span class="capitalize">{{ column.label }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in tableData.body" :key="rowIndex">
        <td v-if="isSelectable">
          <input type="checkbox" class="checkbox" />
        </td>
        <td v-for="(column, colIndex) in tableData.column" :key="colIndex">
          <div v-if="column.type === Enum.IMAGE" class="avatar">
            <div class="mask mask-squircle h-12 w-12">
              <img
                :src="row[column.label]"
                :alt="column.label" />
            </div>
          </div>
          <div v-else-if="column.type === Enum.STRING" class="max-w-sm">{{ truncateString(row[column.label], 60) }}</div>
          <div v-else-if="column.type === Enum.LIST">
            <ul class="float-left max-w-sm">
              <li v-for="(value, listIndex) in truncateTags(row[column.label])" :key="listIndex" class="badge badge-base-100 m-1">
                {{ truncateChar(value, 10) }} 
              </li>
              <li v-if="row[column.label].length > 4" class="badge badge-base-100 m-0.5">...</li>
            </ul>
          </div>
          <div v-else-if="column.type === Enum.ACTION">
            <ul class="flex w-32">
              <li v-for="(value, actionIndex) in column.actions" :key="actionIndex">
                <button @click="value.onClick(row)" type="button" class="btn btn-ghost btn-xs">
                  <img :src="value.icon" alt="detail icon" />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="flex items-center justify-between">
    <span class="text-xs font-bold">Showing {{ getStartShowing }}-{{ getEndShowing }} of {{ pagination.totalItems }} results</span>
    <div class="flex items-center">
      <button @click="onPrevious()" type="button" class="rounded-l-lg border px-2 hover:bg-base-100">
        <img :src="ArrowLeftIcon" class="rotate-180" alt="arrow left icon" />
      </button>
      <ul class="flex">
        <li v-if="isChunkPageStart" class="border px-2 hover:bg-base-100">...</li>
        <li v-for="(page, index) in countPages" :key="index">
          <button @click="onClickPage(page)" class="border px-2 hover:bg-base-100" :class="pagination.currentPage == page ? 'bg-primary border-primary text-white hover:bg-secondary hover:border-secondary' : 'bg-white'">{{ page }}</button>
        </li>
        <li v-if="isChunkPageEnd" class="border px-2 hover:bg-base-100">...</li>
      </ul>
      <button @click="onNext()" type="button" class="rounded-r-lg border px-2 hover:bg-base-100">
        <img :src="ArrowLeftIcon" alt="arrow left icon" />
      </button>
    </div>
  </div>
</template>
