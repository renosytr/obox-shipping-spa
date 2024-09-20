<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSidemenuStore } from '@/stores/SidemenuStore'
import LogoObox from '@/assets/images/logo.svg'
import DashboardIcon from '@/assets/images/icons/dashboard.svg'
import DashboardActiveIcon from '@/assets/images/icons/dashboard-active.svg'
import PostsIcon from '@/assets/images/icons/posts.svg'
import PostsActiveIcon from '@/assets/images/icons/posts-active.svg'
import CommentsIcon from '@/assets/images/icons/comments.svg'
import CommentsActiveIcon from '@/assets/images/icons/comments-active.svg'
import ContactsIcon from '@/assets/images/icons/contact.svg'
import ContactsActiveIcon from '@/assets/images/icons/contact-active.svg'
import SettingsIcon from '@/assets/images/icons/settings.svg'
import SettingsActiveIcon from '@/assets/images/icons/settings-active.svg'
import LogoutIcon from '@/assets/images/icons/logout.svg'
import LogoutActiveIcon from '@/assets/images/icons/logout-active.svg'
import ArrowDownIcon from '@/assets/images/icons/arrow-down.svg'
import ArrowDownActiveIcon from '@/assets/images/icons/arrow-down-active.svg'

const router = useRouter()
const sidemenuStore = useSidemenuStore()
const sidebarMenus = ref([
  {
    order: 1,
    name: 'dashboard',
    path: 'dashboard',
    icon: DashboardIcon,
    activeIcon: DashboardActiveIcon
  },
  {
    order: 2,
    name: 'posts',
    icon: PostsIcon,
    activeIcon: PostsActiveIcon,
    height: 'h-44',
    children: [
      {
        order: 1,
        name: 'all posts',
        path: 'all-posts'
      },
      {
        order: 2,
        name: 'draft posts',
        path: 'draft-posts'
      },
      {
        order: 3,
        name: 'trash',
        path: 'trash-posts'
      }
    ]
  },
  {
    order: 3,
    name: 'comments',
    path: 'comments',
    icon: CommentsIcon,
    activeIcon: CommentsActiveIcon
  },
  {
    order: 4,
    name: 'contacts',
    path: 'contacts',
    icon: ContactsIcon,
    activeIcon: ContactsActiveIcon
  },
  {
    order: 5,
    name: 'setting',
    path: 'basic-setting',
    icon: SettingsIcon,
    activeIcon: SettingsActiveIcon
  },
  {
    order: 6,
    name: 'logout',
    path: 'logout',
    icon: LogoutIcon,
    activeIcon: LogoutActiveIcon
  }
])

const itemsWithoutLast = computed(() => sidebarMenus.value.slice(0, -1))
const lastItem = computed(() => [sidebarMenus.value[sidebarMenus.value.length - 1]])

const changeMenu = (order, index) => {
  if (sidebarMenus.value[index].children) {
    if (order == sidemenuStore.isOpenMenu) {
      sidemenuStore.changeCurrentOpenMenu(0)
    } else {
      sidemenuStore.changeCurrentOpenMenu(order)
    }
  } else {
    sidemenuStore.changeCurrentActiveMenu(order)
    router.push({ name: sidebarMenus.value[index].path })
    sidemenuStore.changeCurrentActiveSubmenu(0)
  }
}

const changeSubmenu = (menuOrder, menuIndex, subMenuOrder, subMenuIndex) => {
  sidemenuStore.changeCurrentActiveMenu(menuOrder)
  sidemenuStore.changeCurrentActiveSubmenu(subMenuOrder)
  router.push({ name: sidebarMenus.value[menuIndex].children[subMenuIndex].path })
}
</script>
<template>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col">
      <router-link :to="{ name: 'dashboard' }" class="flex items-center justify-center h-16">
        <img :src="LogoObox" alt="Logo Obox" class="mx-1" />
        <h1
          v-if="!sidemenuStore.isMinimizeSidebar"
          class="font-bold text-xl mx-1 mt-1 whitespace-nowrap"
        >
          Obox Shipping
        </h1>
      </router-link>
      <ul class="my-3">
        <li
          v-for="(sidebarMenu, index) in itemsWithoutLast"
          :key="'menu-' + index"
          class="relative my-2"
          :class="!sidemenuStore.isMinimizeSidebar ? 'mx-6' : 'mx-2'"
        >
          <button
            @click="changeMenu(sidebarMenu.order, index)"
            class="sidebar-menu flex items-center justify-between font-semibold capitalize rounded-xl w-full h-12"
            :class="[
              !sidemenuStore.isMinimizeSidebar ? 'p-3' : 'p-3 m-auto',
              sidemenuStore.activeMenu == sidebarMenu.order ? 'bg-primary' : 'bg-white',
              sidemenuStore.activeMenu == sidebarMenu.order ? 'text-white' : 'text-black'
            ]"
            type="button"
          >
            <div class="flex items-center">
              <img
                :src="
                  sidemenuStore.activeMenu == sidebarMenu.order
                    ? sidebarMenu.activeIcon
                    : sidebarMenu.icon
                "
                class="relative z-10"
                :class="!sidemenuStore.isMinimizeSidebar ? 'mx-3' : ''"
                alt="Icon Dashboard"
              />
              <div v-if="!sidemenuStore.isMinimizeSidebar" class="relative z-10 whitespace-nowrap">
                {{ sidebarMenu.name }}
              </div>
              <div
                v-if="
                  !sidemenuStore.isMinimizeSidebar && sidemenuStore.activeMenu == sidebarMenu.order
                "
                class="absolute inset-y-0 left-[-1.85rem] w-3 h-12 rounded-r-lg bg-primary"
              ></div>
              <span
                v-if="sidemenuStore.activeMenu !== sidebarMenu.order"
                class="rounded-xl bg-base-200 h-12"
              ></span>
            </div>
            <img
              v-if="
                sidebarMenu.children &&
                !sidemenuStore.isMinimizeSidebar &&
                sidemenuStore.activeMenu == sidebarMenu.order
              "
              :src="ArrowDownActiveIcon"
              class="relative z-10 transition-all duration-500 ease-in-out"
              :class="sidemenuStore.isOpenMenu == sidebarMenu.order ? 'rotate-180' : 'rotate-0'"
              alt="arrow icon"
            />
            <img
              v-if="
                sidebarMenu.children &&
                !sidemenuStore.isMinimizeSidebar &&
                sidemenuStore.activeMenu !== sidebarMenu.order
              "
              :src="ArrowDownIcon"
              class="relative z-10 transition-all duration-500 ease-in-out"
              :class="sidemenuStore.isOpenMenu == sidebarMenu.order ? 'rotate-180' : 'rotate-0'"
              alt="arrow icon"
            />
          </button>
          <ul
            v-if="sidebarMenu.children"
            class="pl-6 my-1 overflow-hidden transition-all duration-500 ease-in-out"
            :class="sidemenuStore.isOpenMenu == sidebarMenu.order ? sidebarMenu.height : 'h-0'"
          >
            <li
              v-for="(submenu, idx) in sidebarMenu.children"
              :key="'submenu-' + idx"
              class="sidebar-submenu relative my-2"
            >
              <button
                @click="changeSubmenu(sidebarMenu.order, index, submenu.order, idx)"
                class="relative z-10 whitespace-nowrap font-semibold capitalize rounded-xl w-full h-12"
                :class="[
                  !sidemenuStore.isMinimizeSidebar ? 'p-3' : 'p-3 m-auto',
                  sidemenuStore.activeSubMenu == submenu.order ? 'bg-primary' : 'bg-white',
                  sidemenuStore.activeSubMenu == submenu.order ? 'text-white' : 'text-black'
                ]"
                type="button"
              >
                <div v-if="!sidemenuStore.isMinimizeSidebar" class="relative z-10 text-left">
                  {{ submenu.name }}
                </div>
                <div
                  v-if="sidemenuStore.activeSubMenu !== submenu.order"
                  class="bg-submenu rounded-xl bg-base-200 h-12"
                ></div>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ul class="border-t border-grey-300">
      <li
        v-for="(sidebarMenu, index) in lastItem"
        :key="'menu-' + index"
        class="sidebar-menu relative my-2"
        :class="!sidemenuStore.isMinimizeSidebar ? 'mx-6' : 'mx-2'"
      >
        <button
          @click="changeMenu(sidebarMenu.order, index)"
          class="flex items-center font-semibold capitalize rounded-xl w-full h-12"
          :class="[
            !sidemenuStore.isMinimizeSidebar ? 'p-3' : 'p-3 m-auto',
            sidemenuStore.activeMenu == sidebarMenu.order ? 'bg-primary' : 'bg-white',
            sidemenuStore.activeMenu == sidebarMenu.order ? 'text-white' : 'text-black'
          ]"
          type="button"
        >
          <img
            :src="
              sidemenuStore.activeMenu == sidebarMenu.order
                ? sidebarMenu.activeIcon
                : sidebarMenu.icon
            "
            class="relative z-10"
            :class="!sidemenuStore.isMinimizeSidebar ? 'mx-3' : ''"
            alt="Icon Dashboard"
          />
          <div v-if="!sidemenuStore.isMinimizeSidebar" class="relative z-10">
            {{ sidebarMenu.name }}
          </div>
          <div
            v-if="!sidemenuStore.isMinimizeSidebar && sidemenuStore.activeMenu == sidebarMenu.order"
            class="absolute inset-y-0 left-[-1.85rem] w-3 h-12 rounded-r-lg bg-primary"
          ></div>
          <span
            class="rounded-xl"
            :class="[
              sidemenuStore.activeMenu == sidebarMenu.order ? 'bg-secondary' : 'bg-base-200'
            ]"
          ></span>
        </button>
      </li>
    </ul>
  </div>
</template>
