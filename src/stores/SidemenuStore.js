import { defineStore } from 'pinia'

export const useSidemenuStore = defineStore('sidemenu', {
  state: () => {
    return {
      activeMenu: localStorage.getItem('activeMenu') ? JSON.parse(localStorage.getItem('activeMenu')) : 1,
      isOpenMenu: localStorage.getItem('isOpenMenu') ? JSON.parse(localStorage.getItem('isOpenMenu')) : 0,
      activeSubMenu: localStorage.getItem('activeSubMenu') ? JSON.parse(localStorage.getItem('activeSubMenu')) : null,
      isMinimizeSidebar: localStorage.getItem('isMinimizeSidebar') ? JSON.parse(localStorage.getItem('isMinimizeSidebar')) : false
    }
  },
  actions: {
    changeCurrentActiveMenu(order) {
      this.activeMenu = order
      localStorage.setItem('activeMenu', JSON.stringify(order));
    },
    changeCurrentActiveSubmenu(order) {
      this.activeSubMenu = order
      localStorage.setItem('activeSubMenu', JSON.stringify(order));
    },
    changeCurrentOpenMenu(order) {
      this.isOpenMenu = order
      localStorage.setItem('isOpenMenu', JSON.stringify(order));
    },
    onMinimizeSidebar() {
      this.isMinimizeSidebar = !this.isMinimizeSidebar
      localStorage.setItem('isMinimizeSidebar', JSON.stringify(!this.isMinimizeSidebar));
    }
  }
})
