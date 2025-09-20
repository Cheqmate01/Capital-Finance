<template>
  <div class="bg-[#070024]">
    <div class="max-w-4xl mx-auto px-2 sm:px-6 py-8 sm:py-20 text-gray-900 font-sans">
      <section class="text-center mb-10">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 mb-2">About Capital Finance</h1>
        <p class="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Capital Finance is a member-driven asset management cooperative specializing in crypto investments and real estate. We empower individuals and businesses to grow their wealth through innovative investment strategies, expert guidance, and a collaborative approach.
        </p>
      </section>

      <section class="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
        <div class="flex-1 bg-gray-900 bg-opacity-60 rounded-xl p-5 shadow">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2">Our Mission</h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-200">To deliver accessible, transparent, and reliable financial services that foster growth and prosperity for our clients and communities.</p>
        </div>
        <div class="flex-1 bg-gray-900 bg-opacity-60 rounded-xl p-5 shadow">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2">Our Vision</h2>
          <p class="text-sm sm:text-base md:text-lg text-gray-200">To be the most trusted partner in financial success, recognized for our integrity, expertise, and commitment to excellence.</p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-4">Our Core Values</h2>
        <ul class="list-disc pl-5 space-y-2 text-sm sm:text-base md:text-lg text-gray-200">
          <li><span class="font-semibold text-green-300">Integrity:</span> We uphold the highest ethical standards in all our dealings.</li>
          <li><span class="font-semibold text-green-300">Innovation:</span> We embrace change and continuously seek better solutions.</li>
          <li><span class="font-semibold text-green-300">Client Focus:</span> Our clients’ needs are at the heart of everything we do.</li>
          <li><span class="font-semibold text-green-300">Excellence:</span> We strive for excellence in every service we provide.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-4">Frequently Asked Questions</h2>
        <div v-for="(faq, idx) in faqs" :key="idx" class="mb-4 bg-gray-800 bg-opacity-70 rounded-lg p-4">
          <h3 class="font-semibold text-base sm:text-lg md:text-xl text-green-300 mb-1">{{ faq.question }}</h3>
          <p class="text-sm sm:text-base md:text-lg text-gray-200">{{ faq.answer }}</p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-4">What Our Clients Say</h2>
        <div v-for="(testimonial, idx) in testimonials" :key="idx" class="mb-4 bg-gray-900 bg-opacity-60 rounded-lg p-4">
          <blockquote class="italic text-base sm:text-lg md:text-xl text-gray-100">"{{ testimonial.quote }}"</blockquote>
          <p class="client text-sm sm:text-base md:text-lg text-green-300 mt-2">- {{ testimonial.client }}</p>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-4">Meet Our Team</h2>
        <div class="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <div v-for="(member, idx) in team" :key="idx" class="w-full sm:flex-1 min-w-[180px] max-w-xs bg-gray-800 bg-opacity-70 rounded-lg p-4 flex flex-col items-center mx-auto">
            <img :src="member.photo" :alt="member.name" class="w-20 h-20 rounded-full object-cover mb-2 border-4 border-green-400" />
            <h3 class="font-semibold text-base sm:text-lg md:text-xl text-green-200">{{ member.name }}</h3>
            <p class="text-sm sm:text-base md:text-lg text-gray-300">{{ member.role }}</p>
          </div>
        </div>
      </section>

      <section class="text-center mt-12">
        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 mb-2">Ready to Grow Your Assets?</h2>
        <p class="text-sm sm:text-base md:text-lg text-gray-200 mb-4">Contact us today to learn how our cooperative can help you invest in crypto and real estate.</p>
        <router-link to="/contact" class="inline-block mt-2 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold shadow transition">Contact Us</router-link>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      faqs: [],
      testimonials: [],
      team: [
        {
          name: "Alice Johnson",
          role: "Chief Executive Officer",
          photo: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
          name: "Michael Lee",
          role: "Head of Investments",
          photo: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
          name: "Sara Kim",
          role: "Client Relations Manager",
          photo: "https://randomuser.me/api/portraits/women/65.jpg"
        }
      ]
    };
  },
  mounted() {
    const accessToken = localStorage.getItem('token');
    const authHeader = accessToken ? { 'Authorization': `Bearer ${accessToken}` } : {};
    // Fetch FAQs
    fetch('http://localhost:8000/api/faqs/', {
      headers: {
        'Content-Type': 'application/json',
        ...authHeader
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch FAQs');
        return res.json();
      })
      .then(data => {
        // DRF paginated response: { count, next, previous, results: [...] }
        this.faqs = Array.isArray(data) ? data : (data.results || []);
      })
      .catch(err => {
        console.error('FAQ fetch error:', err);
        this.faqs = [];
      });
    // Fetch Testimonials
    fetch('http://localhost:8000/api/testimonials/', {
      headers: {
        'Content-Type': 'application/json',
        ...authHeader
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        return res.json();
      })
      .then(data => {
        this.testimonials = Array.isArray(data) ? data : (data.results || []);
      })
      .catch(err => {
        console.error('Testimonial fetch error:', err);
        this.testimonials = [];
      });
  }
};
</script>

<style scoped>

</style>
