<template>
    <div class="bg-[url('/src/assets/AuthPages/AuthBackgroundSVG.png')] bg-cover bg-center bg-fixed min-h-screen">
        <RouterLink to="/">
            <div class="fixed top-4 left-4 bg-white hover:bg-green-400 transition-all duration-300 rounded-full px-1.5 py-2">
                <font-awesome-icon icon="fa-solid fa-arrow-left" class="text-lg sm:text-2xl text-green-500" />
            </div>
        </RouterLink>
        
  <div class="bg-[#070024] min-h-screen flex flex-col items-center justify-center px-2 py-8 font-sans">
    <div class="max-w-lg w-full bg-white rounded-2xl shadow-lg p-6 sm:p-10">
      <h1 class="text-2xl sm:text-3xl font-extrabold text-green-500 mb-4 text-center">Contact Us</h1>
      <p class="text-gray-600 text-center mb-6 text-sm sm:text-base">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
      <form class="space-y-4">
        <div>
          <label for="name" class="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-900" placeholder="Your Name" />
        </div>
        <div>
          <label for="email" class="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-900" placeholder="you@example.com" />
        </div>
        <div>
          <label for="message" class="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-gray-900" placeholder="Type your message..."></textarea>
        </div>
        <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm sm:text-base">Send Message</button>
      </form>
      <div class="mt-8 text-center text-xs sm:text-sm text-gray-500">
        <p>Or reach us directly at <a href="mailto:info@capitalfinance.com" class="text-green-500 hover:underline">info@capitalfinance.com</a></p>
        <p class="mt-1">Phone: <a href="tel:+1234567890" class="text-green-500 hover:underline">+1 234 567 890</a></p>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup>
// You can add form submission logic here if needed
</script>
