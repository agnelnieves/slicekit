<template>
  <nav>
    <prismic-image :field="slice.primary.logo"/>
    <prismic-link v-for="(link,i) in slice.items" :key="i" :field="link.link">
      {{ link.label }}
    </prismic-link>
  </nav>
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
  }
}
</script>
