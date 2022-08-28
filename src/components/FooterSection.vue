<script setup>
import { ref } from 'vue'

const ActiveLink = ref('Home')
const QuickLinks = ref(['Home', 'About', 'Works', 'Blog'])
const ServicesLinks = ref(['Residential', 'Commercial & hospitality ', 'Multifamily ', 'All Services'])
const ContactLinks = ref(['info@templatesjungle.com', '15Th Street Avenue, New York, USA', '011-554-8798-6556'])
</script>

<template>
  <footer class="footer-section">
    <div class="triangle-shape top-right"></div>
    <div class="container">
      <div class="content-wrapper">
        <div class="box">
          <img src="@/assets/images/logo.svg" class="site-logo">
          <p>Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis quis nibh ut bibendum.</p>
        </div>
        <div class="box">
          <h3>Quick links </h3>
          <ul>
            <li v-for="link in QuickLinks" :key="link">
              <a href="#" v-html="link" :class="{ 'font-normal': ActiveLink === link }" @click.prevent="ActiveLink = link"></a>
            </li>
          </ul>
        </div>
        <div class="box">
          <h3>Services</h3>
          <ul> <li v-for="link in ServicesLinks" :key="link" v-html="link"> </li> </ul>
        </div>
        <div class="box">
          <h3>Get in touch</h3>
          <ul> <li v-for="link in ContactLinks" :key="link" v-html="link"> </li> </ul>
        </div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="container">
      <div class="copyrights">
        <p>© 2021 <span>TemplatesJungle</span>. All rights reserved.</p>
        <div class="social-icons">
          <Icon icon="fa-brands:facebook-f" class="icon" />
          <Icon icon="fa-brands:instagram" class="icon" />
          <Icon icon="fa-brands:linkedin-in" class="icon" />
          <Icon icon="fa-brands:twitter" class="icon" />
          <Icon icon="fa-brands:blogger-b" class="icon" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer-section {
  @apply relative pt-36;
  .content-wrapper {
    @apply grid grid-cols-[1fr,.55fr.55fr.8fr] gap-x-20 pb-20;
    .box {
      .site-logo { @apply mb-3 }
      p { @apply text-lg font-light leading-loose max-w-[23rem] }
      h3 { @apply font-playfair text-2xl mb-7 }
      ul { @apply list-none font-light text-lg leading-[2.2]; }
    }
  }
  .separator { @apply border-t border-neutral-150 w-full }
  .copyrights {
    @apply flex items-center justify-between gap-x-10 py-9 text-lg;
    p { @apply font-light; span { @apply font-normal } }
    .social-icons {
      @apply flex items-center gap-x-9;
      .icon { @apply text-green-500 transition duration-200 hover:text-green-900 cursor-pointer }
    }
  }
}
</style>