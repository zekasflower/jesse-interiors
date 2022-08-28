<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    client: {
      name: 'Kelly Garcia',
      title: 'KG Architects'
    },
    text: `A pellen tesque pretium feugiat vel morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim pellen tesque est in neque, elit habi mattis.`
  },
  {
    client: {
      name: 'Jacque Adler',
      title: 'Aproc construction'
    },
    text: `Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis. Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque.`
  },
  {
    client: {
      name: 'Kerry Frank',
      title: 'Adler architecture'
    },
    text: `Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque. Feugiat hac porttitor sem dictum velit, elementum odio sed eget facilisis.`
  },
])
</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="content-wrapper">
        <header>
          <h5>Testimonials</h5>
          <h2 class="main-title">What my clients says</h2>
        </header>
        <div class="testimonials">
          <div class="box" v-for="testimonial, index in testimonials" :key="index">
            <p class="box-value"><q v-html="testimonial.text"></q></p>
            <div class="client-info">
              <h3 v-html="testimonial.client.name"></h3>
              <h5 v-html="testimonial.client.title"></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.testimonials-section {
  @apply py-36 bg-neutral-100;
  box-shadow: 0px 0 45px 1px rgba(93, 102, 39, 0.04);
  .content-wrapper {
    header {
      h5 { @apply text-lg mb-3 text-green-500 }
      .main-title { @apply mb-[75px] }
    }
    .testimonials {
      @apply grid grid-cols-3 gap-x-10;
      .box {
        @apply bg-neutral-50 border border-neutral-150 p-14;
        box-shadow: 0px 2px 45px 1px rgba(93, 102, 39, 0.04);
        .box-value { @apply text-2xl font-light leading-[1.9] mb-11 }
        .client-info {
          @apply relative pl-24;
          &::before { @apply content-[''] absolute left-0 top-5 h-px w-[70px] bg-neutral-300 }
          h3 { @apply font-playfair text-[28px] tracking-wide mb-2.5 }
          h5 { @apply text-green-500 }
        }
      }
    }
  }
}
</style>