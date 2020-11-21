<template>
  <section class="section text-red-400 p-5">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-image :field="slice.primary.image" />
    <prismicLink :field="slice.primary.ctaLink">
      {{ slice.primary.ctaLabel }}
    </prismicLink>
  </section>
</template>
<script>
export default {
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
