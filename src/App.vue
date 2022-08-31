<script setup>
import WebisteNav from '@/components/WebisteNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import BrandsSection from '@/components/BrandsSection.vue'
import AboutMeSection from '@/components/AboutMeSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ProtfoliosSection from '@/components/ProtfoliosSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import BlogSection from '@/components/BlogSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'

import { onMounted, ref } from 'vue'

const windowWidth = ref(null)

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', () => { windowWidth.value = window.innerWidth })
})
</script>

<template>
  <p
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-light text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full text-center"
    v-if="windowWidth < 1656">
    Oh! Oh! Webiste is not ready for this screen yet <br> <br>
    Ready for screens over 1656px
  </p>
  <template v-else>
    <WebisteNav />
    <HeroSection />
    <BrandsSection />
    <AboutMeSection />
    <ServicesSection />
    <ProtfoliosSection />
    <TestimonialsSection />
    <BlogSection />
    <NewsletterSection />
    <ContactSection />
    <FooterSection />
  </template>
</template>