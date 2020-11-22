<template>
  <prismic-link
    :class="{ 'mx-auto': isCentered }"
    class="text-white bg-blue-600 font-bold py-3 px-5 mb-4 sm:mb-0 rounded-full inline-block hover:bg-blue-700 box-content text-base mt-4"
    :field="field"
  >
    <slot />
  </prismic-link>
</template>

<script>
export default {
  name: 'SkButton',
  props: {
    field: {
      type: Object,
      default: null,
    },
    isCentered: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
