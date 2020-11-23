<template>
  <section
    class="section py-32 px-4 bg-blue-100 bg-gradient-to-t from-blue-100 to-white"
  >
    <prismic-rich-text
      class="text-center text-sm uppercase text-blue-600 font-semibold"
      :field="slice.primary.title"
    />
    <prismic-rich-text
      class="text-center text-4xl sm:text-5xl font-bold max-w-2xl mx-auto leading-tight mb-10"
      :field="slice.primary.description"
    />
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      class="max-w-3xl mx-auto mb-3"
    >
      <div class="box-content text-base bg-white shadow-lg rounded-2xl p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkInput
            v-for="(field, i) in slice.items"
            :key="i"
            :required="field.required"
            :type="field.type"
            :label="field.label"
            :helper-text="field.helperText"
            :placeholder="field.placeholder"
            :error-message="field.errorMessage"
            :input-id="field.inputID"
          />
        </div>
        <div class="mt-4">
          <label
            for="contact_textarea"
            class="block text-sm font-medium text-gray-700"
          >
            {{ slice.primary.textAreaLabel }}
          </label>
          <div class="mt-1">
            <textarea
              id="contact_textarea"
              rows="3"
              class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 border-2 rounded-xl"
              :placeholder="slice.primary.textAreaPlaceholder"
            ></textarea>
          </div>
          <p
            v-if="slice.primary.textAreaHelperText"
            class="mt-2 text-sm text-gray-500"
          >
            {{ slice.primary.textAreaHelperText }}
          </p>
        </div>
      </div>
      <button
        class="mx-auto text-white bg-blue-600 font-bold py-3 px-10 mb-4 sm:mb-0 rounded-full block hover:bg-blue-700 box-content text-base mt-8"
        type="submit"
      >
        Submit
      </button>
    </form>
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
