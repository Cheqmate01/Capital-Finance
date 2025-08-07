<template>
  <footer class="w-full bg-black text-gray-400">
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
          d="M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,165.3C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>

    <div class="m-auto flex flex-col gap-10 pt-28">
      <div class="w-fit m-auto flex flex-row flex-wrap-reverse justify-center-safe gap-6">
        <div class="w-1/3 flex-none">
          <FooterLink text="Company">
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">About Us</h3>
            </template>
            <p>Standard Capital Finnance is a leading investment and asset management company dedicated to providing premium financial solutions to individual and corporate investors.</p>
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
        <div class="flex-none">
          <FooterLink text="Quick Links">
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Quick Links</h3>
            </template>
            <ul class="flex flex-col gap-y-3">
              <li><a href="../?a=login" class="text-white text-sm hover:text-green-400 nav-link">Login</a></li>
              <li><a href="../?a=signup" class="text-white text-sm hover:text-green-400 nav-link">Register</a></li>
              <li><a href="index15a0.html?a=support" class="text-white text-sm hover:text-green-400 nav-link">Contact</a></li>
            </ul>
          </FooterLink>
        </div>
        <div class="flex-none">
          <FooterLink>
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Pages</h3>
            </template>
            <ul class="flex flex-col gap-y-3">
              <li><a href="index3e24.html?a=company-policy" class="text-white text-sm hover:text-green-400 nav-link">Company Policy</a></li>
              <li><a href="indexa972.html?a=rules" class="text-white text-sm hover:text-green-400 nav-link">Terms of Service</a></li>
              <li><a href="indexff70.html?a=privacy-policy" class="text-white text-sm hover:text-green-400 nav-link">Privacy Policy</a></li>
            </ul>
          </FooterLink>
        </div>
        <div class="w-1/5 flex-none">
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
                <font-awesome-icon icon="fa-solid fa-envelope" class="my-auto text-green-400" />
                <p class="col-span-4 my-auto">support@fxturboinvest.org</p>
              </li>
              <li class="grid grid-cols-5">
                <font-awesome-icon icon="fa-solid fa-download" class="my-auto text-green-400" />
                <a href="images/nedvesttrust.pdf" class="text-white text-sm col-span-4 my-auto hover:text-green-400 nav-link" download="images/nedvesttrust.pdf"><span>Download Company PDF</span></a>
              </li>
            </ul>
          </FooterLink>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="text-center">
            <!-- <a href="../?a=home" class="footer-logo"><img src="assets/images/logoIcon/logo.png" alt="logo"></a> -->
          </div>
          <hr class="border-gray-900 mx-10">
          <div class="flex flex-row mx-12">
            <p class="my-8">Copyright © 2024 standardcapitalfinance.org. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLink from './templates/FooterLinks.vue';
</script>