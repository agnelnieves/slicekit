<template>
  <section class="overflow-x-hidden bg-gradient-to-t from-gray-200">
    <div class="max-w-5xl py-10 mx-auto flex  sm:flex-row sm:text-left text-center flex-col justify-between items-center">
      <div class="max-w-md p-4">
        <prismic-rich-text :field="slice.primary.title" class="text-4xl sm:text-5xl leading-11 font-bold leading-tight mb-4" />
        <prismic-rich-text :field="slice.primary.description" class=" text-lg text-gray-600 max-w-sm"/>
        <Button :field="slice.primary.ctaLink">
          {{ slice.primary.ctaLabel }}
        </Button>
      </div>
      <div class="sm:max-w-xs md:max-w-sm p-4">
        <prismic-image :field="slice.primary.image" class="rounded-3xl max-w-full" />
      </div>
    </div>
  </section>
</template>
<script>
import Button from "@/components/Button.vue"
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
