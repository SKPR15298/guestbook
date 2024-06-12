<template>
  <div
    class="background flex flex-col min-h-screen w-full bg-cover brightness-90"
  >
    <!-- Header -->
    <LayoutHeader />
    <!-- Contents -->
    <LayoutMain />
    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<style scoped>
.background {
  background-image: url("./assets/img/bg1.jpg");
}
</style>
