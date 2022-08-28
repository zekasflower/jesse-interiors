<template>
  <section class="newsletter-section">
    <div class="container">
      <div class="content-wrapper">
        <div class="pic-section">
          <div class="pic-wrapper">
            <img src="@/assets/images/newsletter/main.png" class="main-img">
          </div>
        </div>
        <div class="right-section">
          <h2 class="main-title has-circle !mb-11">Newsletter</h2>
          <h4>Subscribe my newsletter for all offers & latest news.</h4>
          <p>A pellentesque pretium feugiat vel morbi sagittis lorem habitasse cursus. Suspendisse tempus rhoncus enim pellentesque est in neque, elit mattis vehicula vitae eget. Viverra imperdiet felis sollicitudin tesque cursus sit.</p>
          <form class="newsletter-form" @submit.prevent>
            <input type="email" placeholder="Enter your e-mail address here">
            <button> Submit <Icon icon="bx:paper-plane" class="icon" /> </button>
          </form>
        </div>
      </div>
    </div>
    <img src="@/assets/images/dots.png" class="dots-img">
  </section>
</template>

<style lang="postcss" scoped>
.newsletter-section {
  @apply py-48 relative overflow-hidden;
  .content-wrapper {
    @apply flex gap-x-32 items-center;
    .pic-section {
      @apply flex-1;
      .pic-wrapper {
      @apply relative ml-12 w-fit;
        .main-img { @apply ml-auto }
        &::before { @apply content-[''] absolute -left-12 top-12 w-full h-full border-[14px] border-neutral-100 -z-10 }
      }
    }
    .right-section {
      @apply flex-1;
      h4 { @apply text-[26px] mb-5 }
      p { @apply text-lg font-light mb-16 leading-loose }
      .newsletter-form {
        @apply flex items-stretch;
        input { @apply flex-1 py-5 px-9 italic outline-none bg-transparent placeholder:text-green-500 text-lg border border-green-200 focus:border-green-900 transition duration-300 ease-in-out }
        button {
          @apply flex-none font-medium uppercase inline-flex items-center gap-x-1.5 bg-green-900 text-white px-9 transition duration-300 hover:bg-opacity-80;
          .icon { @apply text-lg }
        }
      }
    }
  }
  .dots-img { @apply absolute -right-24 rotate-45 bottom-16 }
}
</style>