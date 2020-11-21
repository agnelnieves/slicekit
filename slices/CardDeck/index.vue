<template>
  <section class="section py-20">
    <prismic-rich-text class="text-center text-sm uppercase text-blue-600 font-semibold" :field="slice.primary.title" />
    <prismic-rich-text class="text-center text-5xl font-bold max-w-2xl mx-auto leading-tight mb-12" :field="slice.primary.description" />
    <div ref="cardDeck">
      <div class="flex box-content justify-between items-center relative text-base bg-white shadow-lg sm:rounded-2xl sm:p-5 max-w-3xl mx-auto sticky top-0  sm:text-lg text-center" v-for="(card,i) in slice.primary.items" :key="i">
        <div class="px-5 box-content mx-auto">
          <prismic-rich-text class="text-3xl leading-8 font-semibold" :field="card.cardTitle" />
          <prismic-rich-text :field="card.cardDescription" />
          <prismic-link class="text-white bg-blue-600  font-bold py-3 sm:rounded-full block hover:bg-blue-700 box-content text-base mt-4" :field="card.cardCTALink">
            {{ card.cardCTALabel }}
          </prismic-link>
        </div>
        <div class="block max-w-md">
          <prismic-image class="max-w-full sm:rounded-2xl" :field="card.image" />
        </div>
      </div>
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
