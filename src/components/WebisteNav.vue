<script setup>
import { ref } from 'vue'

const ActiveLink = ref('Home')
const NavbarLinks = ref(['Home', 'About', 'Services', 'Works', 'Blog', 'Contact'])
</script>

<template>
  <nav class="site-navbar">
    <div class="container">
      <div class="content-wrapper">
        <div class="logo">
          <img src="@/assets/images/logo.svg" alt="Jesse Interiors Logo">
        </div>
        <div class="left-side">
          <ul class="nav-links">
            <li v-for="link in NavbarLinks" :key="link">
              <a href="#" class="nav-link" v-html="link" :class="{ active: ActiveLink === link }" @click="ActiveLink = link"></a>
            </li>
          </ul>
          <div class="nav-actions">
            <button><Icon icon="heroicons-outline:search" class="icon" /> </button>
            <button><Icon icon="heroicons-outline:menu-alt-1" class="icon rotate-180" /> </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.site-navbar {
  @apply fixed top-0 left-0 bg-neutral-50 w-full h-[130px] flex items-center;
  box-shadow: 0 0 50px #00000022;
  .content-wrapper {
    @apply flex items-center justify-between;
    .left-side {
      @apply flex items-center gap-x-20;
      .nav-links {
        @apply flex items-center gap-x-14;
        .nav-link {
          @apply relative uppercase;
          &::after {
            @apply content-[''] absolute top-full left-0  translate-y-[52px] scale-x-[2] h-1 w-full bg-transparent
            transition duration-300 rounded-full ease-in;
          }
          &.active{ @apply font-medium; &::after { @apply bg-yellow-500 }}
        }
      }
      .nav-actions { @apply flex items-center gap-x-9 }
    }
  }
}
</style>