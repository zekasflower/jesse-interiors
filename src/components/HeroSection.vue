<template>
  <header class="hero-section">
    <div class="triangle-shape bottom-left"></div>
    <img src="@/assets/images/hero-1.png" class="bg-img">
    <div class="container">
      <div class="content-wrapper">
        <h1>Nautical Modern Style</h1>
        <p>Suspendisse tempus rhoncus enim pellentesque est vehicula vitae eget. Viverra imperdiet felis sollicitudin pellentesque cursus sit feugiat hac porttitor.</p>
        <button class="btn-primary">
          View Project <Icon icon="heroicons-outline:arrow-narrow-right" class="icon" />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.hero-section {
  @apply h-[calc(100vh-130px)] bg-neutral-100 relative max-h-[1200px];
  box-shadow: 0 0 50px -10px #05363422;
  .bg-img { @apply absolute right-0 top-0 h-full w-[62%] object-cover }
  .container {
    @apply h-full;
    .content-wrapper {
      @apply flex flex-col justify-center h-full w-[30rem]  pb-14;
      h1 { @apply text-[66px] font-playfair font-bold leading-snug mb-4 tracking-wide }
      p { @apply text-lg font-light mb-14 }
    }
  }
}
</style>