<template>
  <section class="py-20 px-4 bg-blue-800">
    <prismic-rich-text
      :field="slice.primary.title"
      class="text-center text-sm uppercase text-white font-semibold"
    />
    <prismic-rich-text
      class="text-center text-white sm:text-5xl text-4xl font-bold sm:max-w-xl max-w-2xl mx-auto leading-tight mb-12"
      :field="slice.primary.description"
    />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
      <prismic-link
        v-for="(article, i) in slice.items"
        :key="i"
        :field="article.link"
      >
        <figure
          class="relative text-base bg-white shadow-lg rounded-2xl p-3 mx-auto"
          style="max-width: 20rem"
        >
          <prismic-image
            class="max-w-full rounded-2xl"
            :field="article.image"
          ></prismic-image>
          <prismic-rich-text
            class="sm:text-2xl text-xl leading-6 sm:leading-7 md:leading-8 font-bold mt-2"
            :field="article.title"
          />
        </figure>
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
      },
    },
  },
}
</script>
