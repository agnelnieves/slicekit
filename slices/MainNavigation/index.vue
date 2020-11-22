<template>
  <nav
    :class="{ 'p-8': !scrolled }"
    class="fixed top-0 left-0 w-full flex box-border"
    role="navigation"
    aria-label="main navigation"
  >
    <div
      id="nav-wrapper"
      class="bg-white w-full mx-auto"
      :class="{
        'rounded-xl': !scrolled,
        'max-w-5xl': !scrolled,
        'max-w-full': scrolled,
        'p-6': !scrolled,
        'p-2': scrolled,
        'bg-opacity-100': scrolled,
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
          class="flex flex-col justify-between items-end bg-gray-200 py-4 px-3 sm:hidden toggle-btn rounded-2xl cursor-pointer"
        >
          <span class="w-8 h-1 one bg-black block rounded-full"></span>
          <span class="w-6 h-1 two bg-black block rounded-full mt-2"></span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
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
</style>
