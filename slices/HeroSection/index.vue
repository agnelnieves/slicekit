<template>
  <section class="overflow-x-hidden bg-gradient-to-t from-gray-200 to-white">
    <div
      class="max-w-5xl py-10 mx-auto flex sm:flex-row sm:text-left text-center flex-col justify-center items-center sm:justify-between"
    >
      <div class="max-w-md p-4">
        <prismic-rich-text
          :field="slice.primary.title"
          class="text-4xl sm:text-5xl leading-11 font-bold leading-tight mb-4"
        />
        <prismic-rich-text
          :field="slice.primary.description"
          class="text-lg text-gray-600 max-w-sm"
        />
        <SkButton :field="slice.primary.ctaLink">
          {{ slice.primary.ctaLabel }}
        </SkButton>
      </div>
      <div class="sm:max-w-xs md:max-w-sm p-4">
        <prismic-image
          :field="slice.primary.image"
          class="rounded-3xl max-w-full"
        />
      </div>
    </div>
  </section>
</template>
<script>
import SkButton from '@/components/SkButton.vue'
export default {
  components: {
    SkButton,
  },
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

<style scoped>
section,
section > div {
  min-height: 80vh;
}
</style>
