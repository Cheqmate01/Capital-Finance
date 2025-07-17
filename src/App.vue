<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FooterLink from './components/templates/FooterLinks.vue';
</script>

<template>
  <header>
    <div>
      <div>
        <h1>Capital</h1>
        <p>finance</p>
      </div>
      <div>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="w-full">
    <div class="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
          d="M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,165.3C672,117,768,75,864,96C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>

    <div class="m-auto flex flex-col gap-10 py-28">
      <div class="w-fit m-auto flex flex-row flex-wrap-reverse justify-center-safe gap-6">
        <div class="w-1/3 flex-none">
          <FooterLink text="Company">
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">About Us</h3>
            </template>
            <p>Capital Finnance is a leading investment and asset management company dedicated to providing premium financial solutions to individual and corporate investors. With a deep understanding of global markets and a commitment to excellence, we deliver tailored investment strategies designed to meet the unique goals of our clients.

</p>
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
            <ul class="flex flex-col gap-y-1">
              <li><a href="../?a=login" class="text-shadow-blue-400">Login</a></li><hr>
              <li><a href="../?a=signup" class="text-shadow-blue-400">Register</a></li><hr>
              <li><a href="index15a0.html?a=support" class="text-shadow-blue-400">Contact</a></li><hr>
            </ul>
          </FooterLink>
        </div>
        <div class="flex-none">
          <FooterLink>
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Page</h3>
            </template>
            <ul class="flex flex-col gap-y-1">
              <li><a href="index3e24.html?a=company-policy" class="text-shadow-blue-400">Company Policy</a></li><hr>
              <li><a href="indexa972.html?a=rules" class="text-shadow-blue-400">Terms of Services</a></li><hr>
              <li><a href="indexff70.html?a=privacy-policy" class="text-shadow-blue-400">Privacy Policy</a></li><hr>
            </ul>
          </FooterLink>
        </div>
        <div class="w-1/5 flex-none">
          <FooterLink>
            <template #heading>
              <h3 class="vollkorn-700 text-white text-2xl">Contact Us</h3>
            </template>
            <ul class="">
              <li>
                <i class="fas fa-location-arrow"></i>
                <p>Hygiëastraat 10 1076 RM Amsterdam, Netherlands.</p>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <p>support@fxturboinvest.org</p>
              </li>
              <li>
                <i class="fas fa-download"></i> <a href="images/nedvesttrust.pdf" download="images/nedvesttrust.pdf">
                  <span>Download Company PDF</span></a>

              </li>
            </ul>
          </FooterLink>
        </div>
      </div>
      <div class="">
        <div class="">
          <div class="col-lg-3 col-sm-6 order-lg-1 order-1 text-sm-start text-center">
            <!-- <a href="../?a=home" class="footer-logo"><img src="assets/images/logoIcon/logo.png" alt="logo"></a> -->
          </div>

          <div class="col-lg-9 col-sm-6 order-lg-3 order-2 text-sm-end text-center">
            <p>Copyright © 2024 fxturboinvest.org. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->