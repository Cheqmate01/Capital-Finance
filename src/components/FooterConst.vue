<template>
  <footer class="w-full bg-black text-gray-400 text-xs sm:text-base">
    <div class="m-auto flex flex-col gap-6 sm:gap-10 pt-16 sm:pt-28 px-2 sm:px-0">
      <div class="w-full m-auto flex flex-col sm:flex-row flex-wrap justify-between gap-8 sm:gap-6 px-4 lg:px-12">
        <div class="w-full sm:w-1/3 lg:w-1/4 flex-none mb-4 sm:mb-0">
          <FooterLink text="Company">
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">About Us</h3>
            </template>
            <p>Standard Capital Finance is a leading investment and asset management company dedicated to providing premium financial solutions to individual and corporate investors.</p>
            <!--ul class="social-media-links d-flex align-items-center mt-3">
                              <li>
                  <a href="https://bd.linkedin.com/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>                  </a>
                </li>
                              <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-instagram"></i>                  </a>
                </li>
                              <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i class="fab fa-twitter"></i>                  </a>
                </li>
                              <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook-f"></i>                  </a>
                </li>
                          </ul-->
          </FooterLink>
        </div>
        <div class="w-full sm:w-auto flex-none mb-4 sm:mb-0">
          <FooterLink text="Quick Links">
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Quick Links</h3>
            </template>
            <ul class="flex flex-col gap-y-3">
              <li v-if="!isAuthenticated"><RouterLink to="/auth/login" class="text-white text-sm hover:text-green-400 nav-link">Login</RouterLink></li>
              <li v-else><RouterLink to="/" class="text-white text-sm hover:text-green-400 nav-link">Home</RouterLink></li>
              <li v-if="!isAuthenticated"><RouterLink to="/auth/signup" class="text-white text-sm hover:text-green-400 nav-link">Register</RouterLink></li>
              <li v-else><RouterLink to="/about" class="text-white text-sm hover:text-green-400 nav-link">About</RouterLink></li>
              <li><RouterLink to="/contact" class="text-white text-sm hover:text-green-400 nav-link">Contact</RouterLink></li>
            </ul>
          </FooterLink>
        </div>
        <div class="w-full sm:w-auto flex-none mb-4 sm:mb-0">
          <FooterLink>
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Pages</h3>
            </template>
            <ul class="flex flex-col gap-y-3">
              <li><a class="cursor-pointer text-white text-sm hover:text-green-400 nav-link">Company Policy</a></li>
              <li><a class="cursor-pointer text-white text-sm hover:text-green-400 nav-link">Terms of Service</a></li>
              <li><a class="cursor-pointer text-white text-sm hover:text-green-400 nav-link">Privacy Policy</a></li>
            </ul>
          </FooterLink>
        </div>
        <div class="w-full sm:w-1/3 lg:w-1/4 flex-none mb-4 sm:mb-0">
          <FooterLink>
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Contact Us</h3>
            </template>
            <ul class="">
              <li class="grid grid-cols-5">
                <font-awesome-icon icon="fa-solid fa-location-dot" class="my-auto text-green-400" />
                <p class="col-span-4">Hygiëastraat 10 1076 RM Amsterdam, Netherlands.</p>
              </li>
              <li class="grid grid-cols-5">
                <font-awesome-icon icon="fa-solid fa-phone" class="my-auto text-green-400" />
                <p class="col-span-4 my-auto">+447771107917</p>
              </li>
              <li class="grid grid-cols-5">
                <font-awesome-icon icon="fa-solid fa-download" class="my-auto text-green-400" />
                <a href="images/nedvesttrust.pdf" class="text-white text-sm col-span-4 my-auto hover:text-green-400 nav-link" download="images/nedvesttrust.pdf"><span>Download Company PDF</span></a>
              </li>
            </ul>
          </FooterLink>
        </div>
      </div>
      <div>
        <div class="text-center">
          <!-- <a href="../?a=home" class="footer-logo"><img src="assets/images/logoIcon/logo.png" alt="logo"></a> -->
        </div>
        <hr class="border-gray-900 mx-2 sm:mx-10">
        <div class="flex flex-col sm:flex-row mx-2 sm:mx-12">
          <p class="my-4 sm:my-8 text-center">Copyright © 2024 standardcapitalfinance.org. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLink from './templates/FooterLinks.vue';
import { isAuthenticated } from '@/auth';
</script>
