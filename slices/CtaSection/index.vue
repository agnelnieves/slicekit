<template>
    <section class="section py-20 px-4 bg-blue-100 text-center">
    <prismic-rich-text class="text-center text-sm uppercase text-blue-600 font-semibold" :field="slice.primary.title" />
    <prismic-rich-text class="text-center text-5xl font-bold max-w-2xl mx-auto leading-tight mb-4" :field="slice.primary.description" />
    <Button is-centered :field="slice.primary.ctaLink">
      {{ slice.primary.ctaLabel }}
    </Button>
  </section>
</template>
<script>
import Button from "@/components/button.vue"
export default {
  components: {
    Button
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
}
</script>
