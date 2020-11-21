<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <div v-for="(card,i) in slice.primary.items" :key="i">
      <prismic-rich-text :field="card.cardTitle" />
      <prismic-rich-text :field="card.cardDescription" />
      <prismic-link :field="card.cardCTALink">
        {{ card.cardCTALabel }}
      </prismic-link>
    </div>
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

