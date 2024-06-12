<template>
  <div
    class="flex flex-grow items-center justify-center md:container md:mx-auto h-auto"
  >
    <InterfacePengunjung v-if="$route.path !== '/operator'" />
    <InterfaceOperator v-if="$route.path === '/operator'" />
  </div>
</template>
