<template>
  <footer>
    <prismic-image :field="slice.primary.logo"/>
    <prismic-rich-text :field="slice.primary.tagline" />

    <span>
    &copy; {{ new Date().getFullYear() }}
    {{ slice.primary.companyName }}
    </span>

    <prismic-link v-for="(social,i) in slice.items" :key="i" :field="social.link">
      {{ social.label }}
    </prismic-link>
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
      }
    }
  },
}
</script>

