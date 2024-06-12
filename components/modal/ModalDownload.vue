<template>
  <div
    v-if="isVisible"
    id="default-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-50"
  >
    <div class="relative w-full max-w-2xl p-4 max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Unduh Rekap
          </h3>
          <button
            @click="$emit('close')"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="flex items-center w-full py-5 justify-evenly">
          <button @click="prevMonth" class="h-10 w-10 rounded-full">
            <Icon name="ep:arrow-left-bold" class="text-white" />
          </button>
          <div
            class="bg-white rounded-md items-center justify-center h-full py-2 px-32"
          >
            <p>{{ formattedMonth }}</p>
          </div>
          <button @click="nextMonth" class="h-10 w-10">
            <Icon name="ep:arrow-right-bold" class="text-white" />
          </button>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="$emit('close')"
            type="button"
            class="block w-full px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Unduh
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

export default defineComponent({
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const currentDate = ref(new Date());
    const currentMonth = ref(currentDate.value.getMonth() - 1);

    const formatMonth = (monthIndex: number, year: number) => {
      const date = new Date(year, monthIndex);
      return date.toLocaleString("default", { month: "long", year: "numeric" });
    };

    const formattedMonth = computed(() => {
      const currentYear = currentDate.value.getFullYear();
      const adjustedMonthIndex = (currentMonth.value + 12) % 12;
      return formatMonth(adjustedMonthIndex, currentYear);
    });

    const prevMonth = () => {
      currentMonth.value--;
    };

    const nextMonth = () => {
      if (currentMonth.value < currentDate.value.getMonth() - 1) {
        currentMonth.value++;
      }
    };

    onMounted(() => {
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.value.getMonth() - 1);
      currentMonth.value = oneMonthAgo.getMonth();
    });

    return {
      formattedMonth,
      prevMonth,
      nextMonth,
    };
  },
});
</script>
