<template>
  <section class="brands-section">
    <div class="container">
      <img src="@/assets/images/brands/logo1.svg" />
      <img src="@/assets/images/brands/logo4.svg" />
      <img src="@/assets/images/brands/logo3.svg" />
      <img src="@/assets/images/brands/logo5.svg" />
      <img src="@/assets/images/brands/logo2.svg" />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.brands-section {
  @apply py-20 border-b border-neutral-150;
  .container {
    @apply flex items-center justify-around gap-x-8
  }
}
</style>