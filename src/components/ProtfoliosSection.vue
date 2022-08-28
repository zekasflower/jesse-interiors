<script setup>
import { ref } from 'vue'

import pic1 from '@/assets/images/portfolios/pic1.png'
import pic2 from '@/assets/images/portfolios/pic2.png'
import pic3 from '@/assets/images/portfolios/pic3.png'
import pic4 from '@/assets/images/portfolios/pic4.png'
import pic5 from '@/assets/images/portfolios/pic5.png'
import pic6 from '@/assets/images/portfolios/pic6.png'

const portfolios = ref([
  { image: pic1, title: 'The urban artville' },
  { image: pic2, title: 'Magnolia whimsical boxed ' },
  { image: pic3, title: 'DeCore minimalism' },
  { image: pic4, title: 'Cityscapes plant care' },
  { image: pic5, title: 'Moretti furnished' },
  { image: pic6, title: 'Modern galaxy Joy' },
])
</script>

<template>
  <section class="portfolios-section">
    <div class="triangle-shape bottom-left"></div>
    <div class="container">
      <div class="content-wrapper">
        <div class="section-info">
          <h2 class="main-title">My portfolios</h2>
          <h4>Designed with my knowledge, skills & passion.</h4>
        </div>
        <div class="section-grid">
          <img src="@/assets/images/dots.png" class="dots-img start">
          <div class="grid-box" v-for="portfolio in portfolios" :key="portfolio.title">
            <img :src="portfolio.image">
            <h4 v-html="portfolio.title"></h4>
          </div>
          <img src="@/assets/images/dots.png" class="dots-img end">
        </div>
        <button class="btn-primary mt-16">
          View all works <Icon icon="heroicons-outline:arrow-narrow-right" class="icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.portfolios-section {
  @apply pt-44 pb-48 relative text-center overflow-hidden;
  .content-wrapper {
    .section-info {
      @apply pb-[105px];
      h4 { @apply text-[26px] mb-5 }
    }
    .section-grid {
      @apply grid grid-cols-3 gap-[72px] relative z-10;
      .grid-box {
        h4 { @apply font-playfair text-[28px] tracking-wide mt-5 ml-5 text-left; }
        &:nth-of-type(3n + 2) { @apply relative -top-[30px] }
      }
      .dots-img {
        @apply absolute -z-10;
        &.start { @apply -top-28 -left-36 }
        &.end { @apply -bottom-12 -right-36 }
      }
    }
  }
}
</style>