<template>
  <div>
    <label :for="inputId" class="block text-sm font-medium text-gray-700"
      >{{ label }} {{ required ? ' *' : '' }}
    </label>
    <input
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      class="p-3 mt-1 focus:ring-indigo-500 border-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-xl"
      :required="required"
    />
    <p
      v-if="helperText || errorMessage"
      class="mt-2 text-sm"
      :class="{ 'text-red': error, 'text-gray-500': helperText && !error }"
    >
      {{ helperText && !error ? helperText : '' }}
      {{ errorMessage && error ? errorMessage : '' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SkInput',
  props: {
    helperText: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    errorMessage: {
      type: String,
      default: null,
    },
    inputId: {
      type: String,
      default: null,
    },
  },
}
</script>
