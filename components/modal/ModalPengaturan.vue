import type { Icon } from '.nuxt/components'; import type { Icon } from
'.nuxt/components'; import type { Icon } from '.nuxt/components';
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
            Pengaturan
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
        <div class="flex flex-col w-full gap-6 py-5 justify-evenly">
          <div class="px-4 flex flex-col gap-2">
            <p class="text-black font-semibold dark:text-white">Data & Cache</p>
            <div class="flex gap-3">
              <div
                class="flex items-center justify-between py-2.5 bg-gray-400 rounded-md w-full px-4"
              >
                <p class="font-medium text-white">Hapus data otomatis</p>
                <div class="flex gap-4 items-center">
                  <div class="flex items-center gap-2">
                    <button @click="decrement">
                      <icon name="ep:arrow-left-bold" class="text-white" />
                    </button>
                    <div
                      class="text-white bg-gray-500 p-4 h-5 w-5 flex items-center justify-center rounded-md"
                    >
                      {{ currentNumber }}
                    </div>
                    <button @click="increment">
                      <icon name="ep:arrow-right-bold" class="text-white" />
                    </button>
                  </div>
                  <p class="text-white font-medium italic">Tahun</p>
                </div>
              </div>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Simpan
              </button>
            </div>
          </div>
          <div class="inline-flex items-center justify-center px-5 w-full">
            <hr class="w-full h-px my-5 bg-white/35 border-0" />
          </div>
          <div class="px-4 flex flex-col gap-2">
            <p class="text-black font-semibold dark:text-white">
              Penambahan Data Guru
            </p>
            <div class="flex">
              <input
                type="text"
                id="large-input"
                placeholder="Masukkan nama lengkap guru beserta gelar"
                class="block w-full px-4 py-2.5 text-gray-900 border border-gray-300 rounded-s-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-white/55"
              />
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-e-lg text-sm px-5 py-2.5 text-center"
              >
                Simpan
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center mb-10">
            <p class="text-white">
              Atau pilih data guru dalam file exel
              <span
                class="italic underline cursor-pointer text-blue-500"
                @click="openFileExplorer"
              >
                disini
              </span>
            </p>
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept=".xlsx, .xls"
              @change="handleFileSelection"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      currentNumber: 1,
    };
  },

  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    increment() {
      this.currentNumber++;
    },
    decrement() {
      if (this.currentNumber > 1) {
        this.currentNumber--;
      }
    },

    openFileExplorer() {
      (this.$refs.fileInput as HTMLInputElement).click();
    },
    handleFileSelection(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      const selectedFile = fileInput.files?.[0];
      if (selectedFile) {
        console.log("Selected file:", selectedFile);
      }
    },
  },
});
</script>
