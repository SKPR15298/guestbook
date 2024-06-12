<template>
  <div>
    <header
      class="flex px-10 py-3 align-middle justify-between shadow-lg backdrop-brightness-90 backdrop-blur-sm"
    >
      <!-- Logo Section -->
      <div class="flex size-14 justify-around gap-5">
        <img src="../../assets/img/smkn2.png" alt="SMKN2 Logo" />
        <img src="../../assets/img/inorasi.png" alt="Inorasi Logo" />
      </div>

      <!-- Navigation Section -->
      <nav class="flex flex-row-reverse items-center gap-5 justify-center">
        <button
          :class="[
            'w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out',
            isActive
              ? 'bg-white border-black/15 opacity-100'
              : 'bg-white/25 border-white/35 opacity-65 hover:opacity-100',
          ]"
          @click="toggleActive"
          aria-label="Back"
        >
          <Icon
            :name="isActive ? 'ep:close-bold' : 'ep:arrow-left-bold'"
            size="20px"
            :class="isActive ? 'text-black' : 'text-white'"
          />
        </button>
        <transition
          enter-active-class="transition-transform duration-300 ease-in-out"
          enter-class="transform translate-x-full"
          leave-active-class="transition-transform duration-100 ease-in-out"
          leave-class="transform translate-x-full"
        >
          <span v-if="isActive" class="flex gap-5 items-center justify-center">
            <button
              class="w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out text-white bg-white/25 border-white/35 opacity-65 hover:text-cyan-400 hover:border-cyan-300 hover:opacity-100"
              aria-label="Pengunjung"
            >
              <NuxtLink to="/">
                <Icon name="ep:avatar" size="20px" />
              </NuxtLink>
            </button>
            <button
              class="w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out text-white bg-white/25 border-white/35 opacity-65 hover:text-amber-400 hover:border-amber-300 hover:opacity-100"
              aria-label="Operator"
            >
              <NuxtLink to="/operator">
                <Icon name="ep:tools" size="20px" />
              </NuxtLink>
            </button>
          </span>
        </transition>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}
</script>
