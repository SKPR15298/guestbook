<template>
  <div class="flex flex-col gap-2 mr-5 ml-1 mb-5">
    <label class="text-2xl font-semibold text-white">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      class="block w-full p-3 backdrop-blur-lg text-white placeholder-white border border-gray-300 rounded-lg bg-white/10 text-base font-semibold focus:border-blue-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
