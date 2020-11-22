<template>
  <nav
    :class="{ 'p-8': !scrolled && !showMobileMenu, 'h-full': showMobileMenu }"
    class="fixed top-0 left-0 w-full flex box-border"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      id="nav-wrapper"
      class="bg-white w-full mx-auto p-3 overflow-hidden shadow-lg"
      :class="{
        'rounded-xl': !scrolled,
        'max-w-5xl': !scrolled,
        'max-w-full': scrolled,
        'sm:p-6': !scrolled,
        'sm:p-4': scrolled,
        'bg-opacity-100': scrolled,
        'h-full': showMobileMenu,
      }"
    >
      <div
        class="nav-content flex justify-between items-center max-w-5xl mx-auto"
      >
        <img width="120" src="logo.svg" alt="" />
        <!-- <prismic-image style="max-width: 200px" :field="slice.primary.logo"/> -->
        <ul class="m-0 p-0 hidden sm:flex">
          <li v-for="(link, i) in slice.items" :key="i">
            <prismic-link
              class="hover:bg-gray-200 focus:bg-gray-200 p-3 rounded-xl ml-2"
              :field="link.link"
            >
              {{ link.label }}
            </prismic-link>
          </li>
        </ul>
        <div
          class="flex flex-col justify-between items-end bg-gray-200 py-4 px-3 sm:hidden toggle-btn rounded-2xl cursor-pointer toggle-button"
          :class="{ 'toggle--active': showMobileMenu }"
          @click="toggleMobileMenu"
        >
          <span class="w-8 h-1 one bg-black block rounded-full"></span>
          <span class="w-6 h-1 two bg-black block rounded-full mt-2"></span>
        </div>
      </div>
      <div
        id="mobileMenu"
        :class="{ hidden: !showMobileMenu, 'h-0': !showMobileMenu }"
        class="w-full h-full flex justify-center items-start mt-20"
      >
        <ul class="m-0 p-0 block">
          <li
            v-for="(link, i) in slice.items"
            :key="i"
            class="block text-center"
            :style="`--animation-order: ${i + 1}`"
          >
            <prismic-link
              class="hover:bg-gray-200 text-center text-xl font-bold focus:bg-gray-200 py-3 px-5 rounded-xl ml-2 block"
              :field="link.link"
            >
              {{ link.label }}
            </prismic-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { disableScroll, enableScroll } from '~/utils/utils'
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      showMobileMenu: false,
      scrolled: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleSCroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleSCroll)
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu

      this.showMobileMenu
        ? disableScroll(
            'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'
          )
        : enableScroll(
            'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'
          )
    },
    handleSCroll(event) {
      const scrollOffset = 100
      if (window.scrollY > scrollOffset) {
        this.scrolled = true
      } else if (window.scrollY < scrollOffset) {
        this.scrolled = false
      }
    },
  },
}
</script>

<style scoped>
nav,
#nav-wrapper {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.toggle-button * {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.toggle--active span {
  width: 29px;
}
.toggle--active span:first-child {
  transform: rotate(45deg) translate(4px, 4px);
}
.toggle--active span:last-child {
  transform: rotate(-45deg) translate(4px, -5px);
}

#mobileMenu:not(.hidden) li + li {
  margin-top: 2rem;
}

#mobileMenu:not(.hidden) li {
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }

  100% {
    opacity: 1;
  }
}
</style>

<style scoped>
nav {
  z-index: 80;
}
</style>
