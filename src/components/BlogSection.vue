<script setup>
import { ref } from 'vue'

import pic1 from '@/assets/images/blog/pic1.png'
import pic2 from '@/assets/images/blog/pic2.png'
import pic3 from '@/assets/images/blog/pic3.png'

const articles = ref([
  { image: pic1, date: '16 Feb, 2021', title: 'minimalism is always good for interior design' },
  { image: pic2, date: '17 Feb, 2021', title: 'Top modern interior designing trends in 2021' },
  { image: pic3, date: '18 Feb, 2021', title: 'Ten main elements for beautiful interior designing' },
])
</script>

<template>
  <section class="blog-section" id="Blog">
    <div class="container">
      <div class="content-wrapper">
        <div class="section-info">
          <h2 class="main-title has-circle">Blog Articles</h2>
          <h4>Read some latest blog articles posts.</h4>
        </div>
        <div class="section-grid">
          <div class="grid-box" v-for="article in articles" :key="article.title">
            <img :src="article.image">
            <div class="info">
              <h5 v-html="article.date"></h5>
              <h4 v-html="article.title"></h4>
            </div>
          </div>
        </div>
        <button class="btn-primary mt-16">
          Read articles <Icon icon="heroicons-outline:arrow-narrow-right" class="icon" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.blog-section {
  @apply pt-40 pb-20 relative text-center overflow-hidden;
  .content-wrapper {
    .section-info {
      @apply pb-16;
      .main-title { @apply w-fit mx-auto mb-7 before:-top-4 }
      h4 { @apply text-[26px] }
    }
    .section-grid {
      @apply grid grid-cols-3 gap-[72px] relative z-10;
      .grid-box {
        .info {
          @apply text-left px-5 pt-5;
          h5 { @apply text-lg text-green-500 }
          h4 { @apply font-playfair text-[28px] tracking-wide mt-2 capitalize; }
        }
      }
    }
  }
}
</style>