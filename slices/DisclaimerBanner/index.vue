<template>
  <div
    id="disclaimer"
    ref="disclaimer"
    class="p-8 fixed bottom-0 left-0 w-full flex box-border"
  >
    <div
      class="bg-white w-full px-4 py-2 flex justify-between sm:items-center items-start rounded-xl shadow-lg max-w-5xl mx-auto"
    >
      <prismic-rich-text class="pr-2" :field="slice.primary.disclaimer" />
      <button
        class="flex flex-col justify-between items-end bg-gray-200 py-4 px-3 rounded-2xl cursor-pointer"
        @click="closeDisclaimer()"
      >
        <span class="w-8 h-1 one bg-black block rounded-full"></span>
        <span class="w-8 h-1 two bg-black block rounded-full mt-2"></span>
      </button>
    </div>
  </div>
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
  methods: {
    closeDisclaimer() {
      this.$refs.disclaimer.style.bottom =
        -this.$refs.disclaimer.clientHeight + 'px'
    },
  },
}
</script>
<style scoped>
#disclaimer {
  z-index: 70;
  transition: 0.8s all cubic-bezier(0.075, 0.82, 0.165, 1);
}

#disclaimer button span:first-child {
  transform: rotate(45deg) translate(4px, 4px);
}

#disclaimer button span:last-child {
  transform: rotate(-45deg) translate(4px, -5px);
}
</style>
