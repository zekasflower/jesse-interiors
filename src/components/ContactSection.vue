<template>
  <section class="contact-section">
    <div class="container">
      <div class="content-wrapper">
        <img src="@/assets/images/dots.png" class="dots-img">
        <div class="info-section">
          <h2>Feel Free to Contact Me</h2>
          <p>
            If you have any projects in mind say hello at
            <span>contact@templatesjungle.com</span>
            or just call me at <span>+111 1234 2344 1232.</span>
          </p>
        </div>
        <button>Contact me</button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.contact-section {
  @apply py-[150px] bg-neutral-100;
  box-shadow: 0 0 50px -10px #05363422;
  .content-wrapper {
    @apply relative flex items-center gap-x-40 justify-between mx-auto max-w-[78.75rem] z-10;
    .dots-img { @apply absolute rotate-45 top-1/2 -translate-y-1/2 -left-56 -z-10 }
    .info-section {
      h2 { @apply font-playfair font-bold text-[66px] mb-3 }
      p {
        @apply max-w-[42rem] font-light;
        span { @apply font-normal }
      }
    }
    button { @apply text-lg font-medium uppercase py-7 px-20 bg-green-900 text-neutral-50 tracking-wider transition duration-300 hover:bg-opacity-80 }
  }
}
</style>