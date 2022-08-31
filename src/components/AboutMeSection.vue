<template>
  <section class="about-me" id="About">
    <div class="container">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="@/assets/images/about/main.png" class="main-img">
          <img src="@/assets/images/about/alt.png" class="alt-img">
        </div>
        <div class="right-section">
          <h2 class="main-title has-circle !mb-14">About Me</h2>
          <h4>"Everything is designed. Few things are designed well."</h4>
          <p>A pellentesque pretium feugiat vel morbi sagittis lorem habitasse cursus. Suspendisse tempus rhoncus enim pellentesque est in neque, elit mattis vehicula vitae eget. Viverra imperdiet felis sollicitudin tesque cursus sit.</p>
          <p>Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec ut eget facilisis. Quis nibh bibendum nisl quis placerat proin tortor. Mattis in neque, elit mattis morbi sagittis lorem habitasse consequat.</p>
          <button class="btn-primary mt-14">
            Read more <Icon icon="heroicons-outline:arrow-narrow-right" class="icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.about-me {
  @apply pt-60 pb-52;
  .content-wrapper {
    @apply flex gap-x-32;
    .left-section {
      @apply flex-1 relative;
      .main-img { @apply ml-auto }
      .alt-img { @apply absolute -top-[90px] left-5 border-[14px] border-neutral-50 }
    }
    .right-section {
      @apply flex-1;
      h4 { @apply text-[26px] mb-5 }
      p { @apply text-lg font-light mb-7 leading-loose }
    }
  }
}
</style>