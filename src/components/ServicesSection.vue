<template>
  <section class="services-section">
    <div class="triangle-shape bottom-right"></div>
    <div class="container">
      <div class="content-wrapper">
        <div class="left-section">
          <h2 class="main-title has-circle !mb-14">Services</h2>
          <h4>Some of my capabilities for your solutions.</h4>
          <p>Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis. Quis nibh ut bibendum nisl quis placerat proin tortor. Mattis in neque.</p>
          <p>Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis quis nibh ut bibendum.</p>
          <button class="btn-primary mt-14">
            Contact me <Icon icon="heroicons-outline:arrow-narrow-right" class="icon" />
          </button>
        </div>
        <div class="right-section">
          <img src="@/assets/images/services/pic1.png">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.services-section {
  @apply py-40 bg-neutral-100 relative;
  box-shadow: 0 0 50px -10px #05363422;
    .content-wrapper {
    @apply flex gap-x-[76px];
    .left-section {
      @apply flex-1;
      h4 { @apply text-[26px] mb-5 }
      p { @apply text-lg font-light mb-5 leading-loose }
    }
    .right-section {
      @apply w-[58%]
    }
  }
}
</style>