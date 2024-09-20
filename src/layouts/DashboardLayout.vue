<script setup>
import { ref } from 'vue'
import { useSidemenuStore } from '@/stores/SidemenuStore'
import SidebarMenu from '@/components/SidebarMenu.vue'
import LocaleButton from '@/components/LocaleButton.vue'
import HamburgerIcon from '@/assets/images/icons/hamburger.svg'
import BellIcon from '@/assets/images/icons/bell.svg'
import SampleAvatar from '@/assets/images/avatar-sample.png'
import UserSettingIcon from '@/assets/images/icons/user-setting.svg'
import ChangePasswordIcon from '@/assets/images/icons/change-password.svg'
import ActivityLogIcon from '@/assets/images/icons/activity-log.svg'
import LogoutMenuIcon from '@/assets/images/icons/logout-menu.svg'
import DropdownMenu from '@/components/DropdownMenu.vue'

const userMenuList = [
  {
    label: 'Manage Account',
    type: 1,
    icon: UserSettingIcon,
    path: ''
  },
  {
    label: 'Change Password',
    type: 1,
    icon: ChangePasswordIcon,
    path: ''
  },
  {
    label: 'Activity Log',
    type: 1,
    icon: ActivityLogIcon,
    path: ''
  },
  {
    label: 'Log Out',
    type: 2,
    icon: LogoutMenuIcon,
    path: ''
  }
]

const notificationList = [
  {
    title: 'New Comment',
    paragraph: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet '
  },
  {
    title: 'New Like',
    paragraph: 'lorem ipsum dolor sit amet 2'
  }
]

const onSelectMenuUser = (index) => {
  console.log(index)
}

const childRefUser = ref(null)
const onBlurMenuUser = () => {
  childRefUser.value.onBlur()
}

const onSelectMenuNotification = (index) => {
  console.log(index)
}

const childRefNotification = ref(null)
const onBlurMenuNotification = () => {
  childRefNotification.value.onBlur()
}

const sidemenuStore = useSidemenuStore()
const minimizeSidebar = () => {
  sidemenuStore.onMinimizeSidebar()
}
</script>
<template>
  <div class="flex">
    <SidebarMenu
      class="bg-white h-[100vh] overflow-hidden transition-all duration-500 ease-in-out"
      :class="sidemenuStore.isMinimizeSidebar ? 'w-16' : 'w-64'"
    ></SidebarMenu>
    <div class="w-full">
      <div class="w-full h-16 bg-white flex items-center justify-between">
        <button
          @click="minimizeSidebar()"
          type="button"
          class="mr-3 tooltip tooltip-bottom tooltip-info"
          :data-tip="sidemenuStore.isMinimizeSidebar ? 'Show' : 'Hide'"
        >
          <img :src="HamburgerIcon" alt="Hamburger Icon" />
        </button>
        <div class="flex items-center justify-end w-full mx-6">
          <DropdownMenu
            ref="childRefNotification"
            set-width="w-14"
            set-menu-width="w-80"
            :is-arrow="false"
            :is-border-arrow="false"
          >
            <template v-slot:button>
              <button class="relative mx-2">
                <div
                  class="absolute -top-2 -right-2 rounded-full bg-red-500 text-xs text-white px-1"
                >
                  3
                </div>
                <img :src="BellIcon" alt="Bell Icon" />
              </button>
            </template>
            <template v-slot:list>
              <li class="text-xs m-2">Notification</li>
              <li v-for="(notification, index) in notificationList" :key="index">
                <button
                  type="button"
                  @blur="onBlurMenuNotification()"
                  @click="onSelectMenuNotification(index)"
                  class="flex flex-col items-start"
                >
                  <div class="font-bold leading-none">{{ notification.title }}</div>
                  <p class="leading-none">{{ notification.paragraph }}</p>
                </button>
              </li>
              <li class="text-xs m-2">
                <button
                  type="button"
                  @click="onSelectMenuNotification(index)"
                  class="flex justify-center"
                >
                  <div class="text-center font-bold leading-none">See More</div>
                </button>
              </li>
            </template>
          </DropdownMenu>
          <LocaleButton :is-full="true"></LocaleButton>
          <DropdownMenu
            ref="childRefUser"
            set-width="w-48"
            set-menu-width="w-full"
            :is-arrow="true"
            :is-border-arrow="true"
          >
            <template v-slot:button>
              <div class="flex items-center w-full">
                <div class="flex items-center">
                  <div class="rounded-full overflow-hidden w-8">
                    <img :src="SampleAvatar" alt="User Avatar" class="w-full" />
                  </div>
                  <div class="flex flex-col items-start mx-2">
                    <div class="font-bold leading-none">John Doe</div>
                    <div class="font-semibold text-xs leading-none">Admin</div>
                  </div>
                </div>
              </div>
            </template>
            <template v-slot:list>
              <li v-for="(menu, index) in userMenuList" :key="index">
                <button
                  type="button"
                  @blur="onBlurMenuUser()"
                  @click="onSelectMenuUser(index)"
                  class="flex items-center"
                >
                  <img :src="menu.icon" :alt="menu.label" />
                  <span>{{ menu.label }}</span>
                </button>
              </li>
            </template>
          </DropdownMenu>
        </div>
      </div>
      <div class="p-6 bg-base-100 overflow-y-scroll h-[90vh]">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
