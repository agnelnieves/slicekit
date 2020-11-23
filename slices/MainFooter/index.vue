<template>
  <footer class="bg-blue-900 p-4 text-white">
    <div
      class="max-w-5xl flex mx-auto justify-between items-center flex-col-reverse sm:flex-row"
    >
      <div
        class="flex items-center justify-center sm:justify-between my-3 sm:my-0 flex-wrap"
      >
        <prismic-image style="max-width: 100px" :field="slice.primary.logo" />

        <span class="sm:ml-2 mt-0 px-2">
          Copyright &copy; {{ new Date().getFullYear() }}
          {{ slice.primary.companyName }}
        </span>
      </div>
      <nav class="flex max-w-xl flex-wrap items-center justify-center">
        <prismic-link
          v-for="(social, i) in slice.items"
          :key="i"
          class="hover:bg-blue-800 focus:bg-blue-800 p-3 rounded-xl ml-1"
          :field="social.link"
        >
          {{ social.label }}
        </prismic-link>
      </nav>
    </div>
  </footer>
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
}
</script>
